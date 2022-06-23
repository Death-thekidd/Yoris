import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { 
     OrderContainer,
     ImageBackground,
     OrderCycle,
     OrderPrimary,
     OrderText,
     OrderWrapper,
     OrderRow,
     OrderCost, 
     OrderPrice,
     OrderTag,
     OrderEstimate,
     OrderNumber,
     Input,
     Span,
     OrderBtn
  } from '../components/order.styles';

export default function LogisticsOrder() {
  return (
  <SafeAreaView>
   <ScrollView>
    <OrderContainer>
       <ImageBackground source={require('../../../../assets/backIcon.png')} />
       <OrderCycle>
          <OrderPrimary>#oRDerNuMbeR</OrderPrimary>
          <OrderText>Type of good</OrderText>
          <OrderText>Drop-Off Address</OrderText>
          <OrderText>Pick-Up Address</OrderText>
          <OrderText>Mode of Trans</OrderText>
          <OrderWrapper>
            <OrderRow>
               <OrderCost>Shipping Cost:</OrderCost>
            </OrderRow>
            <OrderRow>
               <OrderPrice>N 0.00</OrderPrice>
            </OrderRow>
          </OrderWrapper>
          <OrderWrapper>
            <OrderRow>
               <OrderCost>VAT:</OrderCost>
            </OrderRow>
            <OrderRow>
              <OrderTag>N 0.00</OrderTag>
            </OrderRow>
          </OrderWrapper>
          <OrderEstimate>Estimated Cost:</OrderEstimate>
          <OrderNumber>N 0.00</OrderNumber>
       </OrderCycle>
       <Input source={require('../../../../assets/checkbox.png')} /><Span>Read Terms and conditions?</Span>
       <OrderBtn>Process To Payment</OrderBtn>
    </OrderContainer>
    </ScrollView>
    </SafeAreaView>
  );
};