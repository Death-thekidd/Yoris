import React, {useState, useCallback } from 'react';
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
  Input,
  LocationLine,
  LocationReceived,
  LocationInput,
  ImageDrop,
  LocationPhone,
  PhoneInput,
  LocationBtn
  } from '../components/location.styles';

export default function LogisticsReceived() {
   const [ text, setText ] = useState("");
   const [inputValue, setInputValue] = useState("");
   const [ values, setValues] = useState([]);
   const handleKeyDown = useCallback(
     (event) => {
      if (event.key === 'Enter' || event.keyCode === 13) {
         const value = inputValue.trim();
         if (value.length > 0) {
            setValues([...values, value]);
         }
         setInputValue('');
      } else if (event.key === 'Backspace' || event.keyCode === 8) {
         if (inputValue.length === 0 && values.length > 0) {
            setValues(values.slice(0, -1));
         }
      }
     },
     [inputValue, values]
   );
   return (
    <SafeAreaView>
     <ScrollView>
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
            <Input 
              type="text" 
              placeholder={"House number"}
              placeholderTextColor={"#fff"}
              />
            <Input 
               type="text"
               placeholder={"Street Address"}
               placeholderTextColor={"#fff"}
               />
            <Input 
               type="text"
               placeholder={"Bus stop"}
               placeholderTextColor={"#fff"}
               />
             <Input 
                type="text"
                placeholder={"Local Govt Area"}
                placeholderTextColor={"#fff"}
                />
            <LocationLine></LocationLine>
            <LocationReceived>Receiver's name</LocationReceived>
            <LocationInput
             value={text}
             onKeyDown={handleKeyDown}
             onChange={(event) => {
               setInputValue(event.target.value);
             }}
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
                     value={text}
                     onKeyDown={handleKeyDown}
                     onChange={(event) => {
                       setInputValue(event.target.value);
                      }}
                     />
               </LocationRow>
            </LocationWrapper>
            <LocationBtn>continue</LocationBtn>
     </LocationContainer>
     </ScrollView>
     </SafeAreaView>
   );
};