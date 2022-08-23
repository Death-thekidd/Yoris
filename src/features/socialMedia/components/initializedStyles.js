import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const TextView = styled.View`
  width: ${ww(210)}px;
  height: ${ww(96)}px;
  margin-top: ${ww(24)}px;
`;

export const InitializedTxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(48)}px;
  letter-spacing: ${ww(-0.408)}px;
  color: #c3ad60;
  align-self: center;
`;

export const InitializedTxt1 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(48)}px;
  letter-spacing: ${ww(-0.408)}px;
  color: #c3ad60;
  align-self: center;
`;
