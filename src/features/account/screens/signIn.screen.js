import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { LayoutScrollView } from '../../../components/Layout';
import { Pressable } from 'react-native';
import { 
    RegisterHeader,
    RegisterBackIcon,
    RegisterSection,
    RegisterInput,
    RegisterPassword,
    RegisterUser,
    RegisterLink
} from '../components/account.styles';
import Header from '../../../components/Header';
import { WelcomeContainer } from '../components/welcome.styles';

export default function SignIn({ navigation }) {
    const { goBack, navigate } = useNavigation();
    return (
     <LayoutScrollView>
       <WelcomeContainer>
        <RegisterHeader>
           <Header
            iconLeft={require("../../../../assets/backIcon.png")}
            onLeftIconPress={() => goBack()}
            onRightIconPress={() => navigate("logisticsMain")}
         />
      </RegisterHeader>
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
       </WelcomeContainer>
     </LayoutScrollView>
    );
}