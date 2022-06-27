import React, { useState } from 'react';
import { Pressable} from 'react-native';
import { 
     RegisterContainer, 
     ImageBackground,
     ImageLogo,
     RegisterForm,
     RegisterInput
  } from '../components/account.styles';

export default function RegisterUsers({ navigation }) {
    const [text, setText] = useState("");
    return (
      <RegisterContainer>
         <Pressable>
           <ImageBackground source={require("../../../../assets/backIcon.png")} />
          </Pressable>
        <ImageLogo source={require("../../../../assets/Yoris.png")} />
        <RegisterForm>
           <RegisterInput
             type={text}
             placeholder={"Full name"}
             placeholderTextColor={"#fff"}
            />
            <RegisterInput 
              type={text}
              placeholder={"Email"}
              placeholderTextColor={"#fff"}
            />
        </RegisterForm>
      </RegisterContainer>
    );
}