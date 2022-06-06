import React from 'react';
import {
  LogisticsContainer,
  LogisticsPrimary,
  LogisticsWrapper,
  LogisticsRow,
  Column1,
  Column2,
  LogisticsSlot,
  LogisticsBox,
  LogisticsBtnCont,
   LogisticsBtn
  } from '../components/address.styles';

export default function LogisticsAddress() {
   const Button = ({ type, text }) => {
          const backgroundColor = type === "primary" ? "#9A8340" : "#A7A5A6"
          const color = "type" === "primary" ? "#FFFFFF" : "#000000"
      }
  return (
    <LogisticsContainer>
      <LogisticsPrimary>Save New Address?</LogisticsPrimary>
      <LogisticsWrapper>
         <LogisticsRow>
            <Column1>
              <LogisticsSlot>Create new slot</LogisticsSlot>
              <LogisticsBox></LogisticsBox>
            </Column1>
            <Column2>
              <LogisticsSlot>Replace</LogisticsSlot>
              <LogisticsBox></LogisticsBox>
            </Column2>
         </LogisticsRow>
        <LogisticsRow>
          <Column1>
             <LogisticsSlot>Replace</LogisticsSlot>
             <LogisticsBox></LogisticsBox>
          </Column1>
          <Column2>
             <LogisticsSlot>Replace</LogisticsSlot>
             <LogisticsBox></LogisticsBox>
          </Column2>
        </LogisticsRow>
      </LogisticsWrapper>
       <LogisticsBtnCont>
          <LogisticsBtn>continue</LogisticsBtn>
       </LogisticsBtnCont>
    </LogisticsContainer>
  );
};