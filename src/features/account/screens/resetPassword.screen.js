import React from 'react';
import { 
    RegisterContainer,
    RegisterTertiary,
    RegisterParagraph,
    RegisterSection,
    RegisterInput,
    RegisterBtn
} from '../components/account.styles';

export default function ResetPassword({ navigation }) {
    return (
      <RegisterContainer>
         <RegisterTertiary>Reset Password</RegisterTertiary>
         <RegisterParagraph>
            Set a new password for your account so you can log in
            and access all features
        </RegisterParagraph>
        <RegisterSection>
            <RegisterInput 
               type="text"
               placeholder={"Password"}
               placeholderTextColor={"#fff"}
            />
            <RegisterInput 
                type="text"
                placeholder={"Confirm Password"}
                placeholderTextColor={"#fff"}
            />
            <RegisterBtn onPress={() => navigation.navigate("signIn")}>continue</RegisterBtn>
        </RegisterSection>
      </RegisterContainer>
    );
}