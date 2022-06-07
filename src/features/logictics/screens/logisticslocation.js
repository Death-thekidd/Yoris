import React from 'react';
import {
      LocationContainer,
      LocationWrapper,
      LocationRow,
      Column1,
      Column2,
      Column3,
      LocationText,
      ImageBackground,
      LocationPrimary,
      ImageCancel,
      ImageLocation,
      LocationSecondary,
      LocationSaved,
      LocationBox,
      LocationScroll,
      LocationTertiary,
      LocationSwitch,
      ImageEllipse,
      LocationType,
      LocationNumber,
      LocationBtn
 } from '../components/location.styles';

export default function LogisticsLocation() {
   return (
      <LocationContainer>
        <LocationWrapper>
          <LocationRow>
            <Column1>
              <ImageBackground source={require('../../../../assets/backIcon.png')} />
            </Column1>
            <Column2>
              <LocationPrimary>Pickup Location</LocationPrimary>
            </Column2>
            <Column3>
               <ImageCancel source={require('../../../../assets/cancel.png')} />
            </Column3>
          </LocationRow>
          <LocationRow>
             <Column1>
                <ImageLocation source={require('../../../../assets/location.png')} />
             </Column1>
             <Column2>
               <LocationSecondary>Use Current Location</LocationSecondary>
             </Column2>
          </LocationRow>
           <LocationSaved>Saved Addresses</LocationSaved>
           <LocationRow>
             <Column1>
                <LocationBox>Address 1</LocationBox>
             </Column1>
             <Column2>
               <LocationBox>Address 2</LocationBox>
             </Column2>
             <Column3>
                <LocationScroll>Addres</LocationScroll>
             </Column3>
           </LocationRow>
           <LocationRow>
              <Column1>
                 <LocationTertiary>Save new address</LocationTertiary>
              </Column1>
              <Column2>
                 <LocationSwitch>
                     <ImageEllipse source={require('../../../../assets/Ellipse.png')} />
                </LocationSwitch>
              </Column2>
           </LocationRow>
           <LocationType>Type in new location</LocationType>
           <LocationNumber>House number</LocationNumber>
           <LocationNumber>Street address</LocationNumber>
           <LocationNumber>Bus stop</LocationNumber>
           <LocationNumber>Local Govt area</LocationNumber>
            <LocationBtn>continue</LocationBtn>
        </LocationWrapper>
      </LocationContainer>
   );
};