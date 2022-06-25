import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const GoodsContainer = styled.View`
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #000;
     padding: 40px;
     flex: 1;
`;

export const GoodsWrapper = styled.View`
   display: flex;
   flex-direction: row;
`;

export const GoodsRow = styled.View`
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

export const GoodsPrimary = styled.Text`
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

export const GoodsInput = styled.View`
   display: flex;
`;

export const GoodsLabel = styled.TouchableOpacity`
   background-color: #C3AD60;
   height: 73px;
   width: 73px;
   border-radius: 100px;
   z-index: 2000;
   margin-top: 20px;
   cursor: pointer;
`;

export const ImageGoods = styled.Image`
   width: 30px;
   height: 30px;
   top: 20px;
   left: 20px;
   position: relative;
`;

export const GoodsText = styled.Text`
    color: #FFF;
    font-size: 15px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: left;
`;

export const Input = styled(TextInput)`
     position: relative;
     width: 260px;
     height: 25px;
     color: #fff;
     top: 30px;
     margin-bottom: 20px;
     padding: 12px;
     background: #4E4E4E;
     border-radius: 3px;
`;