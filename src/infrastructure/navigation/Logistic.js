import React from "react";
import Logisticscreen from "../../features/logictics/screens/logisticscreen";
import LogisticsAddress from "../../features/logictics/screens/logisticsAddress";
import LogisticsVehicle from "../../features/logictics/screens/logisticsVehicle";
import LogisticsDetails from "../../features/logictics/screens/logisticsDetails";
import LogisticsOrder from "../../features/logictics/screens/logisticsOrder";
import LogisticsShipping from "../../features/logictics/screens/logisticsShipping";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PaymentScreen,
  PaymentOptions,
  ConfirmedPayment,
} from "../../features/payment/screens";
import OrderHistory from "../../features/logictics/screens/OrderHistory";
import SingleOrder from "../../features/logictics/screens/SingleOrder";
import PickUp from "../../features/logictics/screens/PickUp";
import DropOff from "../../features/logictics/screens/DropOff";
import ConfirmOrder from "../../features/logictics/screens/ConfirmOrder";

import Profile from "../../features/riders/screens/Profile";
import RiderOrder from "../../features/riders/components/RiderOrder/riderOrder";

const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

const LogisticNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="logisticsMain" component={Logisticscreen} />
      <Stack.Screen name="pickUp" component={PickUp} />
      <Stack.Screen name="dropOff" component={DropOff} />
      <Stack.Screen name="confirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="logisticBooking" component={LogisticsAddress} />
      <Stack.Screen name="logisticsVehicle" component={LogisticsVehicle} />
      <Stack.Screen name="logisticsDetails" component={LogisticsDetails} />
      <Stack.Screen name="logisticsOrder" component={LogisticsOrder} />
      <Stack.Screen name="shipping" component={LogisticsShipping} />
      <Stack.Screen name="paymentScreen" component={PaymentScreen} />
      <Stack.Screen name="paymentOptions" component={PaymentOptions} />
      <Stack.Screen name="confirmPayment" component={ConfirmedPayment} />
      <Stack.Screen name="orderHistory" component={OrderHistory} />
      <Stack.Screen name="singleOrder" component={SingleOrder} />
      <Stack.Screen name="riderOrder" component={RiderOrder} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default LogisticNavigator;
