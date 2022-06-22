import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  LocationContainer,
  LocationWrapper,
  LocationRow,
  ImageBackground,
  LocationPrimary,
  ImageCancel,
  ImageLocation,
  LocationSecondary,
  LocationTertiary,
  LocationBox,
  LocationScroll,
  LocationSaved,
  LocationSwitch,
  ImageEllipse,
  LocationType,
  LocationNumber,
  LocationBtn,
} from "../components/location.styles";

export default function LogisticsLocation() {
  return (
    <LocationContainer>
      <LocationWrapper>
        <LocationRow>
          <ImageBackground
            source={require("../../../../assets/backIcon.png")}
          />
        </LocationRow>
        <LocationRow>
          <LocationPrimary>Pickup Location</LocationPrimary>
        </LocationRow>
        <LocationRow>
          <ImageCancel source={require("../../../../assets/cancel.png")} />
        </LocationRow>
      </LocationWrapper>
      <LocationWrapper>
        <LocationRow>
          <ImageLocation source={require("../../../../assets/location.png")} />
        </LocationRow>
        <LocationRow>
          <LocationSecondary>Use Current Location</LocationSecondary>
        </LocationRow>
      </LocationWrapper>
      <LocationTertiary>Saved Address</LocationTertiary>
      <LocationWrapper>
        <LocationRow>
          <LocationBox>Address 1</LocationBox>
        </LocationRow>
        <LocationRow>
          <LocationBox>Address 2</LocationBox>
        </LocationRow>
        <LocationRow>
          <LocationScroll>Address 3</LocationScroll>
        </LocationRow>
      </LocationWrapper>
      <LocationWrapper>
        <LocationRow>
          <LocationSaved>Save new address</LocationSaved>
        </LocationRow>
        <LocationRow>
          <LocationSwitch>
            <ImageEllipse source={require("../../../../assets/Ellipse.png")} />
          </LocationSwitch>
        </LocationRow>
      </LocationWrapper>
      <LocationType>Type in new location</LocationType>
      <LocationNumber>House number</LocationNumber>
      <LocationNumber>Street address</LocationNumber>
      <LocationNumber>Bus stop</LocationNumber>
      <LocationNumber>Local Govt area</LocationNumber>
      <LocationBtn>continue</LocationBtn>
    </LocationContainer>
  );
}
