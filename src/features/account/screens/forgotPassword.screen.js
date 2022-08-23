import React, {useState} from 'react';
import { 
    RegisterContainer,
    RegisterTertiary,
    RegisterParagraph,
    RegisterSection,
    RegisterInput,
    RegisterBtn
} from '../components/account.styles';

export default function ForgotPassword({ navigation }) {
    const [text, setText] = useState("");
    
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
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="forgotPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                setText={setText}
             />
             <RegisterBtn onPress={() => navigation.navigate('code')}>continue</RegisterBtn>
         </RegisterSection>
     </RegisterContainer>
    );
}