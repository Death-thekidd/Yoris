import React, {useState} from 'react';
import { 
    RegisterContainer,
    RegisterTertiary,
    RegisterParagraph,
    RegisterSection,
    RegisterInput,
    RegisterBtn
} from '../components/account.styles';

export default function ResetPassword({ navigation }) {
    const [text, setText] = useState("");
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
               name="password"
               autoCapitalize="none"
               autoCorrect={false}
               textContentType="newPassword"
               secureTextEntry
               enablesReturnKeyAutomatically
               placeholder={"Password"}
               placeholderTextColor={"#fff"}
               setTExt={setText}
            />
            <RegisterInput 
                type="text"
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry
                enablesReturnKeyAutomatically
                placeholder={"Confirm Password"}
                placeholderTextColor={"#fff"}
                setText={setText}
            />
            <RegisterBtn onPress={() => navigation.navigate("signIn")}>continue</RegisterBtn>
        </RegisterSection>
      </RegisterContainer>
    );
}