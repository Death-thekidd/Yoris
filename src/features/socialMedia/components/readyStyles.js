import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const ReadyText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(48)}px;
  letter-spacing: ${ww(-0.408)}px;
  color: #ffffff;
  padding-top: ${ww(135)}px;
`;

export const BtnView = styled.View`
  box-shadow: 0px 4px 10px rgba(195, 173, 96, 0.25);
  align-items: center;
  justify-content: center;
  height: ${ww(64)}px;
  width: ${ww(428)}px;
`;

export const BtnView2 = styled.View`
  box-shadow: 0px 4px 10px rgba(195, 173, 96, 0.25);
  align-items: center;
  justify-content: center;
  height: ${ww(64)}px;
  width: ${ww(428)}px;
`;

export const BtnText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  color: #ffffff;
`;

export const Btn = styled.View`
  background-color: #c3ad60;
  height: ${ww(64)}px;
  width: ${ww(360)}px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  margin-top: ${ww(66)}px;
`;

export const BtnText2 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  color: #000000;
`;
