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
   margin-top: 30px;
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

 export const AddressBtn = styled(Button).attrs({ color: colors.ui.primary})`
    width: 128px;
    height: 64px;
    background: #C3AD60;
    font-size: 12px;
    padding: 12px;
    left: 30px;
    top: 20px;
    font-weight: 200;
    border-radius: 15px;
 `;

 export const AddressCover = styled(Button).attrs({ color: colors.ui.quaternary })`
    width: 128px;
    height: 64px;;
   background: #4E4E4E;
   font-size: 12px;
   top: 20px;
   font-weight: 200;
   padding: 12px;
   border-radius: 15px;
 `;

//  export const LogisticsSlot = styled.Text`
//     display: flex;
//     flex-flow: row;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
//     left: 20px;
//     font-size: 13px;
//     font-family: 'Roboto';
//  `;

//  export const LogisticsReplace = styled.Text`
//        display: flex;
//        flex-flow: row;
//        justify-content: center;
//        align-items: center;
//        color: #fff;
//        font-size: 13px;
//        font-family: 'Roboto';
//  `;

//  export const LogisticsBox = styled.View`
//     position: relative;
//     width: 100px;
//     height: 96px;
//     background: #4E4E4E;
//     border-radius: 5px;
//     top: 10px;
//     left: 20px;
//  `;

// export const LogisticsBtn = styled(Button).attrs({ color: colors.ui.primary})`
//      width: 260px
//      height: 60px;
//      padding: 12px;
//      top: 3px;
//      align-items: center;
//      color: #000;
//      left: 10px;
//      font-weight: 400;
//      font-size: 18px;
//      background: #C3AD60;
//      border-radius: 10px;
//      text-transform: uppercase;
// `;