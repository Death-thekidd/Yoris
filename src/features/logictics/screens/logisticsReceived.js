import React, {useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import {
  LocationContainer,
  LocationWrapper,
  LocationRow,
  ImageBackground,
  LocationPrimary,
  ImageCancel,
  LocationTertiary,
  LocationBox,
  LocationScroll,
  LocationSaved,
  LocationSwitch,
  ImageEllipse,
  LocationType,
  LocationNumber,
  LocationLine,
  LocationReceived,
  LocationInput,
  ImageDrop,
  LocationPhone,
  PhoneInput,
  LocationBtn
  } from '../components/location.styles';

export default function LogisticsReceived() {
   const [Receiver, setReceiver] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   return (
     <LocationContainer>
        <LocationWrapper>
           <LocationRow>
               <ImageBackground source={require('../../../../assets/backIcon.png')} />
           </LocationRow>
           <LocationRow>
               <LocationPrimary>Receiver's Information</LocationPrimary>
            </LocationRow>
            <LocationRow>
                <ImageCancel source={require('../../../../assets/cancel.png')} />
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
                       <ImageEllipse source={require('../../../../assets/Ellipse.png')} />
                     </LocationSwitch>
                  </LocationRow>
            </LocationWrapper>
            <LocationType>Type in new location</LocationType>
            <LocationNumber>House number</LocationNumber>
            <LocationNumber>Street address</LocationNumber>
            <LocationNumber>Bus stop</LocationNumber>
            <LocationNumber>Local Govt area</LocationNumber>
            <LocationLine></LocationLine>
            <LocationReceived>Receiver's name</LocationReceived>
            <LocationInput
             value={Receiver}
             textContentType="Receiver's name"
             keyboardType="email-address"
             autoCapitalize="none"
             mode='outlined'
             />
          <LocationWrapper>
               <LocationRow>
                   <ImageDrop source={require('../../../../assets/drop.png')} />
               </LocationRow>
               <LocationRow>
                   <LocationPhone>+234</LocationPhone>
               </LocationRow>
               <LocationRow>
                   <PhoneInput
                     value={phoneNumber}
                     textContentType="phone number"
                     keyboardType="phone-number"
                     autoCapitalize="none"
                     mode="outline"
                     />
               </LocationRow>
            </LocationWrapper>
            <LocationBtn>continue</LocationBtn>
     </LocationContainer>
   );
};