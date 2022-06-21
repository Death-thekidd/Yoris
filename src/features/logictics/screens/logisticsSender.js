import React, {useState} from 'react';
import { SafeAreaView, ScrollView} from 'react-native';
import {
   LocationContainer,
   LocationWrapper,
   LocationRow,
   ImageBackground,
   LocationPrimary,
   ImageCancel,
   LocationReceived,
   LocationInput,
   ImageDrop,
   LocationPhone,
   PhoneInput,
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
   LocationBtn
  } from '../components/location.styles.js';

export default function LogisticsSender() {
     const [Sender, setSender] = useState("");
     const [phoneNumber, setPhoneNumber] = useState("");
   return (
   <SafeAreaView>
   <ScrollView>
   <LocationContainer>
     <LocationWrapper>
        <LocationRow>
          <ImageBackground source={require('../../../../assets/backIcon.png')} />
       </LocationRow>
        <LocationRow>
            <LocationPrimary>Sender's Information</LocationPrimary>
        </LocationRow>
       <LocationRow>
               <ImageCancel source={require('../../../../assets/cancel.png')} />
        </LocationRow>
     </LocationWrapper>
       <LocationReceived>Sender's name</LocationReceived>
        <LocationInput
        value={Sender}
        textContentType="Sender's name"
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
                    mode="outline" />
               </LocationRow>
           </LocationWrapper>
          <LocationWrapper>
            <LocationRow>
               <ImageLocation source={require('../../../../assets/location.png')} />
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
                 <ImageEllipse source={require('../../../../assets/Ellipse.png')} />
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
     </ScrollView>
     </SafeAreaView>
   );
};