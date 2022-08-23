import styled from "styled-components/native";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;

export const Container = styled.View``;

export const ChatView = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: ${ww(30)}px;
  padding-top: ${ww(16)}px;
  border-color: #4e4e4e;
  border-bottom-width: 1px;
`;

export const ColumnTextView = styled.View`
  padding-left: ${ww(22)}px;
  width: ${ww(300)}px;
`;

export const Name = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(18)}px;
  color: #c3ad60;
  padding-bottom: ${ww(8)}px;
`;

export const RecentText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: ${ww(14)}px;
  color: #c4c4c4;
`;
