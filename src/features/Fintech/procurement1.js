import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FirstView,
  BigText,
  SecondView,
  BtnText,
  MiddleText,
} from "../componenets/fintech1Style";
import { ww, hh, wp } from "../../../responsive";

export default function Procurement1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FirstView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              size={20}
              color="#C3AD60"
              name="back"
              style={{ paddingLeft: ww(54) }}
            />
          </TouchableOpacity>

          <BigText style={styles.padd}>Procurement</BigText>

          <TouchableOpacity
            style={styles.bells}
            onPress={() => navigation.navigate("Procurement9")}
          >
            <AntDesign size={20} color="#C3AD60" name="bells" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.clipboard}
            onPress={() => navigation.navigate("Procurement6")}
          >
            <Feather size={20} color="#C3AD60" name="clipboard" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.history}
            onPress={() => navigation.navigate("Procurement10")}
          >
            <MaterialIcons size={20} color="#C3AD60" name="history" />
          </TouchableOpacity>
        </FirstView>

        <SecondView>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Procurement2")}
          >
            <BtnText>Paste Link</BtnText>
          </TouchableOpacity>
          <View style={styles.txt}>
            <MiddleText>-Or-</MiddleText>
          </View>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => navigation.navigate("Procurement3")}
          >
            <BtnText>Upload Photo</BtnText>
          </TouchableOpacity>
        </SecondView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  btn: {
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: ww(64),
    width: ww(320),
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  btn1: {
    marginTop: 39,
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: ww(64),
    width: ww(320),
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  btnText: {
    color: "#000",
    fontFamily: "Roboto",
  },
  txt: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  clipboard: {
    paddingLeft: ww(29),
  },
  bells: {
    paddingLeft: ww(36),
  },
  history: {
    paddingLeft: ww(32),
  },
});
