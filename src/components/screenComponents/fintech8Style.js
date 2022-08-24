import { ImageBackground, View, Text } from "react-native";

import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const FirstFoodImage = styled.ImageBackground`
  height: ${ww(256)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const FirstView5 = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${ww(20)}px;
  margin-top: ${ww(38)}px;
`;

export const SeeAll = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(14)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
  padding-left: ${ww(104)}px;
`;

export const FoodText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  color: #c3ad60;
  padding-left: ${ww(126)}px;
`;

export const SecondFoodImage = styled.ImageBackground`
  flex: 2;
  height: ${ww(256)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const ThirdFoodImage = styled.ImageBackground`
  flex: 3;
  height: ${ww(256)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const FourthFoodImage = styled.ImageBackground`
  flex: 1;
  height: ${ww(107)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const EightFoodImage = styled.ImageBackground`
  flex: 2;
  height: ${ww(181)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const NinthFoodImage = styled.ImageBackground`
  flex: 3;
  height: ${ww(363)}px;
  justify-content: flex-end;
  border: 1px solid black;
`;

export const CircleBox = styled.View`
  width: ${ww(32)}px;
  height: ${ww(32)}px;
  background-color: #c4c4c4;
  border-radius: 100px;
`;
export const SmallTxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 800;
  font-size: ${ww(13)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const ChisaiTxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(11)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
  margin-top: ${2}px;
`;
