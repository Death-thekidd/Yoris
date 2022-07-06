import React from 'react';
import { 
    RegisterContainer,
    RegisterTertiary,
    RegisterParagraph,
    RegisterSection,
    RegisterInput,
    RegisterBtn
} from '../components/account.styles';

export default function ForgotPassword({ navigation }) {
    return (
     <RegisterContainer>
         <RegisterTertiary>Forgot Password</RegisterTertiary>
         <RegisterParagraph>
           Enter your email or phone number for the verification process,
           we will send you a verification code.
         </RegisterParagraph>
         <RegisterSection>
             <RegisterInput 
                type="text"
             />
             <RegisterBtn onPress={() => navigation.navigate('resetPassword')}>continue</RegisterBtn>
         </RegisterSection>
     </RegisterContainer>
    );
}