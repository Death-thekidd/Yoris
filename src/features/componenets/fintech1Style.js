import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { ww, hh, wp } from "../../../responsive";

export const FirstView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${ww(100)}px;
`;

export const BigText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  color: #c3ad60;
  padding-left: ${ww(42)}px;
`;

export const SecondView = styled.View`
  margin-top: ${ww(189)}px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #000000;
`;

export const MiddleText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;
