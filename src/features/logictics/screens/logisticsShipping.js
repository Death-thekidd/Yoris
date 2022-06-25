import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import {
  ShippingContainer,
  ShippingWrapper,
  ShippingRow,
  ImageBackground,
  ShippingPrimary,
  ShippingParagraph,
  ShippingSpan,
  ShippingFeatures,
  ShippingAddress,
  ImageShipping,
  ShippingBoxInput,
  ShippingInput,
  ShippingLabel,
  ImageBitmap,
  ShippingTracking,
  ShippingBtn,
} from "../components/shipping.styles";

export default function LogisticsShipping({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <ShippingContainer>
          <ShippingWrapper>
            <ShippingRow>
              <Button onPress={() => navigation.navigate("logisticsGoods")}>
                <ImageBackground
                  source={require("../../../../assets/backIcon.png")}
                />
              </Button>
            </ShippingRow>
            <ShippingRow>
              <ShippingPrimary>Shipping Address</ShippingPrimary>
            </ShippingRow>
          </ShippingWrapper>
          <ShippingParagraph>
            Yoris<ShippingSpan>(Username)</ShippingSpan>
          </ShippingParagraph>
          <ShippingFeatures>
            <ShippingAddress>Yoris Address</ShippingAddress>
            <ImageShipping
              source={require("../../../../assets/location.png")}
            />
          </ShippingFeatures>
          <ShippingBoxInput
            type="text"
            placeholder={"Tracking Number From Shipping Company"}
            placeholderTextColor={"#fff"}
          />
          <ShippingWrapper>
            <ShippingRow>
              <ShippingInput type="checkbox" id="navi-toggle">
                <ShippingLabel>
                  <ImageBitmap
                    source={require("../../../../assets/group5.png")}
                  />
                </ShippingLabel>
              </ShippingInput>
            </ShippingRow>
            <ShippingRow>
              <ShippingInput type="checkbox" id="navi-toggle">
                <ShippingLabel>
                  <ImageBitmap
                    source={require("../../../../assets/group1.png")}
                  />
                </ShippingLabel>
              </ShippingInput>
            </ShippingRow>
            <ShippingRow>
              <ShippingInput type="checkbox" id="navi-toggle">
                <ShippingLabel>
                  <ImageBitmap
                    source={require("../../../../assets/Group.png")}
                  />
                </ShippingLabel>
              </ShippingInput>
            </ShippingRow>
            <ShippingRow>
              <ShippingInput type="checkbox" id="navi-toggle">
                <ShippingLabel>
                  <ImageBitmap
                    source={require("../../../../assets/group7.png")}
                  />
                </ShippingLabel>
              </ShippingInput>
            </ShippingRow>
            <ShippingRow>
              <ShippingInput type="checkbox" id="navi-toggle">
                <ShippingLabel>
                  <ImageBitmap
                    source={require("../../../../assets/group3.png")}
                  />
                </ShippingLabel>
              </ShippingInput>
            </ShippingRow>
          </ShippingWrapper>
          <ShippingTracking>Add More Tracking Number</ShippingTracking>
          <ShippingBtn onPress={() => navigation.navigate("logisticsVehicle")}>
            continue
          </ShippingBtn>
        </ShippingContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
