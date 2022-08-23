import { useCallback, useMemo, useRef, useState } from "react";
import { Section, Text } from "../components/Layout";
import {
  BottomSheetModal,
  BottomSheetTextInput,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Constants } from "../../constants/db.mock";
import { useEffect } from "react";
import { memo } from "react";
import AddLocationInput from "../features/logictics/components/AddLocationInput";
import Selector from "../components/Selector";
import { FlatList, View } from "react-native";
import InfoInput from "../features/logictics/components/InfoInput";
import VehicleType from "../features/logictics/components/VehicleType";
import { Button } from "../components/Button";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

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
    }) => {
      const { params } = useRoute();
      // states
      const [selectedVehicle, setSelectedVehicle] =
        useState(selectedVehicleIndex);
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [values, setValues] = useState();
      const onVehicleChange = (key) => setSelectedVehicle(key);

      useEffect(() => {
        setValues((prevValues) => ({
          ...prevValues,
          category: selectedCategory,
          vehicle: vehicles[selectedVehicle].vehicle,
        }));
        return setValues(null);
      }, [selectedCategory, selectedVehicle]);

      const onSaveAddress = () => {
        setSavedAddresses((prevPickups) => {
          let newArr = [...prevPickups];
          newArr[index] = {
            ...newArr[index],
            ...values,
          };
          return newArr;
        });
        setValues(null);
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
            />
            <AddLocationInput
              label={
                params.isInternationalActive
                  ? "Edit Tracking ID"
                  : "Edit Pickup Location"
              }
              setValues={setValues}
              isMultiple={isMultiple}
              notShowSaved
              isEdit
              defaultDropVal={
                params.isInternationalActive && !isMultiple
                  ? false
                  : isMultiple
                  ? info?.dropOff.address
                  : null
              }
              defaultPickupVal={
                info?.[params.isInternationalActive ? "trackingId" : "address"]
              }
            />
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
            {isMultiple && (
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
                  setValues={setValues}
                  namePlaceholder={"Receiver’s name"}
                  phonePlaceholder={"Receiver’s Phone"}
                  defaultNameVal={
                    isMultiple ? info?.dropOff.receiversName : undefined
                  }
                  defaultPhoneVal={
                    isMultiple ? info?.dropOff.receiversPhone : undefined
                  }
                />
              </Section>
            )}

            <Button style={{ marginBottom: 10 }} onPress={onSaveAddress}>
              <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
                {"Save"}
              </Text>
            </Button>
          </BottomSheetScrollView>
        </BottomSheetModal>
      );
    },
    handlePresentModalPress,
  };
};
