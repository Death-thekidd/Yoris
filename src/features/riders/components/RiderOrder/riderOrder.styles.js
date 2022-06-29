import styled from "styled-components/native";
import { colors } from "../../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

export const RiderBackground = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  flex: 1;
`;

export const RiderPrimary = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const RiderWrap = styled.View`
  display: flex;
`;

export const RiderBtn = styled(Button).attrs({ color: colors.brand.primary })`
  width: 278px;
  height: 68px;
  border: 1px solid Constants.theme.primary;
  color: Constants.theme.primary;
  padding: 12px;
  margin-top: 20px;
  font-size: 15px;
  border-radius: 40px;
`;

export const RiderSpecify = styled.View`
  background: transparent;
  width: 300px;
  margin-top: 20px;
  border: none;
  outline: none;
`;

export const RiderSubmit = styled(Button).attrs({ color: colors.ui.primary })`
  width: 278px;
  height: 48px;
  background: Constants.theme.primary;
  border-radius: 40px;
  font-size: 15px;
  padding: 2px;
  margin-top: 20px;
  font-weight: 300;
`;
