import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';


export const ShippingContainer = styled.View`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #000;
   padding: 10px;
   flex: 1;
`;

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
   width: 15px;
   position: relative;
   height: 15px;
`;

export const ShippingPrimary = styled.Text`
    color: #C3AD60;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Roboto';
`;

export const ShippingParagraph = styled.Text`
   font-size: 20px;
   color: #fff;
   font-weight: bold;
   top: 30px;
   right: 40px;
   font-family: 'Roboto';
`;

export const ShippingSpan = styled.Text`
   font-weight: 200;
   font-size: 15px;
   color: #fff;
`;

export const ShippingFeatures = styled.View`
   position: relative;
   width: 256px;
   height: 96px;
   top: 50px;
   background: #4E4E4E;
   margin-bottom: 30px;
   border-radius: 5px;
`;

export const ShippingAddress = styled.Text`
   color: #fff;
   text-align: left;
   font-size: 12px;
   margin-top: 20px;
   left: 20px;
   font-weight: 300;
`;

export const ImageShipping = styled.Image`
    left: 220px;
    position: relative;
    width: 20px;
    top: 10px;
`;

export const ShippingBox = styled.Text`
   position: relative;
   width: 260px;
   height: 48px;
   color: #fff;
   top: 50px;
   font-size: 10px;
   padding: 12px;
   margin-bottom: 50px;
   background: #4E4E4E;
   border-radius: 3px;
`;

export const ShippingInput = styled.View`
   display: flex;
`;

export const ShippingLabel = styled.View`
   background-color: #C3AD60;
   height: 50px;
   width: 50px;
   border-radius: 60px;
   z-index: 2000;
   left: 10px;
   margin-top: 20px;
   cursor: pointer;
`;

export const ImageBitmap = styled.Image`
   width: 20px;
   height: 20px;
   top: 10px;
   left: 15px;
   position: relative;
`;

export const ShippingNumber = styled.Text`
   position: relative;
   width: 260px;
   height: 48px;
   top: 20px;
   border: 1px solid #C3AD60;
   text-align: center;
   padding: 12px;
   color: #C3AD60;
   border-radius: 10px;
`;

export const ShippingBtn = styled.Text`
   position: relative;
   width: 260px
   height: 80px;
   padding: 12px;
   top: 43px;
   text-align: center;
   color: #000;
   font-weight: 400;
   font-size: 18px;
   background: #C3AD60;
   border-radius: 5px;
   text-transform: uppercase;
`;