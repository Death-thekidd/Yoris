import styled from 'styled-components/native';

export const LocationContainer = styled.View`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #000;
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
        font-size: 15px;
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
     font-size: 15px;
     text-align: left;
     font-family: 'Roboto';
     font-weight: 400;
  `;


  export const LocationSaved = styled.Text`
         position: relative;
         color: #fff;
         font-family: 'Roboto';
         top: 20px;
         right: 20px;
         font-size: 15px;
         text-align: left;
  `;

 export const LocationTertiary = styled.Text`
       position: relative;
        color: #4E4E4E;
        font-family: 'Roboto';
        font-size: 13px;
        text-align: left;
        top: 10px;
        right: 60px;
 `;


export const LocationBox = styled.Text`
     position: relative;
     width: 80px;
     height: 70px;
     color: #fff;
     font-size: 5px;
     background: #4E4E4E;
     border-radius: 5px;
     top: 15px;
     left: 10px;
     padding: 20px;
     text-align: center;
`;

export const LocationScroll = styled.Text`
   position: relative;
   width: 65px;
   height: 70px;
   top: 15px;
   font-size: 5px;
   left: 10px;
   text-align: right;
   color: #fff;
   padding: 25px;
   background: #4E4E4E;
   border-radius: 1px;
`;


export const LocationSwitch = styled.View`
   position: relative;
   width: 32px;
   height: 16px;
   top: 20px;
   right: 10px;
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
    right: 40px;
    position: relative;
    top: 20px;
`;

export const LocationNumber = styled.Text`
   position: relative;
   width: 260px;
   height: 48px;
   color: #fff;
   top: 30px;
   margin-bottom: 15px;
   padding: 12px;
   background: #4E4E4E;
   border-radius: 3px;
`;

export const LocationBtn = styled.Text`
   position: relative;
   width: 260px
   height: 90px;
   padding: 12px;
   top: 20px;
   text-align: center;
   color: #000;
   font-weight: 400;
   font-size: 18px;
   background: #C3AD60;
   border-radius: 5px;
   text-transform: uppercase;
`;