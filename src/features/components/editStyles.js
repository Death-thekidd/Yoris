import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const Save = styled.Text`
  padding-left: ${ww(282)}px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${24}px;
  color: #c3ad60;
`;

export const TopView = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CameraView = styled.View`
  width: ${ww(102)}px;
  height: ${ww(102)}px;
  background: #4e4e4e;
  border-radius: 5px;
  margin-top: ${ww(59)}px;
  margin-bottom: ${ww(34)}px;
  margin-left: ${ww(40)}px;
  align-self: flex-start;
`;

export const Project = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(18)}px;
  color: #ffffff;
  padding-top: ${ww(24)}px;
  align-self: flex-start;
  
`;

export const Select = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(24)}px;
  color: #c3ad60;
  padding-top: ${ww(48)}px;
  margin-bottom: ${ww(33)}px;
`;

export const CategoryRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${ww(340)}px;
  margin-bottom: ${ww(33)}px;
`;

export const CategoryColumn = styled.View`

`;

export const Category = styled.View`
  width: ${ww(160)}px;
  height: ${ww(32)}px;
  background: #4e4e4e;
  border-radius: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CategoryText = styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(14)}px;
color: #FFFFFF
`;

export const AddCategory = styled.View`
width: ${ww(32)}px;
height: ${ww(32)}px;
border-radius: 100px;
background: #4E4E4E;
align-items: center;
justify-content: center;
`;