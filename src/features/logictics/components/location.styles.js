import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";

export const LocationBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 260px;
  height: 60px;
  padding: 12px;
  top: 60px;
  text-align: center;
  color: #000;
  font-weight: 400;
  left: 60px;
  font-size: 18px;
  background: #c3ad60;
  border-radius: 5px;
  margin-bottom: 60px;
  text-transform: uppercase;
`;
