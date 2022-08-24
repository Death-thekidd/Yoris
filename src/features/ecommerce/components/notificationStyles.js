import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export const Notifications = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  letter-spacing: ${ww(-0.408)}px;
  color: #c3ad60;
  padding-left: ${ww(104)}px;
`;

export const TopView = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${ww(27)}px;
`;

export const NotificationBar = styled.View`
  border-bottom-width: ${ww(1)}px;
  border-color: #4e4e4e;
  height: ${ww(109)}px;
`;

export const ImageRow = styled.View`
  flex-direction: row;
  margin-left: ${ww(24)}px;
  margin-top: ${ww(23)}px;
`;

export const Info = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(18)}px;
  line-height: ${ww(18)}px;
  color: #c3ad60;
  margin-top: ${ww(51)}px;
  margin-left: ${ww(24)}px;
`;
