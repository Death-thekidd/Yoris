import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Button } from 'react-native-paper';
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

export default function LogisticsOrder({ navigation }) {
   const [checked, setChecked] = useState(true);
  return (
  <SafeAreaView>
   <ScrollView>
    <OrderContainer>
      <Button style={{ right: 100}} onPress={() => navigation.navigate("logisticsVehicle")}>
         <ImageBackground
           source={require("../../../../assets/backIcon.png")}
          />
       </Button>
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
              color={"#4e4e4e"}
              uncheckedColor={"#4e4e4e"}
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