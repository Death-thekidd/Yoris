import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import Header from "../../../components/Header";
import { Section } from "../../payment/screens/style";
import { FontAwesome } from "../../../components/Icons";
import { ListAccordion } from "../../../components/ListAccordion";
import { LayoutScrollView } from "../../../components/Layout";

export default function () {
  const { goBack } = useNavigation();

  return (
    <LayoutScrollView style={{ paddingHorizontal: 23 }}>
      {/* Header */}
      <Header
        headerTitle={"Order History & Tracking"}
        headerTitleStyle={{
          color: "#C3AD60",
        }}
        iconLeft={require("../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
      />

      <Section>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
      </Section>
    </LayoutScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  white: {
    color: "#fff",
  },
  orderNumber: {
    fontWeight: "500",
    color: Platform.OS !== "ios" && "grey",
  },
  trackingNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  date: {
    fontWeight: Platform.OS === "ios" ? "100" : "normal",
    color: Platform.OS !== "ios" && "grey",
  },
  listIcon: {
    width: 50,
    resizeMode: "contain",
  },
  infoText: {
    fontWeight: "200",
    fontSize: 13,
    color: "grey",
  },
});
