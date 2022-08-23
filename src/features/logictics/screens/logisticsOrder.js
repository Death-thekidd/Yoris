import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'react-native-paper';
import { LayoutScrollView } from '../../../components/Layout';
import { 
     OrderHeader,
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
import Header from '../../../components/Header';

export default function LogisticsOrder({ navigation }) {
   const { goBack, navigate } = useNavigation();
   const [checked, setChecked] = useState(true);
  return (
     <LayoutScrollView>
      <OrderHeader>
         <Header
           iconLeft={require("../../../../assets/backIcon.png")}
           onLeftIconPress={() => goBack()}
           onRightIconPress={() => navigate("logisticsMain")}
        />
      </OrderHeader>
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
              status={checked ? 'unchecked' : 'checked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={"#4e4e4e"}
              uncheckedColor={"#4e4e4e"}
             />
              <Span>Read Terms and conditions?</Span>
           </OrderBox>
        </OrderWrapper>
       <LocationBtn onPress={() => navigation.navigate("paymentScreen")}>Process To Payment</LocationBtn>
      </LayoutScrollView>
  );
}