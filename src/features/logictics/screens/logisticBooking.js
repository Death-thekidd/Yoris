import React, { useState } from "react";
import { SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../../components/Header";
import { LayoutScrollView, Section, Text } from "../../../components/Layout";
import AddressBox from "../components/AddressBox/AddressBox";
import { Input } from "../components/location.styles";

export default function LogisticsBooking() {
  const [values, setValues] = useState("");
  const inputs = [
    {
      name: "houseNumber",
      placeHolder: "House Number",
    },
    {
      name: "streetAddress",
      placeHolder: "Street address",
    },
    {
      name: "busStop",
      placeHolder: "Bus stop",
    },
    {
      name: "localGovtArea",
      placeHolder: "Local Govt area",
    },
  ];
  // const onChange =
  return (
    <LayoutScrollView>
      <Header
        iconLeft={require("../../../../assets/backIcon.png")}
        iconRight={require("../../../../assets/cancelGold.png")}
        headerTitle={"Drop-Off Location"}
        headerTitleStyle={{
          color: "#C3AD60",
        }}
      />

      <Section>
        <Text
          style={{
            color: "#4E4E4E",
          }}
        >
          Saved Address
        </Text>
        {/* Address's */}
        <FlatList
          data={["add 1", "", "", ""]} /* simulates incoming backend data */
          horizontal
          renderItem={({ item, index }) => (
            <AddressBox text={`Address ${index}`} />
          )}
          showsHorizontalScrollIndicator={false}
        />
      </Section>

      <Section>
        <Text>Type in new location</Text>

        <View>
          {inputs.map((input, i) => (
            <TextInput
              key={i + input.name}
              onChangeText={(text) =>
                setValues((states) => ({ ...states, [input.name]: text }))
              }
              placeholder={input.placeHolder}
              placeholderTextColor={"white"}
              style={{
                backgroundColor: "#4E4E4E",
                borderRadius: 5,
                marginVertical: 5,
                padding: 10,
              }}
            />
          ))}
        </View>
      </Section>
    </LayoutScrollView>
  );
}
