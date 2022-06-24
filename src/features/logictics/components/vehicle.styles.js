import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from 'react-native-paper';

export const VehicleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
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
  width: 15px;
  position: relative;
  height: 15px;
`;

export const VehiclePrimary = styled.Text`
  color: #c3ad60;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ImageCancel = styled.Image`
  width: 15px;
  position: relative;
  height: 15px;
`;

export const VehicleCycle = styled.TouchableOpacity`
  position: relative;
  width: 250px;
  height: 80px;
  top: 20px;
  margin-bottom: 20px;
  border: 1px solid #c3ad60;
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
  color: #000;
  font-weight: 400;
  font-size: 18px;
  background: #c3ad60;
  border-radius: 5px;
  margin-bottom: 35px;
  text-transform: uppercase;
`;
