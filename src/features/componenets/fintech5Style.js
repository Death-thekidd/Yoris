import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import { ww, hh, wp } from "../../../responsive";

export const FirstView5 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const BigText4 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #c3ad60;
`;

export const SecondView4 = styled.View`
  margin-top: 55px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Quantity1 = styled.View`
  background-color: rgba(78, 78, 78, 0.5);
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  border-radius: 15px;
  width: 72px;
  height: 32px;
`;

export const QtyText1 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(14)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const ButtonText1 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.333333px;
  color: #000000;
`;
