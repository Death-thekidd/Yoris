import React from 'react';
import { Pressable } from 'react-native';
import { 
     WelcomeContainer,
     WelcomeText,
     WelcomeButton
} from '../components/welcome.styles';

export default function WelcomeUsers({ navigation }) {
    return(
      <WelcomeContainer>
         <WelcomeText>Welcome!</WelcomeText>
         <Pressable onPress={() => navigation.navigate("settings")}>
            <WelcomeButton>sign in</WelcomeButton>
         </Pressable>
         <Pressable onPress={() => navigation.navigate("register")}>
            <WelcomeButton>register</WelcomeButton>
         </Pressable>
      </WelcomeContainer>
    );
};