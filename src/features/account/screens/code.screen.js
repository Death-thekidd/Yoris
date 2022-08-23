import React, { useState } from 'react';
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
          <RegisterTertiary>Enter 4-Digit Pin</RegisterTertiary>
          <RegisterParagraph>
              Enter the 4-digit pin that you recieved on your
              email/phone number
          </RegisterParagraph>
          <RegisterRow>

           <OtpInputModal
               buttonStyle={{
                 borderRadius: 100,
                 backgroundColor: "#C3AD60",
                 justifyContent: "center",
                 alignItems: "center",
                 padding: 10,
                 top: 20,
                 alignSelf: "center",
                 height: 40,
                 width: 300
               }}
              />
          </RegisterRow>
        </RegisterSection>
      </RegisterContainer>
   );
}
