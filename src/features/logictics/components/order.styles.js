import styled from 'styled-components/native';
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from 'react-native-paper';

export const OrderContainer = styled.View`
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 50px;
     background-color: #000;
     flex: 1;
`;

export const ImageBackground = styled.Image`
   width: 20px;
   right: 100px;
   height: 15px;
`;

export const OrderCycle = styled.View`
   width: 240px;
   height: 360px;
   margin-bottom: 30px;
   top: 40px;
   border: 1px solid #C3AD60;
`;

export const OrderPrimary = styled.Text`
   color: #fff;
   font-size: 18px;
   font-weight: bold;
   top: 20px;
   text-align: left;
   margin-bottom: 40px;
   font-family: 'Roboto';
   left: 20px;
`;

export const OrderText = styled.Text`
     color: #fff;
     font-size: 13px;
     font-weight: 300;
     font-family: 'Roboto';
     text-align: left;
     left: 20px;
`;

export const OrderWrapper = styled.View`
   display: flex;
   flex-direction: row;
`;

export const OrderRow = styled.View`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 10px;
   align-items: center;
`;

export const OrderCost = styled.Text`
    color: #fff;
    font-weight: 300;
    font-size: 13px;
    top: 40px;
    left: 10px;
    text-align: left;
`;

export const OrderPrice = styled.Text`
    color: #fff;
    font-weight: 300;
    font-size: 13px;
    top: 40px;
    left: 5px;
    text-align: left;
`;

export const OrderTag = styled.Text`
    color: #fff;
    font-weight: 300;
    font-size: 13px;
    top: 40px;
    left: 70px;
    text-align: left;
`;

export const OrderEstimate = styled.Text`
   color: #fff;
   font-weight: 300;
   font-size: 13px;
   top: 40px;
   left: 18px;
   text-align: left;
`;

export const OrderNumber = styled.Text`
   color: #fff;
   font-weight: bold;
   font-size: 30px;
   left: 15px;
   top: 30px;
   text-align: left;
`;

export const OrderBox = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Span = styled.Text`
   font-size: 10px;
   color: #fff;
   top: 10px;
   left: 15px;
   font-weight: 300;
   font-family: 'Roboto';
`;