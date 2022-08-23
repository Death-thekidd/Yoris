import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import StepIndicator from "../../../components/StepIndicator";
import Layout, { Text } from "../../../components/Layout";
import { Section } from "../../payment/screens/style";
import { Constants } from "../../../../constants/db.mock";

const customStyles = {
  stepIndicatorSize: 5,
  currentStepIndicatorSize: 5,
  separatorStrokeWidth: 3,
  separatorStrokeUnfinishedWidth: 0,
  separatorStrokeFinishedWidth: 0,
  currentStepStrokeWidth: 5,
  stepStrokeWidth: 4,
  stepStrokeCurrentColor: Constants.theme.primary,
  stepStrokeFinishedColor: Constants.theme.primary,
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: Constants.theme.primary,
  separatorUnFinishedColor: "##aaaaaa",
  stepIndicatorFinishedColor: Constants.theme.primary,
  stepIndicatorUnFinishedColor: "##aaaaaa",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#fff",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#fff",
  labelSize: 13,
  labelAlign: "center",
  currentStepLabelColor: Constants.theme.primary,
};

const labels = ["Pending", "Delivering", "Delivered"];

export default function ({ style }) {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <Layout>
      <View
        style={{
          borderWidth: 1,
          borderColor: Constants.theme.primary,
          borderRadius: 7,
          marginVertical: 25,
          padding: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          {/* Order Info */}
          <View>
            <Text style={[styles.white, styles.orderNumber]}>#oRDerNuMbeR</Text>
            <Text style={[styles.white, styles.trackingNumber]}>
              #tRaCkiNgnUMbEr
            </Text>
            <Text style={[styles.white, styles.date]}>DD/MM/YYYY</Text>
          </View>
          {/* Order Status Image */}
          <View
            style={[{ alignContent: "center", paddingHorizontal: 20 }, style]}
          >
            <Image
              style={[styles.listIcon, { marginBottom: 25 }]}
              source={require("../../../../assets/delivering.png")}
            />
          </View>
        </View>

        <Section styles={{ marginTop: 0 }}>
          <Text style={[styles.white, styles.infoText]}>Type of good</Text>
          <Text style={[styles.white, styles.infoText]}>Mode of Trans</Text>
          <Text style={[styles.white, styles.infoText]}>Drop-Off Address</Text>
          <Text style={[styles.white, styles.infoText]}>Pick-Up Address</Text>
          <Text style={[styles.white, { fontWeight: "700", fontSize: 25 }]}>
            N0.00k
          </Text>
        </Section>

        {/* Product Info */}
        <Section style={[styles.row, { marginTop: 0 }]}>
          <Image
            style={{
              borderRadius: 6,
              marginRight: 15,
            }}
            source={require("../../../../assets/product.png")}
          />
          <View>
            <Text style={[styles.white]}>Product Name</Text>
            <Text style={[styles.white]}>N0.00</Text>
            <Text style={[styles.white, { textAlignVertical: "bottom" }]}>
              Quantity
            </Text>
          </View>
        </Section>

        <StepIndicator
          customStyles={customStyles}
          currentPosition={1}
          labels={labels}
          stepCount={3}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {},
  white: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
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
