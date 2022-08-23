import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ShippingWrapper,
  ShippingRow,
  ShippingPrimary,
  ShippingParagraph,
  ShippingSpan,
  ShippingFeatures,
  ShippingAddressInput,
  ImageShipping,
  ShippingBoxInput,
  ShippingInput,
  ShippingLabel,
  ImageBitmap,
  ShippingTracking,
  ShippingBtn,
} from "../components/shipping.styles";
import { LayoutScrollView } from '../../../components/Layout';
import Header from '../../../components/Header';

export default function LogisticsShipping({ navigation }) {
   const { goBack, navigate } = useNavigation();
   const [values, setValues] = useState(null);
   const [error, setError] = useState({});
  return (
    <LayoutScrollView>
      <ShippingWrapper>
        <ShippingRow>
        <Header
           iconLeft={require("../../../../assets/backIcon.png")}
           onLeftIconPress={() => goBack()}
           onRightIconPress={() => navigate("logisticsMain")}
        />
        </ShippingRow>
        <ShippingRow>
          <ShippingPrimary>Shipping Address</ShippingPrimary>
        </ShippingRow>
      </ShippingWrapper>
      <ShippingParagraph>
        Yoris<ShippingSpan>(Username)</ShippingSpan>
      </ShippingParagraph>
      <ShippingFeatures>
         <ShippingAddressInput 
            placeholder={"Yoris Address"}
            placeholderTextColor={"#fff"}  
            error={error} 
            setError={setError}
            setValues={setValues}
         />
         <ImageShipping source={require("../../../../assets/location.png")} />
      </ShippingFeatures>
      <ShippingBoxInput
        placeholder={"Tracking Number From Shipping Company"}
        placeholderTextColor={"#fff"}
        error={error}
        setError={setError}
        setValues={setValues}
      />
      <ShippingWrapper>
        <ShippingRow>
          <ShippingInput type="checkbox" id="navi-toggle">
            <ShippingLabel>
              <ImageBitmap source={require("../../../../assets/group5.png")} />
            </ShippingLabel>
          </ShippingInput>
        </ShippingRow>
        <ShippingRow>
          <ShippingInput type="checkbox" id="navi-toggle">
            <ShippingLabel>
              <ImageBitmap source={require("../../../../assets/group1.png")} />
            </ShippingLabel>
          </ShippingInput>
        </ShippingRow>
        <ShippingRow>
          <ShippingInput type="checkbox" id="navi-toggle">
            <ShippingLabel>
              <ImageBitmap source={require("../../../../assets/Group.png")} />
            </ShippingLabel>
          </ShippingInput>
        </ShippingRow>
        <ShippingRow>
          <ShippingInput type="checkbox" id="navi-toggle">
            <ShippingLabel>
              <ImageBitmap source={require("../../../../assets/group7.png")} />
            </ShippingLabel>
          </ShippingInput>
        </ShippingRow>
        <ShippingRow>
          <ShippingInput type="checkbox" id="navi-toggle">
            <ShippingLabel>
              <ImageBitmap source={require("../../../../assets/group3.png")} />
            </ShippingLabel>
          </ShippingInput>
        </ShippingRow>
      </ShippingWrapper>
      <ShippingTracking>Add More Tracking Number</ShippingTracking>
      <ShippingBtn onPress={() => navigation.navigate("logisticsVehicle")}>
        continue
      </ShippingBtn>
    </LayoutScrollView>
  );
}
