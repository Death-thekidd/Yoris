import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Button } from 'react-native-paper';


export const LogisticsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  flex: 1;
`;

export const LogisticsPrimary = styled.Text`
   margin-top: 60px;
   color: #fff;
   text-align: center;
   font-size: 20px;
   font-weight: bold;
`;

 export const LogisticsWrapper = styled.View`
    display: flex;
    flex-flow: row;
 `;

 export const LogisticsRow = styled.View`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 25px;
    align-items: center;
 `;

 export const LogisticsSlot = styled.Text`
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    left: 20px;
    font-size: 13px;
    font-family: 'Roboto';
 `;

 export const LogisticsReplace = styled.Text`
       display: flex;
       flex-flow: row;
       justify-content: center;
       align-items: center;
       color: #fff;
       font-size: 13px;
       font-family: 'Roboto';
 `;

 export const LogisticsBox = styled.View`
    position: relative;
    width: 100px;
    height: 96px;
    background: #4E4E4E;
    border-radius: 5px;
    top: 10px;
    left: 20px;
 `;

export const LogisticsBtn = styled.Text`
     position: relative;
     width: 260px
     height: 80px;
     padding: 12px;
     top: 30px;
     text-align: center;
     color: #000;
     font-weight: 400;
     font-size: 18px;
     background: #C3AD60;
     border-radius: 5px;
     text-transform: uppercase;
`;