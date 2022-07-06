import React from 'react';
import { 
     RegisterContainer,
     ImageBackground,
     RegisterBackIcon,
     RegisterSection,
     RegisterInput,
     RegisterPassword,
     RegisterUser,
     RegisterLink
 } from '../components/account.styles';
import { Button } from 'react-native-paper';
import { Pressable } from 'react-native';

export default function LoginUsers({ navigation }) {
    return (
    <RegisterContainer>
        <Button style={{ right: 130, top: 20,}} onPress={()=>navigation.navigate('register')}>
         <ImageBackground source={require("../../../../assets/backIcon.png")} />
      </Button>
         <RegisterBackIcon source={require("../../../../assets/Yoris.png")} />
         <RegisterSection>
           <RegisterInput
              type="text"
              placeholder={"Email"}
              placeholderTextColor={"#fff"}
            />
            <RegisterInput 
              type="text"
              placeholder={"Password"}
              placeholderTextColor={"#fff"}
            />
            <Pressable onPress={() => navigation.navigate('forgotPassword')}>
               <RegisterPassword>Forgotten Password?</RegisterPassword>
            </Pressable>
            <RegisterUser>SIGN IN</RegisterUser>
            <RegisterLink>BACK</RegisterLink>
         </RegisterSection>
    </RegisterContainer>
    );
}