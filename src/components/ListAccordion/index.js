import React, { useState } from "react";
import { View, Image, Button, Pressable } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";
import StepIndicator from "react-native-step-indicator";
import { useNavigation } from "@react-navigation/native";
import { Section, Text } from "../Layout";
export function ListAccordion() {
  const navigation = useNavigation();
  const labels = ["Accepted", "Picked up", "Delivered"];

  const customStyles = {
    stepIndicatorSize: 5,
    currentStepIndicatorSize: 5,
    separatorStrokeWidth: 3,
    separatorStrokeUnfinishedWidth: 0,
    separatorStrokeFinishedWidth: 0,
    currentStepStrokeWidth: 5,
    stepStrokeWidth: 4,
    stepStrokeCurrentColor: "#C3AD60",
    stepStrokeFinishedColor: "#C3AD60",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#C3AD60",
    separatorUnFinishedColor: "##aaaaaa",
    stepIndicatorFinishedColor: "#C3AD60",
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
    currentStepLabelColor: "#C3AD60",
  };

  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Accordion
      expanded={expanded}
      onPress={handlePress}
      title={
        <View>
          <View>
            <Text style={[styles.white, styles.orderNumber]}>#oRDerNuMbeR</Text>
            <Text style={[styles.white, styles.trackingNumber]}>
              #tRaCkiNgnUMbEr
            </Text>
            <Text style={[styles.white, styles.date]}>DD/MM/YYYY</Text>
          </View>
        </View>
      }
      style={{
        backgroundColor: "#000",
      }}
      right={({ style }) => (
        <View
          style={[{ alignContent: "center", paddingHorizontal: 20 }, style]}
        >
          <Image
            style={[styles.listIcon, { marginBottom: 25 }]}
            source={require("../../../assets/delivering.png")}
          />
          {!expanded && (
            <Image
              style={[styles.listIcon]}
              source={require("../../../assets/caretDown.png")}
            />
          )}
        </View>
      )}
    >
      <Pressable onPress={() => navigation.navigate("singleOrder", {})}>
        <List.Item
          titleStyle={[styles.white, styles.infoText]}
          style={{ marginVertical: 0 }}
          title="Type of good"
        />
        <List.Item
          titleStyle={[styles.white, styles.infoText]}
          style={{ marginVertical: 0 }}
          title="Mode of Trans"
        />
        <List.Item
          titleStyle={[styles.white, styles.infoText]}
          style={{ marginVertical: 0 }}
          title="Drop-Off Address"
        />
        <List.Item
          titleStyle={[styles.white, styles.infoText]}
          style={{ marginVertical: 0 }}
          title="Pick-Up Address"
        />
        <List.Item
          titleStyle={[styles.white, { fontWeight: "700", fontSize: 25 }]}
          style={{ marginVertical: 0 }}
          title="N0.00k"
        />
      </Pressable>

      <Section
        style={[
          { marginTop: 0, flexDirection: "row", justifyContent: "center" },
        ]}
      >
        <Image
          style={{
            borderRadius: 6,
            marginRight: 15,
          }}
          source={require("../../../assets/product.png")}
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
      <View
        style={{
          marginVertical: 15,
          justifyContent: "flex-end",
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        {expanded && (
          <Image
            style={[styles.listIcon, { transform: [{ rotate: "-180deg" }] }]}
            source={require("../../../assets/caretDown.png")}
          />
        )}
      </View>
    </List.Accordion>
  );
}
