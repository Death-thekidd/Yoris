import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const WhyContainer = styled.View`
  background-color: #000000;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WhyText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(48)}px;
  letter-spacing: ${ww(-0.408)}px;
  color: #ffffff;
  padding-left: ${ww(54)}px;
  padding-top: ${ww(84)}px;
`;

export const FirstText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  letter-spacing: -0.408px;
  color: #000000;
`;

export const SecondText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  letter-spacing: -0.408px;
  color: #c3ad60;
`;
