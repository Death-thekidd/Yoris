import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { TextInput, Image, FlatList, View } from "react-native";
import { Button } from "../../../../components/Button";
import Header from "../../../../components/Header";
import {
  Layout,
  LayoutScrollView,
  Section,
  Text,
} from "../../../../components/Layout";
import Modal from "../../../../components/Modal";
import { Row } from "../../../../components/Modal/styles";
import AddLocationInput from "../../components/AddLocationInput";
import AddressBox from "../../components/AddressBox/AddressBox";
import MultiItem from "../../components/MultiItem";
import VehicleType from "../../components/VehicleType";

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
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [values, setValues] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pickups, setPickups] = useState([]);

  const onVehicleChange = (key) => {
    setSelectedVehicle(key);
    // console.log("Vehicle =>", vehicles[key]);
  };

  useEffect(() => console.log("Pickups =>", pickups), [pickups]);

  return (
    <LayoutScrollView style={{ paddingHorizontal: 30 }}>
      <Header
        iconLeft={require("../../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
        headerTitle={"Pickup Location"}
        headerTitleStyle={{
          color: "#C3AD60",
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />

      {params.multiPickup && (
        <FlatList
          data={pickups}
          renderItem={({ index, item }) => (
            <MultiItem
              title="Pick-Up Location"
              address={item.address}
              containerStyle={{
                marginRight: 10,
                width: 310,
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
        />
      )}

      <Section
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 0,
        }}
      >
        <Image source={require("../../../../../assets/mapPointerGold.png")} />
        <Text style={{ fontSize: 24 }}>Use Current Location</Text>
      </Section>

      <AddLocationInput label={"Add Pickup Location"} setValues={setValues} />

      <Section
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
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
      <Section>
        {params.multiPickup && (
          <Button
            style={{ marginBottom: 10 }}
            onPress={() =>
              setPickups((prevPickups) => [...prevPickups, values])
            }
          >
            <Text style={{ color: "#C3AD60", fontSize: 24 }}>Add Pickup</Text>
          </Button>
        )}

        <Modal
          ModalTitle={() => (
            <Text style={{ fontSize: 24, color: "#000", marginBottom: 15 }}>
              Save New Address?
            </Text>
          )}
          BottomRow={() => (
            <>
              <Button
                style={{
                  backgroundColor: "#000",
                  marginRight: 30,
                  paddingHorizontal: 30,
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigate("dropOff", { ...params, pickups });
                }}
              >
                <Text style={{ color: "#fff", fontSize: 24 }}>No</Text>
              </Button>
              <Button
                style={{ backgroundColor: "#C3AD60", paddingHorizontal: 30 }}
                onPress={() => {
                  setModalVisible(false);
                  navigate("dropOff", { ...params, pickups });
                }}
              >
                <Text style={{ color: "#000", fontSize: 24 }}>Yes</Text>
              </Button>
            </>
          )}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </Section>
    </LayoutScrollView>
  );
};
