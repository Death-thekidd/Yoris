import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  VehicleContainer,
  VehicleWrapper,
  VehicleRow,
  VehiclePrimary,
  ImageCancel,
  VehicleCycle,
  ImageVehicle,
  VehicleSecondary,
  VehicleText,
  VehicleBtn
} from "../components/vehicle.styles";
import { LayoutScrollView } from '../../../components/Layout';
import Header from '../../../components/Header';

export default function LogisticsVehicle({ navigation }) {
  const { goBack, navigate } = useNavigation();
  return (
   <LayoutScrollView>
    <VehicleContainer>
      <VehicleWrapper>
        <VehicleRow>
          <Header
            iconLeft={require("../../../../assets/backIcon.png")}
            onLeftIconPress={() => goBack()}
            onRightIconPress={() => navigate("logisticsMain")}
          />
        </VehicleRow>
        <VehicleRow>
          <VehiclePrimary>Vehicle Specification</VehiclePrimary>
        </VehicleRow>
        <VehicleRow>
          <ImageCancel source={require("../../../../assets/cancel.png")} />
        </VehicleRow>
      </VehicleWrapper>
      <VehicleCycle  onPress={() => navigation.navigate("logisticsOrder")}>
        <VehicleWrapper>
          <VehicleRow>
            <ImageVehicle source={require("../../../../assets/vehicle1.png")} />
          </VehicleRow>
          <VehicleRow>
            <VehicleSecondary>Motorcycle</VehicleSecondary>
            <VehicleText>Small - Medium size</VehicleText>
            <VehicleText>packages</VehicleText>
          </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleCycle onPress={() => navigation.navigate("logisticsDetails")}>
        <VehicleWrapper>
          <VehicleRow>
            <ImageVehicle source={require("../../../../assets/vehicle4.png")} />
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
            <ImageVehicle source={require("../../../../assets/vehicle5.png")} />
          </VehicleRow>
          <VehicleRow>
            <VehicleSecondary>Bus</VehicleSecondary>
            <VehicleText>Medium - Large size</VehicleText>
            <VehicleText>packages,inter state.</VehicleText>
          </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleCycle>
        <VehicleWrapper>
           <VehicleRow>
             <ImageVehicle source={require("../../../../assets/vehicle3.png")} />
           </VehicleRow>
           <VehicleRow>
             <VehicleSecondary>Aeroplane</VehicleSecondary>
             <VehicleText>All size packages</VehicleText>
             <VehicleText>Local and International</VehicleText>
             <VehicleText>express delivery</VehicleText>
           </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleCycle 
        onPress={() => navigate('ship')}
      >
        <VehicleWrapper>
           <VehicleRow>
              <ImageVehicle source={require("../../../../assets/vehicle2.png")} />
           </VehicleRow>
           <VehicleRow>
              <VehicleSecondary>Ship</VehicleSecondary>
              <VehicleText>All size packages</VehicleText>
              <VehicleText>Local and International</VehicleText>
           </VehicleRow>
        </VehicleWrapper>
      </VehicleCycle>
      <VehicleBtn>continue</VehicleBtn>
    </VehicleContainer>
    </LayoutScrollView>
  );
}
