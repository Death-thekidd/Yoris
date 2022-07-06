import React from 'react';
import {
 RegisterContainer,
 RegisterSection,
 RegisterTertiary,
 RegisterParagraph,
 RegisterRow
} from '../components/account.styles';
import OtpInputModal from '../otpInputModal';

export default function CodeScreen() {
   return (
      <RegisterContainer>
        <RegisterSection>
          <RegisterTertiary>Enter 4-Digit Code</RegisterTertiary>
          <RegisterParagraph>
              Enter the 4-digit code that you recieved on your
              email/phone number
          </RegisterParagraph>
          <RegisterRow>
            <OtpInputModal 
               buttonStyle={{
                 borderRadius: 100,
                 backgroundColor: "#4E4E4E",
                 justifyContent: "center",
                 alignItems: "center",
                 padding: 10,
                 marginTop: 30,
                 alignSelf: "center",
                 height: 40,
                 width: 60
               }}
            />
          </RegisterRow>
        </RegisterSection>
      </RegisterContainer>
   );
}