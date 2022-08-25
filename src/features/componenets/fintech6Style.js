import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import { ww, hh, wp } from "../../../responsive";

export const FirstView6 = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${ww(64)}px;
`;

export const BigText5 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(18)}px;
  color: #c3ad60;
  padding-left: ${ww(70)}px;
`;

export const ProductImage = styled.Image`
  width: ${ww(340)}px;
  heiht: ${ww(128)}px;
  border-radius: 15px;
`;

export const SecondView6 = styled.View`
  align-items: center;
  justify-cntent: center;
`;
export const PayText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #c3ad60;
`;

export const Smalltxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(14)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
  margin-bottom: ${ww(8)}px;
`;

export const Bigtxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(32)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const SugoiDekaitxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(32)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const Txt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #000000;
`;
