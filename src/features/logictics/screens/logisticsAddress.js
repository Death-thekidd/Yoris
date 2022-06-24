import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {
  LogisticsContainer,
  LogisticsPrimary,
  LogisticsWrapper,
  LogisticsRow,
  LogisticsSlot,
  LogisticsReplace,
  LogisticsBox,
  LogisticsBtn
} from "../components/address.styles";

export default function LogisticsAddress({ navigation }) {
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
      <LogisticsBtn onPress={()=>navigation.navigate('location')}>continue</LogisticsBtn>
    </LogisticsContainer>
  );
}
