import styled from 'styled-components/native';

export const VehicleContainer = styled.View`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #000;
   padding: 10px;
   flex: 1;
`;

export const VehicleWrapper = styled.View`
    display: flex;
    flex-direction: row;
`;

export const VehicleRow = styled.View`
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


export const VehiclePrimary = styled.Text`
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

export const VehicleCycle = styled.View`
  position: relative;
  width: 250px;
  height: 80px;
  top: 20px;
  margin-bottom: 20px;
  border: 1px solid #C3AD60;
  border-radius: 10px;
`;

export const VehicleShip = styled.View`
   position: relative;
  width: 250px;
  height: 100px;
  top: 20px;
  margin-bottom: 20px;
  border: 1px solid #C3AD60;
  border-radius: 10px;
`;

export const ImageVehicle = styled.Image`
   position: absolute;
   left: 10px;
   top: 30px;
`;

export const VehicleSecondary = styled.Text`
   color: #fff;
   font-size: 13px;
   top: 10px;
   position: relative;
   left: 70px;
`;


export const VehicleText = styled.Text`
   color: #C4C4C4;
   font-size: 10px;
   position: relative;
   left: 70px;
   top: 5px;
   opacity: 0.5;
`;


export const VehicleBtn = styled.Text`
   position: relative;
   width: 260px;
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