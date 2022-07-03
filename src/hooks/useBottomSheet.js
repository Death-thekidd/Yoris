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

export default () => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "98%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return {
    BottomSheetModalComponent: ({
      info,
      index,
      isMultiple,
      vehicles,
      itemCategory,
      setSavedAddresses,
    }) => {
      // states
      const [selectedVehicle, setSelectedVehicle] = useState(0);
      const [selectedCategory, setSelectedCategory] = useState(null);
      const [values, setValues] = useState();
      const onVehicleChange = (key) => setSelectedVehicle(key);

      useEffect(() => {
        setValues((prevValues) => ({
          ...prevValues,
          category: selectedCategory,
          vehicle: vehicles[selectedVehicle].vehicle,
        }));
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
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
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
          <BottomSheetScrollView>
            <AddLocationInput
              label={"Edit Pick-up Location"}
              setValues={setValues}
              isMultiple={isMultiple}
              notShowSaved
              isEdit
              defaultDropVal={info?.dropOff.address}
              defaultPickupVal={info?.address}
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
