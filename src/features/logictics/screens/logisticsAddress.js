<<<<<<< HEAD
import React from "react";
import { SafeAreaView } from "react-native";
=======
import React from 'react';
>>>>>>> f61d0493021ea5ae83500f94fc66a7b3675860bb
import {
  LogisticsContainer,
  LogisticsPrimary,
  LogisticsWrapper,
  LogisticsRow,
  LogisticsSlot,
  LogisticsReplace,
  LogisticsBox,
  LogisticsBtn,
  LocationReceived,
} from "../components/address.styles";

export default function LogisticsAddress() {
  const Button = ({ type, text }) => {
    const backgroundColor = type === "primary" ? "#9A8340" : "#A7A5A6";
    const color = "type" === "primary" ? "#FFFFFF" : "#000000";
  };
  return (
    <LogisticsContainer>
      <LogisticsPrimary>Save New Address?</LogisticsPrimary>
      <LogisticsWrapper>
        <LogisticsRow>
          <LogisticsSlot>Create new slot</LogisticsSlot>
          <LogisticsBox></LogisticsBox>
        </LogisticsRow>
        <LogisticsRow>
          <LogisticsReplace>Replace</LogisticsReplace>
          <LogisticsBox></LogisticsBox>
        </LogisticsRow>
      </LogisticsWrapper>
      <LogisticsWrapper>
        <LogisticsRow>
          <LogisticsReplace>Replace</LogisticsReplace>
          <LogisticsBox></LogisticsBox>
        </LogisticsRow>
        <LogisticsRow>
          <LogisticsReplace>Replace</LogisticsReplace>
          <LogisticsBox></LogisticsBox>
        </LogisticsRow>
      </LogisticsWrapper>
      <LogisticsBtn>continue</LogisticsBtn>
    </LogisticsContainer>
  );
}
