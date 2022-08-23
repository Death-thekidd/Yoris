import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { Constants } from "../../../../constants/db.mock";

export const WelcomeContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Constants.theme.dark};
  flex: 1;
`;

export const WelcomeText = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const WelcomeButton = styled(Button).attrs({ color: colors.ui.primary })`
  width: 300px;
  height: 48px;
  background: ${Constants.theme.primary};
  border-radius: 40px;
  font-size: 15px;
  padding: 2px;
  margin-top: 20px;
  font-weight: 300;
`;
