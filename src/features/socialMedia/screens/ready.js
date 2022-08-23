import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import {
  BtnText,
  BtnText2,
  BtnView,
  BtnView2,
  ReadyText,
  Btn,
} from "../components/readyStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;
//Install yarn add react-native-drop-shadow for the shadow
export default function Ready() {
  const [isWeeks, setIsWeeks] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ReadyText>Ready within?</ReadyText>
      <Pressable style={styles.top} onPress={() => setIsWeeks(false)}>
        <BtnView style={[{ backgroundColor: isWeeks ? "#000" : "#C3AD60" }]}>
          <BtnText>3-5 days</BtnText>
        </BtnView>
      </Pressable>
      <Pressable onPress={() => setIsWeeks(true)}>
        <BtnView2 style={[{ backgroundColor: !isWeeks ? "#000" : "#C3AD60" }]}>
          <BtnText>1-2 weeks</BtnText>
        </BtnView2>
      </Pressable>
      <View>
        {!isWeeks ? (
          <Btn>
            <BtnText2>Select</BtnText2>
          </Btn>
        ) : (
          <Btn>
            <BtnText2>Select</BtnText2>
          </Btn>
        )}
      </View>
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
  top: {
    marginTop: ww(48),
  },
});
