import styled from 'styled-components/native';
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from 'react-native-paper';


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
    width: 26.19px;
    position: relative;
    height: 20px;
`;

export const DetailsPrimary = styled.Text`
     color: #C3AD60;
     text-align: left;
     font-size: 20px;
     font-weight: 400;
     left: 10px;
     font-family: 'Roboto';
`;

export const ImageCancel = styled.Image`
     width: 20.07px;px;
     position: relative;
     height: 20px;
     left: 16px;
`;

export const DetailsSecondary = styled.Text`
   font-size: 20px;
   color: #fff;
   font-weight: bold;
   top: 20px;
   text-align: left;
   left: 60px;
   font-family: 'Roboto';
`;

export const DetailsTertiary = styled.Text`
  color: #C3AD60; 
  top: 40px;
  font-size: 15px;
  text-align: left;
  left: 60px;
  font-famiy: 'Roboto';
`;

export const DetailsHover = styled.View`
   position: relative;
   width: 260px;
   height: 96px;
   top: 55px;
   left: 60px;
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
  left: 60px;
  font-famiy: 'Roboto';
`;

export const DetailsCycle = styled.View`
  position: relative;
  width: 260px;
  height: 80px;
  top: 80px;
  margin-bottom: 30px;
  left: 60px;
  border: 1px solid #C3AD60;
  border-radius: 10px;
`;

export const DetailsDrop = styled.Text`
  color: #C3AD60; 
  top: 60px;
  font-size: 15px;
  text-align: left;
  left: 60px;
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
  left: 60px;
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
   top: 60px;
   border: 1px solid #C3AD60;
   align-items: center;
   color: #C3AD60;
   left: 60px;
   font-weight: 400;
   padding: 6px;
   font-size: 18px;
   margin-bottom: 100px;
   border-radius: 10px;
   text-transform: uppercase;
`;