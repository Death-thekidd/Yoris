import React from "react";
import {
  LogisticsContainer,
  LogisticsPrimary,
  LogisticsWrapper,
  LogisticsRow,
  AddressBtn,
  AddressCover
} from "../components/address.styles";

export default function LogisticsAddress({ navigation }) {
  return (
    <LogisticsContainer>
      <LogisticsPrimary>Save New Address?</LogisticsPrimary>
      <LogisticsWrapper>
        <LogisticsRow>
           <AddressBtn onPress={()=>navigation.navigate('logisticsGoods')}>Yes</AddressBtn>
        </LogisticsRow>
        <LogisticsRow>
            <AddressCover>No</AddressCover>
        </LogisticsRow>
      </LogisticsWrapper>
      {/* <LogisticsWrapper>
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
      <LogisticsBtn onPress={()=>navigation.navigate('logisticsGoods')}>continue</LogisticsBtn> */}
    </LogisticsContainer>
  );
}
