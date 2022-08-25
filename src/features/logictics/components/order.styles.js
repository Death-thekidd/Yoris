import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from '../../../infrastructure/theme/colors';
import { Constants } from '../../../../constants/db.mock';
import { ww, wp } from "../../../../responsive";

export const OrderHeader = styled.View`
   right: 130px;
`;

export const OrderCycle = styled.View`
  width: ${ww(240)}px;
  height: ${ww(360)}px;
  margin-bottom: ${ww(20)}px;
  margin-top: ${(20)}px;
  align-self: center;
  border: 1px solid #C3AD60;
`;

export const OrderPrimary = styled.Text`
  color: #fff;
  font-size: ${ww(18)}px;
  font-weight: bold;
  margin-top: ${(20)}px;
  text-align: left;
  margin-bottom: 30px;
  font-family: "Roboto";
  left: 20px;
`;

export const OrderText = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: 300;
  font-family: "Roboto";
  text-align: left;
  left: 20px;
`;

export const OrderWrapper = styled.View`
  flex-direction: row;
`;

export const OrderRow = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${ww(10)}px;
  align-items: center;
`;

export const OrderCost = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: ${ww(13)}px;
  left: ${ww(10)}px;
  text-align: left;
`;

export const OrderPrice = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: ${ww(13)}px;
  left: 13px;
  text-align: left;
`;

export const OrderTag = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: ${ww(13)}px;
  left: 68px;
  text-align: left;
`;

export const OrderEstimate = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  left: 18px;
  text-align: left;
`;

export const OrderNumber = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  left: 15px;
  text-align: left;
`;

export const OrderBox = styled.View`
  flex-direction: row;
  padding-left: ${ww(50)}px;
  align-self: center;
`;

export const Span = styled.Text`
  font-size: 10px;
  color: #fff;
  top: 10px;
  left: 15px;
  font-weight: 300;
  font-family: "Roboto";
`;

export const OrderBtn = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: ${ww(300)}px;
  height: 48px;
  border: 1px solid ${Constants.theme.primary};
  align-items: center;
  color: ${Constants.theme.primary};
  padding: 5px;
  font-weight: 400;
  font-size: 18px;
  align-self: center;
  border-radius: 10px;
  text-transform: uppercase;
`;
