import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { LayoutScrollView } from '../../../components/Layout';
import { 
   RegisterContainer,
   RegisterHeader,
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
import Header from '../../../components/Header';


const itemCategory = ["Fintech"];
export default function RegisterUsers({ navigation }) {
   const [phoneNumber, setPhoneNumber] = useState("");
   const [input, setInput] = useState("");
   const { goBack, navigate } = useNavigation();
   const [text, setText] = useState("");
  return (
   <LayoutScrollView>
    <RegisterContainer>
      <RegisterHeader>
       <Header
          iconLeft={require("../../../../assets/backIcon.png")}
          onLeftIconPress={() => goBack()}
         />
      </RegisterHeader>
       <RegisterSection>
          <ImageLogo source={require("../../../../assets/Yoris.png")} />
          <RegisterInput
             type="text"
             placeholder={"Full Name"}
             placeholderTextColor={"#fff"}
             setText={setText}
          />
          <RegisterInput 
             type="text"
             placeholder={"Email"}
             placeholderTextColor={"#fff"}
             setText={setText}
           />
           <RegisterInput
              type="text"
              placeholder={"Create Password"}
              placeholderTextColor={"#fff"}
              setText={setText}
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
               defaultButtonText="Industry"
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
           setText={setText}
         />
          <RegisterInput 
           type="text"
           placeholder={"Create Handle"}
           placeholderTextColor={"#fff"}
           setText={setText}
         />
         <RegisterInput 
            type="text"
            placeholder={"Input referal code"}
            placeholderTextColor={"#fff"}
            setText={setText}
         />
         <RegisterBtn onPress={() => navigation.navigate('signIn')}>Create Account</RegisterBtn>
         <RegisterSecondary>Already have an account?</RegisterSecondary>
         <RegisterLink onPress={() => navigation.navigate('signIn')}>SIGN IN</RegisterLink>
       </RegisterSection>
    </RegisterContainer>
   </LayoutScrollView>
  );
};