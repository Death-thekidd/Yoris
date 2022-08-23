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
  WhyContainer,
  RowView,
  WhyText,
  FirstText,
  SecondText,
} from "../components/whyStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Why() {
  return (
    <SafeAreaView style={styles.container}>
      <WhyContainer>
        <RowView>
          <WhyText>WHY?</WhyText>
          <Cancel
            size={ww(48)}
            color="#4E4E4E"
            name="closecircleo"
            style={styles.pad}
          />
        </RowView>
        <Pressable style={styles.firstbtn}>
          <FirstText>Restocking</FirstText>
        </Pressable>
        <Pressable style={styles.secondbtn}>
          <SecondText>No longer sold</SecondText>
        </Pressable>
      </WhyContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    position: "relative",
    alignItems: "center",
  },
  pad: {
    paddingLeft: ww(159),
    paddingTop: ww(71),
  },
  firstbtn: {
    height: ww(64),
    width: ww(320),
    borderRadius: 100,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
    marginTop: ww(72),
    marginLeft: ww(54),
  },
  secondbtn: {
    height: ww(64),
    width: ww(320),
    borderRadius: 100,
    backgroundColor: "#000",
    borderWidth: ww(1),
    borderColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
    marginTop: ww(48),
    marginLeft: ww(54),
  },
});
