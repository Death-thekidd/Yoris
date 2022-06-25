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
           <AddressBtn onPress={()=>navigation.navigate('shipping')}>Yes</AddressBtn>
        </LogisticsRow>
        <LogisticsRow>
            <AddressCover>No</AddressCover>
        </LogisticsRow>
      </LogisticsWrapper>
    </LogisticsContainer>
  );
}
