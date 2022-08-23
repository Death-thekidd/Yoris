import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { Constants } from "../../../../constants/db.mock";

export const VehicleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Constants.theme.dark};
  padding: 20px;
  flex: 1;
`;

export const VehicleWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const VehicleRow = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

export const ImageBackground = styled.Image`
  width: 26.19px;
  position: relative;
  height: 20px;
`;

export const VehiclePrimary = styled.Text`
  color: ${Constants.theme.primary};
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto";
  right: 20px;
`;

export const ImageCancel = styled.Image`
  width: 20.07px;
  position: relative;
  height: 20px;
`;

export const VehicleCycle = styled.TouchableOpacity`
  position: relative;
  width: 250px;
  height: 80px;
  top: 20px;
  margin-bottom: 20px;
  border: 1px solid ${Constants.theme.primary};
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
`;

export const ImageVehicle = styled.Image`
  position: absolute;
  left: 20px;
  top: 20px;
`;

export const VehicleSecondary = styled.Text`
  color: #fff;
  font-size: 13px;
  position: relative;
  left: 70px;
`;

export const VehicleText = styled.Text`
  color: #c4c4c4;
  font-size: 10px;
  position: relative;
  left: 70px;
  opacity: 0.5;
`;

export const VehicleBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 260px;
  height: 60px;
  padding: 12px;
  top: 35px;
  text-align: center;
  color: ${Constants.theme.dark};
  font-weight: 400;
  font-size: 18px;
  background: ${Constants.theme.primary};
  border-radius: 5px;
  margin-bottom: 35px;
  text-transform: uppercase;
`;
