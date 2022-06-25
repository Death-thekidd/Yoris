import React, { useCallback, useState } from "react";
import {
  ContinueButton,
  ContinueView,
  ContinuewButtonText,
} from "../components/logictics.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import { Layout, Text } from "../../../components/Layout";
import OneOff from "../components/OneOff";
import Multiple from "../components/Multiple";

export default function Logisticscreen() {
  const navigation = useNavigation();
  const [isMultiple, setIsMultiple] = useState(false);

  return (
    <Layout
      styles={{
        paddingHorizontal: 50,
      }}
    >
      <Header
        iconLeft={require("../../../../assets/delivery.png")}
        iconRight={require("../../../../assets/history.png")}
        onRightIconPress={() => navigation.navigate("orderHistory")}
        containerStyle={{
          paddingHorizontal: 20,
        }}
      />

      <View
        style={[
          styles.row,
          {
            justifyContent: "space-around",
            paddingHorizontal: 50,
            marginBottom: 20,
          },
        ]}
      >
        <Pressable style={{}} onPress={() => setIsMultiple(false)}>
          <Text
            style={[
              styles.screenToggleBtn,
              { color: isMultiple ? "#4E4E4E" : "#fff" },
            ]}
          >
            One Off
          </Text>
        </Pressable>
        <View style={{ borderColor: "#fff", borderWidth: 1 }} />
        <Pressable onPress={() => setIsMultiple(true)}>
          <Text
            style={[
              styles.screenToggleBtn,
              { color: !isMultiple ? "#4E4E4E" : "#fff" },
            ]}
          >
            Multiple
          </Text>
        </Pressable>
      </View>

      {/* Container */}
      <View style={[styles.container]}>
        {!isMultiple ? (
          <>
            <OneOff />
            <Spacer size="xxl">
              <ContinueView>
                <ContinueButton
                  onPress={() => navigation.navigate("Yoris Pay")}
                >
                  <ContinuewButtonText>continue</ContinuewButtonText>
                </ContinueButton>
              </ContinueView>
            </Spacer>
          </>
        ) : (
          <Multiple />
        )}
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "flex-end",
  },

  icon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  iconText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  screenToggleBtn: {
    fontSize: 16,
    fontWeight: "300",
  },
});
