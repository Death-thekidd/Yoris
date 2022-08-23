import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const SettingsBar = styled.View`
  height: ${ww(119)}px;
  flex-direction: row;
  align-items: center;
`;

export const TextBar = styled.View`
  margin-left: ${ww(37)}px;
  width: ${ww(234)}px;
`;

export const FirstText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const SubsequentText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(14)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;
