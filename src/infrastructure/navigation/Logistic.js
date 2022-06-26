import React from "react";
import { FlatList, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Logisticscreen from "../../features/logictics/screens/logisticscreen";
import LogisticsAddress from "../../features/logictics/screens/logisticsAddress";
import LogisticsVehicle from "../../features/logictics/screens/logisticsVehicle";
import LogisticsDetails from "../../features/logictics/screens/logisticsDetails";
import LogisticsOrder from "../../features/logictics/screens/logisticsOrder";
import LogisticsShipping from "../../features/logictics/screens/logisticsShipping";
import { createStackNavigator } from "@react-navigation/stack";
import Stores from "../../features/Stores/Stores.screen";

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

/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();

export const Tab = () => {
  return (
    <Tabs.Navigator
      headerMode="none"
      screenOptions={{
        activeTintColor: "#50d3a7",
        tabBarActiveTintColor: "#C3AD60",
        tabBarInactiveTintColor: "#C3AD60",
        inactiveTintColor: "white",
        tabBarPressColor: "transparent",
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: "#9A8340",
        },

        tabBarStyle: {
          elevation: 10,
          backgroundColor: "#0B090A",
          borderRadius: 1,
        },
      }}
    >
      {/* <Tabs.Screen name="Puddle" component={Puddle */}
      <Tabs.Screen name="Stores" component={Stores} />
      <Tabs.Screen name="Logistics" component={LogisticNavigator} />
      {/* <Tabs.Screen name="Yoris Pay" component={LogisticNavigator} /> */}
    </Tabs.Navigator>
  );
};

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
      <Stack.Screen name="Main" component={Logisticscreen} />
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
      <Stack.Screen name="confirmedPayment" component={ConfirmedPayment} />
      <Stack.Screen name="orderHistory" component={OrderHistory} />
    </Stack.Navigator>
  );
};
