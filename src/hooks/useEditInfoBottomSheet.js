import { useEffect, useCallback, useMemo, useRef, useState } from "react";
import { Section, Text } from "../components/Layout";
import { BottomSheetModal, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Constants } from "../../constants/db.mock";
import AddLocationInput from "../features/logictics/components/AddLocationInput";
import Selector from "../components/Selector";
import { FlatList, Pressable, View } from "react-native";
import InfoInput from "../features/logictics/components/InfoInput";
import VehicleType from "../features/logictics/components/VehicleType";
import { Button } from "../components/Button";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";
import useInput from "./useInput";
import { FontAwesome } from "../components/Icons";
import { Controller, useForm } from "react-hook-form";

export default () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["100%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const onClose = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  return {
    BottomSheetModalComponent: ({
      info,
      index,
      isMultiple,
      vehicles,
      itemCategory,
      setSavedAddresses,
      selectedVehicleIndex,
      isDrop = null,
    }) => {
      const { params } = useRoute();
      // states
      const [selectedVehicle, setSelectedVehicle] =
        useState(selectedVehicleIndex);
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [values, setValues] = useState(null);
      const onVehicleChange = (key) => setSelectedVehicle(key);

      const {
        handleSubmit,
        formState: { errors },
        setError,
        setValue,
        control,
      } = useForm();

      const { Input } = useInput();

      useEffect(() => {
        setValues((prevValues) => ({
          ...prevValues,
          category: selectedCategory,
          ...(isMultiple && { vehicle: vehicles[selectedVehicle].vehicle }),
        }));
        return setValues(null);
      }, [selectedCategory, selectedVehicle]);

      const onSaveAddress = (data) => {
        !isDrop &&
          setSavedAddresses((prevData) => {
            let newArr = [...prevData];
            newArr[index] = {
              ...newArr[index],
              address:
                data[
                  params.isInternationalActive ? "trackingId" : "pickUpAddress"
                ],
              ...(isMultiple && {
                dropOff: {
                  address: data.dropOffAddress,
                  receiversName: data.receiversName,
                  receiversPhone: data.receiversPhone,
                },
              }),
            };
            return newArr;
          });

        isDrop &&
          setSavedAddresses((prevData) => {
            let newArr = [...prevData];
            newArr[index] = {
              ...newArr[index],
              ...(isMultiple && {
                address:
                  data[
                    params.isInternationalActive
                      ? "trackingId"
                      : "pickUpAddress"
                  ],
                dropOff: {
                  address: data.dropOffAddress,
                  receiversName: data.receiversName,
                  receiversPhone: data.receiversPhone,
                },
              }),
            };
            return newArr;
          });
      };

      return (
        <BottomSheetModal
          enableOverDrag={false}
          ref={bottomSheetModalRef}
          // index={1}
          enableHandlePanningGesture={false}
          enableContentPanningGesture={false}
          snapPoints={snapPoints}
          handleIndicatorStyle={{
            backgroundColor: "#fff",
          }}
          backgroundStyle={{
            backgroundColor: Constants.theme.dark,
          }}
          style={{
            paddingHorizontal: 25,
          }}
        >
          <BottomSheetScrollView showsVerticalScrollIndicator={false}>
            <Header
              headerTitle={<Text>Edit Details</Text>}
              iconRight={require("../../assets/cancel.png")}
              onRightIconPress={onClose}
              IconLeftComponent={() => (
                <Pressable
                  onPress={() =>
                    setSavedAddresses((prevData) => {
                      let newArr = [...prevData];
                      newArr.splice(index, 1);
                      console.log(newArr);

                      return newArr;
                    })
                  }
                >
                  <FontAwesome
                    name="trash-alt"
                    color={Constants.theme.primary}
                    size={25}
                  />
                </Pressable>
              )}
            />
            <AddLocationInput
              errors={errors}
              Input={Input}
              isMultiple={isMultiple}
              Controller={Controller}
              control={control}
            />

            {!isDrop && (
              <Section
                style={{
                  flexDirection: "row",
                  marginVertical: 2,
                }}
              >
                <FlatList
                  data={vehicles}
                  renderItem={({ item, index }) => (
                    <VehicleType
                      itemKey={index}
                      onVehicleSelect={onVehicleChange}
                      selectedVehicle={selectedVehicle}
                      desc={item.desc}
                      imgSrc={item.imgSrc}
                      vehicle={item.vehicle}
                    />
                  )}
                  numColumns={2}
                />
              </Section>
            )}

            {(isMultiple || isDrop) && (
              <Section>
                {/* Category Selector */}
                <Selector
                  data={itemCategory}
                  defaultValue={isMultiple ? info?.category : undefined}
                  buttonStyle={{
                    marginVertical: 20,
                    width: "100%",
                  }}
                  dropdownIconPosition={"right"}
                  defaultButtonText="Select Item Category"
                  buttonTextStyle={{
                    fontSize: 20,
                  }}
                  setSelectedItem={setSelectedCategory}
                />
                <View
                  style={{
                    borderBottomColor: Constants.theme.primary,
                    borderWidth: 1,
                    width: "100%",
                    marginBottom: 25,
                  }}
                />
                <InfoInput
                  Input={Input}
                  errors={errors}
                  setError={setError}
                  setValue={setValue}
                  namePlaceholder={"Receiver’s name"}
                  phonePlaceholder={"Receiver’s Phone"}

                  Controller={Controller}
                  control={control}
                />
              </Section>
            )}

            <Button
              style={{ marginBottom: 10 }}
              onPress={handleSubmit(onSaveAddress)}
            >
              <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
                Save
              </Text>
            </Button>
          </BottomSheetScrollView>
        </BottomSheetModal>
      );
    },
    handlePresentModalPress,
  };
};
