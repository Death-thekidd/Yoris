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

export default function Procurement1({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FirstView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign size={30} color="#C3AD60" name="back" />
          </TouchableOpacity>

          <BigText style={styles.padd}>Procurement</BigText>

          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Procurement9")}
            >
              <AntDesign size={20} color="#C3AD60" name="bells" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => navigation.navigate("Procurement6")}
            >
              <Feather size={20} color="#C3AD60" name="clipboard" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Procurement10")}
            >
              <MaterialIcons size={20} color="#C3AD60" name="history" />
            </TouchableOpacity>
          </View>
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
    paddingTop: 20,
  },
  btn: {
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: 65,
    width: 283,
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
  },
  btn1: {
    marginTop: 39,
    backgroundColor: "#C3AD60",
    borderRadius: 100,
    height: 65,
    width: 283,
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
  touch: {},
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "30%",
  },
});
