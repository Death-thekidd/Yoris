import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Check from "react-native-vector-icons/AntDesign";
import {
  TextView,
  InitializedTxt,
  InitializedTxt1,
} from "../components/initializedStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Initialized() {
  return (
    <SafeAreaView style={styles.container}>
      <Check name="checkcircleo" color="#fff" size={ww(48)} />
      <TextView>
        <InitializedTxt>Order</InitializedTxt>
        <InitializedTxt1>Initialized</InitializedTxt1>
      </TextView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    position: "relative",
    alignItems: "center",
    paddingTop: ww(90),
  },
});
