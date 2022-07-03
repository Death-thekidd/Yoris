import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, FlatList, View } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import { Button } from "../../../../components/Button";
import Header from "../../../../components/Header";
import { LayoutScrollView, Section, Text } from "../../../../components/Layout";
import Modal from "../../../../components/Modal";
import Selector from "../../../../components/Selector";
import useBottomSheet from "../../../../hooks/useBottomSheet";
import AddLocationInput from "../../components/AddLocationInput";
import InfoInput from "../../components/InfoInput";
import MultiItem from "../../components/MultiItem";
import VehicleType from "../../components/VehicleType";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GOOGLE_MAPS_DIRECTIONS_API } from "@env";
import * as Location from "expo-location";

const itemCategory = ["Food"];
const vehicles = [
  {
    desc: "Medium - Large size packages.",
    imgSrc: require("../../../../../assets/bus.png"),
    vehicle: "Pick-Up Truck",
  },
  {
    desc: "Small - Medium size packages.",
    imgSrc: require("../../../../../assets/motocycle.png"),
    vehicle: "Motorcycle",
  },
  {
    desc: "Medium - Large size packages, inter state.",
    imgSrc: require("../../../../../assets/bus.png"),
    vehicle: "Bus",
  },
];
export default () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();
  // states
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [values, setValues] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dropOffs, setDropOffs] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [pickups, setPickups] = useState([]);
  const [showAddInput, setShowAddInput] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [presentDropIndex, setPresentDropIndex] = useState(null);
  const [errMsg, setErrorMsg] = useState();
  const [location, setLocation] = useState();

  const isMultiple = params.multiPickup && params.multiDropOff;
  const onVehicleChange = (key) => setSelectedVehicle(key);
  const { BottomSheetModalComponent, handlePresentModalPress } =
    useBottomSheet();

  const onSaveAddress = () => {
    setModalVisible(false);

    navigate(!isMultiple ? "dropOff" : "confirmOrder", {
      ...params,
      pickups,
    });
  };

  const validateInputs = () => {
    if (!values) throw new Error("Value cannot be empty");
    if (values?.address == " ")
      throw new Error("Pickup Address cannot be empty");
    if (isMultiple)
      if (values?.dropOff.address == " ")
        throw new Error("DropOff address cannot be empty");

    return true;
  };
  const useCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location.coords.latitude},${location.coords.longitude}&key=${GOOGLE_MAPS_DIRECTIONS_API}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(
          "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
        );
      });
    setLocation(location);
  };

  useEffect(() => {
    setValues((states) => ({
      ...states,
      category: selectedCategory,
      vehicle: vehicles[selectedVehicle].vehicle,
    }));
  }, [selectedVehicle, selectedCategory]);
  useEffect(() => {
    console.log("values =>", values);
    console.log("Location =>", location);
  }, [values, location]);
  return (
    <BottomSheetModalProvider>
      <LayoutScrollView style={{ paddingHorizontal: 30 }}>
        <Header
          iconLeft={require("../../../../../assets/backIcon.png")}
          onLeftIconPress={() => goBack()}
          onRightIconPress={() => navigate("logisticsMain")}
          headerTitle={!isMultiple ? "Pickup Location" : "Enter Information"}
          headerTitleStyle={{
            color: Constants.theme.primary,
          }}
          iconRight={require("../../../../../assets/cancel.png")}
        />

        {params.multiPickup && (
          <FlatList
            data={savedAddresses}
            renderItem={({ index, item }) => (
              <MultiItem
                title="Pick-Up Location"
                address={item?.address}
                dropOffAddress={item?.dropOff.address}
                containerStyle={{
                  marginRight: 10,
                  width: 310,
                }}
                isMultiple={isMultiple}
                onDropPress={() => {
                  setPresentDropIndex(index);
                  handlePresentModalPress();
                }}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"center"}
          />
        )}

        <Button
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 0,
            borderWidth: 0,
          }}
          onPress={useCurrentLocation}
        >
          <Image source={require("../../../../../assets/mapPointerGold.png")} />
          <Text style={{ fontSize: 24 }}>Use Current Location</Text>
        </Button>

        {showAddInput && (
          <AddLocationInput
            label={"Add Pickup Location"}
            pickupValue={location?.pickupAddress}
            setValues={setValues}
            isMultiple={isMultiple}
            dropOffs={dropOffs}
            pickUps={pickups}
          />
        )}

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

        <Section>
          {params.multiPickup && (
            <Button
              style={{ marginBottom: 10 }}
              onPress={() =>
                setSavedAddresses((prevPickups) => {
                  // return new Items
                  // const new
                  return [...prevPickups, values];
                })
              }
            >
              <Text style={{ color: Constants.theme.primary, fontSize: 24 }}>
                {!isMultiple ? "Add More Pickup" : "Add More Address"}
              </Text>
            </Button>
          )}

          <BottomSheetModalComponent
            info={savedAddresses[presentDropIndex]}
            index={presentDropIndex}
            isMultiple={isMultiple}
            vehicles={vehicles}
            itemCategory={itemCategory}
            setSavedAddresses={setSavedAddresses}
          />

          {/* Modal */}
          <Modal
            buttonColor={Constants.theme.dark}
            modalButtonCallBack={
              !params.multiPickup
                ? () => setPickups((prevPickups) => [...prevPickups, values])
                : false
            }
            ModalTitle={() => (
              <Text
                style={{
                  fontSize: 24,
                  color: Constants.theme.light,
                  marginBottom: 15,
                }}
              >
                Save New Address?
              </Text>
            )}
            BottomRow={() => (
              <>
                <Button
                  style={{
                    backgroundColor: Constants.theme.dark,
                    marginRight: 30,
                    paddingHorizontal: 30,
                  }}
                  onPress={() => {
                    setModalVisible(false);
                    navigate(!isMultiple ? "dropOff" : "confirmOrder", {
                      ...params,
                      pickups,
                    });
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 24 }}>No</Text>
                </Button>
                <Button
                  style={{
                    backgroundColor: Constants.theme.primary,
                    paddingHorizontal: 30,
                  }}
                  onPress={onSaveAddress}
                >
                  <Text style={{ color: Constants.theme.dark, fontSize: 24 }}>
                    Yes
                  </Text>
                </Button>
              </>
            )}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </Section>
      </LayoutScrollView>
    </BottomSheetModalProvider>
  );
};
