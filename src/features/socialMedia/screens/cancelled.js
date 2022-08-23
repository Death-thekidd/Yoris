import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Cancel from "react-native-vector-icons/AntDesign";
import {
  TextView,
  CancelledTxt,
  CancelledTxt1,
} from "../components/cancelledStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Cancelled() {
  return (
    <SafeAreaView style={styles.container}>
      <Cancel name="closecircleo" color="#fff" size={ww(48)} />
      <TextView>
        <CancelledTxt>Order</CancelledTxt>
        <CancelledTxt1>Cancelled</CancelledTxt1>
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
