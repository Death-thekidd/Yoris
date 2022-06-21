import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
    VehicleContainer,
    VehicleWrapper,
    VehicleRow,
    ImageBackground,
    VehiclePrimary,
    ImageCancel,
    VehicleCycle,
    VehicleShip,
    ImageVehicle,
    VehicleSecondary,
    VehicleTertiary,
    VehicleText,
    VehicleBtn
  } from '../components/vehicle.styles';

export default function LogisticsVehicle() {
  return (
  <SafeAreaView>
   <ScrollView>
    <VehicleContainer>
      <VehicleWrapper>
         <VehicleRow>
           <ImageBackground source={require('../../../../assets/backIcon.png')} />
         </VehicleRow>
         <VehicleRow>
            <VehiclePrimary>Vehicle Specification</VehiclePrimary>
         </VehicleRow>
         <VehicleRow>
             <ImageCancel source={require('../../../../assets/cancel.png')} />
         </VehicleRow>
      </VehicleWrapper>
      <VehicleCycle>
       <VehicleWrapper>
          <VehicleRow>
            <ImageVehicle source={require('../../../../assets/vehicle1.png')} />
          </VehicleRow>
          <VehicleRow>
             <VehicleSecondary>Motorcycle</VehicleSecondary>
             <VehicleText>Small - Medium size</VehicleText>
             <VehicleText>packages</VehicleText>
          </VehicleRow>
       </VehicleWrapper>
      </VehicleCycle>
      <VehicleCycle>
        <VehicleWrapper>
           <VehicleRow>
             <ImageVehicle source={require('../../../../assets/vehicle4.png')} />
           </VehicleRow>
           <VehicleRow>
             <VehicleSecondary>Pick-Up Truck</VehicleSecondary>
             <VehicleText>Medium - Large size</VehicleText>
             <VehicleText>packages</VehicleText>
           </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleCycle>
        <VehicleWrapper>
            <VehicleRow>
               <ImageVehicle source={require('../../../../assets/vehicle5.png')} />
            </VehicleRow>
            <VehicleRow>
               <VehicleTertiary>Bus</VehicleTertiary>
               <VehicleText>Medium - Large size</VehicleText>
               <VehicleText>packages,inter state.</VehicleText>
            </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleShip>
        <VehicleWrapper>
           <VehicleRow>
             <ImageVehicle source={require('../../../../assets/vehicle3.png')} />
           </VehicleRow>
           <VehicleRow>
             <VehicleTertiary>Aeroplane</VehicleTertiary>
             <VehicleText>All size packages</VehicleText>
             <VehicleText>Local and International</VehicleText>
             <VehicleText>express delivery</VehicleText>
           </VehicleRow>
        </VehicleWrapper>
      </VehicleShip>
      <VehicleShip>
        <VehicleWrapper>
           <VehicleRow>
              <ImageVehicle source={require('../../../../assets/vehicle2.png')} />
           </VehicleRow>
           <VehicleRow>
             <VehicleTertiary>Ship</VehicleTertiary>
             <VehicleText>All size packages</VehicleText>
             <VehicleText>Local and International</VehicleText>
           </VehicleRow>
        </VehicleWrapper>
      </VehicleShip>
      <VehicleBtn>continue</VehicleBtn>
    </VehicleContainer>
    </ScrollView>
   </SafeAreaView>
  );
};