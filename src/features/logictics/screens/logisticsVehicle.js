import React from "react";
import { SafeAreaView, ScrollView } from 'react-native';
import { Layout } from "../../../components/Layout";
import { Button } from 'react-native-paper';
import {
  VehicleContainer,
  VehicleWrapper,
  VehicleRow,
  ImageBackground,
  VehiclePrimary,
  ImageCancel,
  VehicleCycle,
  ImageVehicle,
  VehicleSecondary,
  VehicleText,
  VehicleBtn
} from "../components/vehicle.styles";

export default function LogisticsVehicle({ navigation }) {
  return (
    <SafeAreaView>
    <ScrollView>
    <Layout>
    <VehicleContainer>
      <VehicleWrapper>
        <VehicleRow>
        <Button onPress={() => navigation.navigate("shipping")}>
           <ImageBackground
             source={require("../../../../assets/backIcon.png")}
            />
          </Button>
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
      <VehicleCycle>
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
    </Layout>
    </ScrollView>
    </SafeAreaView>
  );
}
