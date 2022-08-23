import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Trash from "react-native-vector-icons/Ionicons";
import { TextView, DeletedTxt, DeletedTxt1 } from "../components/deletedStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Deleted() {
  return (
    <SafeAreaView style={styles.container}>
      <Trash name="trash-outline" color="#fff" size={ww(48)} />
      <TextView>
        <DeletedTxt>Product</DeletedTxt>
        <DeletedTxt1>Deleted</DeletedTxt1>
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
