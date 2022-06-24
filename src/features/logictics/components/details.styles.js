import styled from 'styled-components/native';
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from 'react-native-paper';

export const DetailsContainer = styled.View`
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #000;
     padding: 70px;
     flex: 1;
`;

export const DetailsWrapper = styled.View`
   display: flex;
   flex-direction: row;
`;

export const DetailsRow = styled.View`
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

export const DetailsPrimary = styled.Text`
     color: #C3AD60;
     text-align: left;
     font-size: 20px;
     font-weight: 400;
     font-family: 'Roboto';
`;

export const ImageCancel = styled.Image`
     width: 15px;
     position: relative;
     height: 15px;
`;

export const DetailsSecondary = styled.Text`
   font-size: 20px;
   color: #fff;
   font-weight: bold;
   top: 20px;
   text-align: left;
   right: 40px;
   font-family: 'Roboto';
`;

export const DetailsTertiary = styled.Text`
  color: #C3AD60; 
  top: 40px;
  font-size: 15px;
  text-align: left;
  right: 75px;
  font-famiy: 'Roboto';
`;

export const DetailsHover = styled.View`
   position: relative;
   width: 260px;
   height: 96px;
   top: 55px;
   background: #C3AD60;
   margin-bottom: 20px;
   border-radius: 5px;
`;

export const ImageDetails = styled.Image`
   top: 20px;
   width: 20px;
   height: 20px;
   left: 60px;
`;

export const DetailsParagraph = styled.Text`
   color: #000;
   font-size: 18px;
   font-weight: 400;
   left: 50px;
   top: 15px;
`;

export const DetailsLocation = styled.Text`
  color: #C3AD60; 
  top: 60px;
  font-size: 15px;
  text-align: left;
  right: 65px;
  font-famiy: 'Roboto';
`;

export const DetailsCycle = styled.View`
  position: relative;
  width: 260px;
  height: 80px;
  top: 80px;
  margin-bottom: 30px;
  border: 1px solid #C3AD60;
  border-radius: 10px;
`;

export const DetailsDrop = styled.Text`
  color: #C3AD60; 
  top: 60px;
  font-size: 15px;
  text-align: left;
  right: 60px;
  font-famiy: 'Roboto';
`;

export const DetailsAddress = styled.Text`
  color: #fff;
  text-align: left;
  font-weight: 300;
  font-size: 15px;
  top: 20px;
  left: 10px;
  font-family: 'Roboto';
`;

export const DetailsType = styled.Text`
  color: #C3AD60; 
  top: 60px;
  font-size: 15px;
  text-align: left;
  right: 65px;
  margin-bottom: 10px;
  font-famiy: 'Roboto';
`;

export const DetailsCopy = styled.Text`
   color: #000;
   font-size: 18px;
   font-weight: 400;
   left: 20px;
   top: 15px;
`;

export const ImageBike = styled.Image`
  top: 20px;
  left: 20px
`;

export const DetailsBtn = styled(Button).attrs({ color: colors.brand.primary })`
   width: 260px;
   height: 65px;
   top: 70px;
   border: 1px solid #C3AD60;
   align-items: center;
   color: #C3AD60;
   padding: 12px;
   font-weight: 400;
   font-size: 18px;
   margin-bottom: 30px;
   border-radius: 10px;
   text-transform: uppercase;
`;