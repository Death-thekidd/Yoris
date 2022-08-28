import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import { ww } from "../../../responsive";

export const First = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const History = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: ${ww(18)}px;
  color: #c3ad60;
  padding-left: ${ww(103)}px;
`;

export const Quantity = styled.View`
height: ${ww(32)}px;
width: ${ww(72)}px;
background-color: rgba(78,78,78,0.5);
flex-direction: row;
display: flex;
align-items: center;
justify-content: center
border-radius: 100px;
position: absolute;
top: ${ww(13)}px;
right: ${ww(13)}px;
`;

export const CaretWhitespace = styled.View`
  padding-left: 15px;
`;

export const QtyText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(14)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
  flex-direction: row;
`;

export const BackupTxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.333333px;
  color: #c3ad60;
`;

export const Second = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 58px;
`;
export const DateView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 4px;
`;

export const Date = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

export const Time = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.333333px;
  color: #ffffff;
`;

export const Select = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  color: #000000;
`;
