import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
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
    ShippingBox,
    ShippingInput,
    ShippingLabel,
    ImageBitmap,
    ShippingNumber,
    ShippingBtn
  } from '../components/shipping.styles';

export default function LogisticsShipping() {
   return (
   <SafeAreaView>
    <ScrollView>
    <ShippingContainer>
      <ShippingWrapper>
        <ShippingRow>
           <ImageBackground source={require('../../../../assets/backIcon.png')} />
        </ShippingRow>
        <ShippingRow>
           <ShippingPrimary>Shipping Address</ShippingPrimary>
        </ShippingRow>
      </ShippingWrapper>
      <ShippingParagraph>Yoris<ShippingSpan>(Username)</ShippingSpan></ShippingParagraph>
      <ShippingFeatures>
         <ShippingAddress>Yoris Address</ShippingAddress>
         <ImageShipping source={require('../../../../assets/location.png')} />
      </ShippingFeatures>
      <ShippingBox>Tracking Number From Shipping Company</ShippingBox>
      <ShippingWrapper>
         <ShippingRow>
            <ShippingInput type="checkbox" id="navi-toggle">
              <ShippingLabel>
                 <ImageBitmap source={require('../../../../assets/group5.png')} />
              </ShippingLabel>
            </ShippingInput>
         </ShippingRow>
         <ShippingRow>
           <ShippingInput type="checkbox" id="navi-toggle">
             <ShippingLabel>
                <ImageBitmap source={require('../../../../assets/group1.png')} />
             </ShippingLabel>
           </ShippingInput>
         </ShippingRow>
         <ShippingRow>
            <ShippingInput type="checkbox" id="navi-toggle">
               <ShippingLabel>
                   <ImageBitmap source={require('../../../../assets/group.png')} />
               </ShippingLabel>
            </ShippingInput>
         </ShippingRow>
         <ShippingRow>
            <ShippingInput type="checkbox" id="navi-toggle">
               <ShippingLabel>
                  <ImageBitmap source={require('../../../../assets/group7.png')} />
               </ShippingLabel>
            </ShippingInput>
         </ShippingRow>
         <ShippingRow>
            <ShippingInput type="checkbox" id="navi-toggle">
               <ShippingLabel>
                  <ImageBitmap source={require('../../../../assets/group3.png')} />
               </ShippingLabel>
            </ShippingInput>
         </ShippingRow>
      </ShippingWrapper>
      <ShippingNumber>Add Tracking Number</ShippingNumber>
      <ShippingBtn>continue</ShippingBtn>
    </ShippingContainer>
    </ScrollView>
    </SafeAreaView>
   );
};