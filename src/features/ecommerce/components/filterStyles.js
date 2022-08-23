import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const FilterText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  color: #c3ad60;
  padding-left: ${ww(104)}px;
`;

export const TopView = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${ww(27)}px;
`;

export const MinPrice = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(12)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;
export const MaxPrice = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(12)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const RatingText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(12)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const ExpressDelivery = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(12)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const RegularDelivery = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(12)}px;
  letter-spacing: ${ww(-0.333333)}px;
  color: #ffffff;
`;

export const SearchBtn = styled.View`
  width: ${ww(360)}px;
  height: ${ww(48)}px;
  border-radius: 100px;
  background-color: #c3ad60;
  margin-top: ${ww(54)}px;
  color: #000;
  align-items: center;
  justify-content: center;
`;

export const SearchText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(24)}px;
  color: #000000;
`;
