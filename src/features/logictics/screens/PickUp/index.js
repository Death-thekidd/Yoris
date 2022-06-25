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
  const { goBack, navigate, setParams } = useNavigation();
  const { params } = useRoute();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [values, setValues] = useState(null);

  const onVehicleChange = (key) => {
    setSelectedVehicle(key);
    // console.log("Vehicle =>", vehicles[key]);
  };

  useEffect(
    () => console.log("Vehicle =>", selectedVehicle),
    [selectedVehicle]
  );

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
      <MultiItem
        title="Pick-Up Location"
        address="15 AP street, Federal Low-cost Housing Estate, Ikorodu."
      />
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
      <Section
        style={{
          marginBottom: 0,
        }}
      >
        <Text style={{ marginBottom: 10 }}>Add Pickup Location</Text>
        <TextInput
          onChangeText={(text) =>
            setValues((states) => ({ ...states, address: text }))
          }
          placeholder={"Address"}
          placeholderTextColor={"white"}
          style={{
            backgroundColor: "#4E4E4E",
            borderRadius: 5,
            marginVertical: 5,
            padding: 10,
            color: "#fff",
          }}
        />
      </Section>
      <Section>
        <Text style={{ marginBottom: 10 }}>Saved Addresses</Text>
        <FlatList
          data={["add 1", "", "", ""]}
          horizontal
          renderItem={({ item, index }) => (
            <AddressBox text={`Address ${index}`} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </Section>
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
          <Button style={{ marginBottom: 10 }}>
            <Text style={{ color: "#C3AD60", fontSize: 24 }}>
              Add More Pickup
            </Text>
          </Button>
        )}

        <Button
          style={{ backgroundColor: "#C3AD60" }}
          onPress={() => navigate("dropOff", params)}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Continue</Text>
        </Button>
      </Section>
    </LayoutScrollView>
  );
};
