import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { TextInput } from 'react-native';
import { Constants } from "../../../../constants/db.mock";

export const ShippingWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export const ShippingRow = styled.View`
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

export const ShippingPrimary = styled.Text`
  color: ${Constants.theme.primary};
  right: 5px;
  font-size: 20px;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ShippingParagraph = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  top: 10px;
  left: 70px;
  font-family: "Roboto";
`;

export const ShippingSpan = styled.Text`
  font-weight: 200;
  font-size: 15px;
  color: #fff;
`;

export const ShippingFeatures = styled.View`
  top: 20px;
  background: #4e4e4e;
  margin-bottom: 20px;
  width: 256px;
  height: 130px;
  left: 60px;
  padding: 12px;
  border-radius: 5px;
`;

export const ShippingAddressInput = styled(TextInput)`
  height: 96px;
`;

export const ImageShipping = styled.Image`
   left: 200px;
`;

export const ShippingBoxInput = styled(TextInput)`
  width: 260px;
  height: 48px;
  color: #fff;
  top: 20px;
  font-size: 8.5px;
  padding: 12px;
  left: 60px;
  margin-bottom: 50px;
  background: #4e4e4e;
  border-radius: 3px;
`;

export const ShippingInput = styled.View`
  display: flex;
`;

export const ShippingLabel = styled.View`
  background-color: ${Constants.theme.primary};
  height: 50px;
  width: 50px;
  border-radius: 60px;
  z-index: 2000;
  left: 10px;
  cursor: pointer;
`;

export const ImageBitmap = styled.Image`
  width: 20px;
  height: 20px;
  top: 17px;
  left: 15px;
  right: 15px;
`;

export const ShippingTracking = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 260px;
  height: 65px;
  top: 20px;
  border: 1px solid #C3AD60;
  align-items: center;
  color: ${Constants.theme.primary};
  padding: 12px;
  font-weight: 400;
  font-size: 18px;
  left: 60px;
  border-radius: 10px;
  text-transform: uppercase;
`;

export const ShippingBtn = styled(Button).attrs({ color: colors.ui.primary })`
  width: 260px;
  height: 60px;
  padding: 12px;
  top: 35px;
  text-align: center;
  color: ${Constants.theme.dark};
  font-weight: 400;
  font-size: 18px;
  background: ${Constants.theme.primary};
  left: 60px;
  border-radius: 5px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;
