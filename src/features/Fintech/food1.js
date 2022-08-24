import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import {
  FirstFoodImage,
  SecondFoodImage,
  ThirdFoodImage,
  FourthFoodImage,
  EightFoodImage,
  NinthFoodImage,
  CircleBox,
  SmallTxt,
  ChisaiTxt,
  FoodText,
  FirstView5,
  SeeAll,
} from "../../components/screenComponents/fintech8Style";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Food1({ navigation }) {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <FirstView5>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              size={30}
              style={{ paddingLeft: ww(35) }}
              color="#C3AD60"
              name="back"
            />
          </TouchableOpacity>
          <FoodText>Food</FoodText>
          <TouchableOpacity onPress={() => navigation.navigate("Food2")}>
            <SeeAll>See all</SeeAll>
          </TouchableOpacity>
        </FirstView5>

        <FirstFoodImage source={require("../../../assets/firstFoodImg.png")}>
          <View style={styles.smallrow}>
            <CircleBox></CircleBox>
            <View style={styles.smallcolumn}>
              <SmallTxt>Brand Name</SmallTxt>
              <ChisaiTxt>0.7Km away</ChisaiTxt>
            </View>
          </View>
        </FirstFoodImage>

        <View style={styles.rowView}>
          <SecondFoodImage
            source={require("../../../assets/secondFoodImg.png")}
          >
            <View style={styles.smallrow}>
              <TouchableOpacity>
                <CircleBox></CircleBox>
              </TouchableOpacity>
              <View style={styles.smallcolumn}>
                <SmallTxt>Brand Name</SmallTxt>
                <ChisaiTxt>0.7Km away</ChisaiTxt>
              </View>
            </View>
          </SecondFoodImage>
          <ThirdFoodImage source={require("../../../assets/thirdFoodImg.png")}>
            <View style={styles.smallrow}>
              <TouchableOpacity>
                <CircleBox></CircleBox>
              </TouchableOpacity>
              <View style={styles.smallcolumn}>
                <SmallTxt>Brand Name</SmallTxt>
                <ChisaiTxt>0.7Km away</ChisaiTxt>
              </View>
            </View>
          </ThirdFoodImage>
        </View>

        <View style={styles.rowView}>
          <FourthFoodImage
            source={require("../../../assets/fourthFoodImg.png")}
          ></FourthFoodImage>
          <FourthFoodImage
            source={require("../../../assets/fifthFoodImg.png")}
          ></FourthFoodImage>
          <FourthFoodImage
            source={require("../../../assets/sixthFoodImage.png")}
          ></FourthFoodImage>
          <FourthFoodImage
            source={require("../../../assets/ninthFoodImg.png")}
          ></FourthFoodImage>
        </View>

        <View style={styles.rowView}>
          <EightFoodImage
            source={require("../../../assets/seventhFoodImg.png")}
          >
            <View style={styles.smallrow}>
              <TouchableOpacity>
                <CircleBox></CircleBox>
              </TouchableOpacity>
              <View style={styles.smallcolumn}>
                <SmallTxt>Brand Name</SmallTxt>
                <ChisaiTxt>0.7Km away</ChisaiTxt>
              </View>
            </View>
          </EightFoodImage>
          <NinthFoodImage
            source={require("../../../assets/eightFoodImg.png")}
          ></NinthFoodImage>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    paddingTop: ww(20),
    flex: 1,
  },
  rowView: {
    flexDirection: "row",
  },
  smallrow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: ww(15),
    marginLeft: ww(15),
  },
  smallcolumn: {
    marginLeft: ww(5),
  },
});
