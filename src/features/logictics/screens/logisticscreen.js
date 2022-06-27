import React, { useCallback, useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import { Layout, Text } from "../../../components/Layout";
import OneOff from "../components/OneOff";
import Multiple from "../components/Multiple";
import { Button } from "../../../components/Button";

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
            <Button
              onPress={() =>
                navigation.navigate("pickUp", {
                  singlePickup: true,
                  singleDropOff: true,
                })
              }
              style={{ backgroundColor: "#C3AD60", marginTop: 74, color: "#000"}}
            >
              <Text style={{ fontSize: 24, color: "#000" }}>Continue</Text>
            </Button>
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
