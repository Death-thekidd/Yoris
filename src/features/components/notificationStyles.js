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
export const ImageRow = styled.View`
  flex-direction: row;
  margin-left: ${ww(11)}px;
`;
export const NotificationBar = styled.View`
  border-bottom-width: ${ww(1)}px;
  border-color: #4e4e4e;
`;

export const TopView = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: ${ww(27)}px;
`;

export const Info = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(18)}px;
  color: #ffffff;
  padding-top: ${ww(3)}px;
  padding-left: ${ww(44)}px;
  padding-bottom: ${ww(16)}px;
`;

export const Swipe = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 100;
  font-size: ${ww(12)}px;
  color: #ffffff;
`;

export const Ship = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(12)}px;
  color: #ffffff;
`;

export const TextBox = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  color: #4e4e4e;
  padding-left: ${ww(44)}px;
  padding-right: ${ww(61)}px
  padding-bottom: ${ww(18)}px;
`;

export const ProfileRow = styled.View`
  flex-direction: row;
  align-itemms: center;
  margin-left: ${ww(45)}px;
  margin-top: ${ww(24)}px;
  margin-bottom: ${ww(22)}px;
`;

export const ProfileColumn = styled.View`
  margin-left: ${ww(17)}px;
`;

export const UserRow = styled.View`
  flex-direction: row;
`;

export const UserName = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(18)}px;
  color: #ffffff;
`;

export const Handle = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(14)}px;
  color: #ffffff;
  opacity: 0.5;
`;

export const Details = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(16)}px;
  color: #ffffff;
`;

export const ReactionsRow = styled.View`
  flex-direction: row;
  margin-bottom: ${ww(18)}px;
`;
