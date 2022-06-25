import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
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
import {
  ContinueButton,
  ContinueView,
  ContinuewButtonText,
} from "../../components/logictics.styles";
import VehicleType from "../../components/VehicleType";

export default () => {
  const { goBack, navigate } = useNavigation();
  const [values, setValues] = useState(null);
  // useEffect(() => console.log(values), [values]);
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
        <Text style={{ marginBottom: 10 }}>Type in new location</Text>
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
              desc={item.desc}
              imgSrc={item.imgSrc}
              vehicle={item.vehicle}
            />
          )}
          numColumns={2}
        />
      </Section>
      <Section>
        <Button style={{ marginBottom: 10 }}>
          <Text style={{ color: "#C3AD60", fontSize: 24 }}>Add New</Text>
        </Button>
        <Button
          style={{ backgroundColor: "#C3AD60" }}
          onPress={() => navigate("dropOff", {})}
        >
          <Text style={{ color: "#000", fontSize: 24 }}>Continue</Text>
        </Button>
      </Section>
    </LayoutScrollView>
  );
};
