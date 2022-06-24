import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
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
     OrderBox,
     Span
  } from '../components/order.styles';
import { LocationBtn } from '../components/location.styles';

export default function LogisticsOrder() {
   const [checked, setChecked] = useState(true);
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
        <OrderWrapper>
           <OrderBox>
             <Checkbox 
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={"#fff"}
              uncheckedColor={"red"}
             />
              <Span>Read Terms and conditions?</Span>
           </OrderBox>
        </OrderWrapper>
       <LocationBtn>Process To Payment</LocationBtn>
    </OrderContainer>
    </ScrollView>
    </SafeAreaView>
  );
};