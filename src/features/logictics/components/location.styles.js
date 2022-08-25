import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';
import { Constants } from '../../../../constants/db.mock';
import { ww } from '../../../../responsive';

export const LocationContainer = styled.View`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #000;
   padding-top: 25px;
   flex: 1;
`;

 export const LocationWrapper = styled.View`
    display: flex;
    flex-direction: row;
 `;

  export const LocationRow = styled.View`
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

  export const LocationPrimary = styled.Text`
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

  export const ImageLocation = styled.Image`
       width: 15px;
       position: relative;
       height:  15px;
  `;

  export const LocationSecondary = styled.Text`
     color: #fff;
     font-size: 20px;
     text-align: left;
     font-family: 'Roboto';
     font-weight: 400;
  `;


  export const LocationSaved = styled.Text`
         position: relative;
         color: #fff;
         font-family: 'Roboto';
         top: 20px;
         right: 30px;
         font-size: 15px;
         text-align: left;
  `;

 export const LocationTertiary = styled.Text`
       position: relative;
        color: #4E4E4E;
        font-family: 'Roboto';
        font-size: 13px;
        text-align: left;
        top: 20px;
        right: 80px;
 `;


export const LocationBox = styled.Text`
     position: relative;
     width: 100px;
     height: 80px;
     color: #fff;
     font-size: 10px;
     background: #4E4E4E;
     border-radius: 5px;
     top: 30px;
     left: 30px;
     padding: 20px;
     text-align: center;
`;

export const LocationScroll = styled.Text`
   position: relative;
   width: 95px;
   height: 80px;
   top: 30px;
   font-size: 10px;
   text-align: right;
   color: #fff;
   left: 25px;
   background: #4E4E4E;
   padding: 20px;
   border-radius: 1px;
`;


export const LocationSwitch = styled.View`
   position: relative;
   width: 32px;
   height: 16px;
   top: 20px;
   right: 20px;
   border-radius: 15px;
   background: #1DB704;
`;

export const ImageEllipse = styled.ImageBackground`
   width: 20px;
   height: 15px;
`;

export const LocationType = styled.Text`
    color: #fff;
    font-family: 'Roboto';
    font-size: 15px;
    text-align: left;
    right: 50px;
    position: relative;
    top: 40px;
`;

export const LocationNumber = styled.Text`
   position: relative;
   width: 260px;
   height: 48px;
   color: #fff;
   top: 50px;
   margin-bottom: 20px;
   padding: 12px;
   background: #4E4E4E;
   border-radius: 3px;
`;

export const LocationBtn = styled(Button).attrs({ color: colors.ui.primary  })`
   width: ${ww(300)}px;
   height: 48px;
   padding: 5px;
   margin-top: 20px;
   align-self: center;
   color: ${Constants.theme.dark};
   font-weight: 400;
   font-size: ${ww(18)}px;
   background: ${Constants.theme.primary};
   border-radius: 10px;
   text-transform: uppercase;
   margin-bottom: 30px;
`;

export const LocationLine = styled.View`
   width: 70%;
   height: 7px;
   margin-right: auto;
   margin-left: auto;
   position: relative;
   background: #C3AD60;
   margin-top: 50px;
   border: 3px;
   margin-bottom: 20px;
`;

export const LocationReceived = styled.Text`
   color: #4E4E4E;
   position: relative;
   font-size: 10px;
   right: 80px;
`;

export const LocationInput = styled.View`
   width: 70%;
   height: 7px;
   margin-right: auto;
   margin-left: auto;
   position: relative;
   background: #C4C4C4;
   border: 3px;
   margin-top: 10px;
`;

export const ImageDrop = styled.Image`
   width: 25px;
   height: 18px;
   left: 10px;
   top: 10px;
   position: relative;
`;

export const LocationPhone = styled.Text`
    font-size: 10px;
    color: #4E4E4E;
    font-weight: 300;
    margin-top: 10px;
    text-align: left;
`;

export const PhoneInput = styled.View`
     width: 200px;
     height: 7px;
     position: relative;
     top: 10px;
     background: #C4C4C4;
     right: 10px;
     border: 3px;
`;