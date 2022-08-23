import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import Back from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons"
import {
  CameraView,
  Save,
  TopView,
  Project,
  Select,
  CategoryRow,
  CategoryColumn,
  CategoryText,
  Category,
  AddCategory,
} from "../components/editStyles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function EditVendorProfile() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <TopView>
          <Back size={ww(30)} color="#C3AD60" name="back" style={styles.pad} />
          <Save>Save</Save>
        </TopView>
        <View style={styles.padd}>
        <CameraView></CameraView>
          <View>
          <Project>Project Name:</Project>
          <TextInput style={styles.input} multiline={true} />
          </View>
          <View>
          <Project>Project Description:</Project>
          <TextInput style={styles.input} multiline={true} />
          </View>
          <View>
          <Project>Price:</Project>
          <TextInput style={styles.input} multiline={true} />
          </View>
          <Select>Select Product Category</Select>
          <CategoryColumn>
            <CategoryRow>
            <Category>
              <CategoryText>Lifestyle</CategoryText>
              <Ionicons size={ww(9)} name="close-outline"
              color="#c4c4c4"
              style={styles.paddd}
              />
            </Category>
            <Category>
              <CategoryText>Food</CategoryText>
              <Ionicons size={ww(9)} name="close-outline"
              color="#c4c4c4"
              style={styles.paddd}
              />
            </Category>
            </CategoryRow>
            <CategoryRow>
            <Category>
              <CategoryText>Healthcare</CategoryText>
              <Ionicons size={ww(9)} name="close-outline"
              color="#c4c4c4"
              style={styles.paddd}
              />
            </Category>
            <AddCategory>
              <Ionicons name="ios-add-outline"
              color="#c4c4c4" size={ww(9)}/>
            </AddCategory>
            </CategoryRow>
          </CategoryColumn>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    flex: 1,
    position: "relative",
    paddingTop: ww(92),
    alignItems: "center",
  },
  pad: {
    paddingLeft: ww(32),
  },
  padd: {
    alignItems: "center"
  },
  paddd: {

  },
  input: {
    borderBottomWidth: ww(1),
    borderColor: "#FAF6F3",
    backgroundColor: "#000",
    color: "#fff",
    width: ww(340),
    height: ww(34),
    marginTop: ww(30),
  },
});
