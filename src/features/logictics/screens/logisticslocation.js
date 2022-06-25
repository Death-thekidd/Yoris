import React, { useState } from "react";
import { SafeAreaView, ScrollView, FlatList } from "react-native";
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
  Input,
  LocationBtn,
} from "../components/location.styles";

export default function LogisticsLocation({ navigation }) {
  const [ text, setText ] = useState('');
  return (
   <SafeAreaView>
    <ScrollView>
    <LocationContainer>
      <LocationWrapper>
        <LocationRow>
          <ImageBackground
            source={require("../../../../assets/backIcon.png")}
            onPress={() => {}}
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
      <Input  
        placeholder={"House number"}
        placeholderTextColor={"#fff"}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
        />
        <Input 
          type="text"
          placeholder={"Street address"}
          placeholderTextColor={"#fff"}
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          />
          <Input 
            type="text"
            placeholder={"Bus stop"}
            placeholderTextColor={"#fff"}
            onChangeText={newText => setText(newText)}
            defaultValue={text}
            />
            <Input 
              type="text"
              placeholder={"Local Govt area"}
              placeholderTextColor={"#fff"}
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              />
      <LocationBtn>continue</LocationBtn>
    </LocationContainer>
    </ScrollView>
    </SafeAreaView>
  );
};
