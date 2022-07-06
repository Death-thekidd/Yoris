import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView, ScrollView } from 'react-native';
import { 
   RegisterContainer,
   ImageBackground,
   RegisterSection,
   ImageLogo,
   RegisterInput,
   RegisterPrimary,
   RegisterDate,
   RegisterDrop,
   RegisterLine,
   RegisterBtn,
   RegisterSecondary,
   RegisterLink
} from '../components/account.styles';
import CustomDatePicker from '../datePicker/datepicker';
import Selector from '../selector/selector';

const itemCategory = ["Fintech"];
export default function RegisterUsers({ navigation }) {
   const [phoneNumber, setPhoneNumber] = useState("");
   const [input, setInput] = useState("");
   const [text, setText] = useState("");
  return (
 <SafeAreaView>
   <ScrollView>
    <RegisterContainer>
      <Button style={{ right: 130, top: 20,}} onPress={()=>navigation.navigate('welcome')}>
         <ImageBackground source={require("../../../../assets/backIcon.png")} />
      </Button>
       <RegisterSection>
          <ImageLogo source={require("../../../../assets/Yoris.png")} />
          <RegisterInput
             type="text"
             placeholder={"Full Name"}
             placeholderTextColor={"#fff"}
          />
          <RegisterInput 
             type="text"
             placeholder={"Email"}
             placeholderTextColor={"#fff"}
           />
           <RegisterInput
              type="text"
              placeholder={"Create Password"}
              placeholderTextColor={"#fff"}
            />
            <RegisterPrimary>Date of birth:</RegisterPrimary>
           <RegisterDate>
            <CustomDatePicker 
               textStyle={{
                  backgroundColor: '#4E4E4E',
                  width: 300,
                  height: 48,
                  color: '#FFF',
                  borderRadius: 30,
                  padding: 10,
               }}
               onDateChange={(value) => console.log('Date changed: ' + value)}
               type="date"
            />
         </RegisterDate>
         <RegisterDrop>
            <Selector 
               data={itemCategory}
               buttonStyle={{
                width: 300,
                height: 48,
                borderRadius: 30,
               }}
               dropdownIconPosition={"right"}
               defaultButtonText="Industries"
               buttonTextStyle={{
                 fontSize: 20,
               }}
            />
         </RegisterDrop>
         <RegisterLine></RegisterLine>
         <RegisterInput
           type="text"
           placeholder={"User Name"}
           placeholderTextColor={"#fff"}
         />
          <RegisterInput 
           type="text"
           placeholder={"Create Handle"}
           placeholderTextColor={"#fff"}
         />
         <RegisterInput 
            type="text"
            placeholder={"Input referal code"}
            placeholderTextColor={"#fff"}
         />
         <RegisterBtn>Create Account</RegisterBtn>
         <RegisterSecondary>Already have an account?</RegisterSecondary>
         <RegisterLink onPress={()=> navigation.navigate('login')}>SIGN IN</RegisterLink>
       </RegisterSection>
    </RegisterContainer>
   </ScrollView>
  </SafeAreaView>
  );
}