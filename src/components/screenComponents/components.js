import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import styled from "styled-components/native";
import { ww, wp } from "../../../responsive";

const StyledCart1 = styled.Image`
  width: ${ww(25)}px;
  height: ${ww(25)}px;
  margin-right: ${ww(20)}px;
`;

const StyledHamburger1 = styled.Image`
  width: ${ww(25)}px;
  height: ${ww(25)}px;
  margin-right: ${ww(20)}px;
`;

const StyledFilter1 = styled.Image`
  width: ${ww(25)}px;
  height: ${ww(25)}px;
  margin-right: ${ww(20)}px;
`;

const Button1 = styled.TouchableOpacity`
  width: ${ww(320)}px;
  height: ${ww(64)}px;
  background: #c3ad60;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000000;
`;

const Button2 = styled.TouchableOpacity`
  width: ${ww(320)}px;
  height: ${ww(64)}px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  border: 1px solid #c3ad60;
  border-radius: 30px;
`;

export const VectorHeader = ({
  goBack,
  handleBrandView,
  handleSearch,
  handleCart,
}) => {
  return (
    <View style={styles.vector}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name="back"
          style={{ marginLeft: ww(20) }}
          size={ww(25)}
          color="#C3AD60"
        />
      </TouchableOpacity>
      <View style={styles.vectorRight}>
        <TouchableOpacity onPress={() => handleSearch()}>
          <Feather
            name="search"
            style={{ marginRight: ww(25) }}
            size={ww(25)}
            color="#C3AD60"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCart()}>
          <MaterialCommunityIcons
            name="cart-variant"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleBrandView()}>
          <Ionicons
            name="filter"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  vector: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: ww(80),
    alignItems: "center",
    marginTop: ww(66),
  },
  vectorRight: {
    flexDirection: "row",
  },
});

export const VectorHeader2 = ({ goBack, handleBrandView, handleCart }) => {
  return (
    <View style={styless.vector}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name="back"
          style={{ marginLeft: ww(20) }}
          size={ww(25)}
          color="#C3AD60"
        />
      </TouchableOpacity>
      <View style={styless.vectorRight}>
        <Feather
          name="search"
          style={{ marginRight: ww(25) }}
          size={ww(25)}
          color="#C3AD60"
        />
        <TouchableOpacity onPress={() => handleCart()}>
          <MaterialCommunityIcons
            name="cart-variant"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styless = StyleSheet.create({
  vector: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: ww(80),
    alignItems: "center",
  },
  vectorRight: {
    flexDirection: "row",
  },
});

export const VectorHeader3 = ({
  handleSearch,
  goBack,
  handleBrandView,
  handleCart,
}) => {
  return (
    <View style={stylesss.vector}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name="back"
          style={{ marginLeft: 20 }}
          size={25}
          color="#C3AD60"
        />
      </TouchableOpacity>
      <View style={stylesss.vectorRight}>
        <TouchableOpacity onPress={() => handleSearch()}>
          <Feather
            name="search"
            style={{ marginRight: ww(25) }}
            size={ww(25)}
            color="#C3AD60"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCart()}>
          <MaterialCommunityIcons
            name="cart-variant"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const stylesss = StyleSheet.create({
  vector: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: ww(80),
    alignItems: "center",
    marginTop: ww(66),
  },
  vectorRight: {
    flexDirection: "row",
  },
});

export const VectorHeader4 = ({
  handleNotification,
  goBack,
  handleBrandView,
  handleCart,
}) => {
  return (
    <View style={stylessss.vector}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name="back"
          style={{ marginLeft: ww(20) }}
          size={ww(25)}
          color="#C3AD60"
        />
      </TouchableOpacity>
      <View style={stylessss.vectorRight}>
        <TouchableOpacity onPress={() => handleCart()}>
          <Feather
            name="clipboard"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNotification()}>
          <AntDesign
            name="bells"
            color="#C3AD60"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCart()}>
          <StyledCart1
            source={require("../../features/assets/hamburger.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const VectorHeader5 = ({
  handleChats,
  handleSearch,
  goBack,
  handleBrandView,
  handleCart,
}) => {
  return (
    <View style={stylessss.vector}>
      <TouchableOpacity onPress={() => goBack()}>
        <AntDesign
          name="back"
          style={{ marginLeft: ww(20) }}
          size={ww(25)}
          color="#C3AD60"
        />
      </TouchableOpacity>
      <View style={stylessss.vectorRight}>
        <TouchableOpacity onPress={() => handleChats()}>
          <StyledCart1
            source={require("../../../assets/chatIcon.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSearch()}>
          <Feather
            name="search"
            style={{ marginRight: ww(20) }}
            size={ww(25)}
            color="#C3AD60"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCart()}>
          <StyledCart1
            source={require("../../features/assets/hamburger.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stylessss = StyleSheet.create({
  vector: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: ww(80),
    alignItems: "center",
    marginTop: ww(66),
  },
  vectorRight: {
    flexDirection: "row",
  },
});

export const Btn1 = ({ Bt }) => {
  return (
    <Button1 style={{ margin: ww(15) }}>
      <ButtonText>{Bt}</ButtonText>
    </Button1>
  );
};

export const Btn2 = ({ Bt }) => {
  return (
    <Button2 style={{ margin: ww(15) }}>
      <ButtonText style={{ color: "#C3AD60" }}>{Bt}</ButtonText>
    </Button2>
  );
};
