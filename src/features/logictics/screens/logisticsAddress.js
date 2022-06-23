import React from "react";
import { SafeAreaView } from "react-native";
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
