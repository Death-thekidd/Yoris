import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";

import { ww, hh, wp } from "../../../responsive";

export const LastView = styled.View`
  width: ${wp(428)}%;
  height: ${wp(64)}%;
  background-color: #4e4e4e;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const PriceColumn = styled.View``;

export const Bold = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-size: 14px;
  font-weight: 900;
  letterspacing: -0.333333px;
  color: #ffffff;
`;

export const Total = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

export const Pricing = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

export const Paytxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.333333px;
  color: #000000;
`;

export const Second = styled.View`
  flex-direction: row;
  margin-top: ${ww(33)}px;
  align-items: center;
`;

export const SelectTxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(14)}px;
  color: #ffffff;
  padding-left: ${ww(64)}px;
  padding-right: ${ww(216)}px;
`;

export const Radiobtn = styled.View`
  width: ${ww(16)}px;
  height: ${ww(16)}px;
  background: #6c63ff;
  border: 3px solid #fff;
  border-radius: 100px;
`;

export const Radiobtn2 = styled.View`
  width: ${ww(16)}px;
  height: ${ww(16)}px;
  border: 3px solid #fff;
  border-radius: 100px;
`;

export const Quantity1 = styled.View`
  background-color: rgba(78, 78, 78, 0.5);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 72px;
  height: 32px;
  margin: 0px 0 0 15px;
`;

export const Third = styled.View`
  margin-top: 33px;
  align-items: center;
`;
