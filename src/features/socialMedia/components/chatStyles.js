import styled from "styled-components/native";

import { ww, hh, wp } from "./Vendors";

export const TopView = styled.View`
  flex-direction: row;
  align-items: center;
  display: flex;
  margin-top: ${ww(60)}px;
`;

export const HeadText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  text-align: center;
  letter-spacing: ${ww(-0.408)}px;
  color: #c3ad60;
  padding-left: ${ww(130)}px;
`;

export const SecondView = styled.View`
  padding-horizontal: ${ww(20)}px;
`;

export const Contactstxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-size: ${ww(15)}px;
  color: #c3ad60;
`;

export const Vendorstxt = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-size: ${ww(15)}px;
  color: #c3ad60;
`;
