import React from "react";
import { FlatList, Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Logisticscreen from "../../features/logictics/screens/logisticscreen";
import LogisticsBooking from "../../features/logictics/screens/logisticBooking";
import LogisticsAddress from "../../features/logictics/screens/logisticsAddress";
import LogisticsLocation from "../../features/logictics/screens/logisticslocation";
import LogisticsSender from "../../features/logictics/screens/logisticsSender";
import LogisticsReceived from "../../features/logictics/screens/logisticsReceived";
import LogisticsGoods from "../../features/logictics/screens/logisticsGoods";
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

/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();

export const AccountNavigator = () => {
  return (
    <Tabs.Navigator
      headerMode="none"
      style={{ backgroundColor: "#fff" }}
      // screenOptions={{
      //     activeTintColor: "#FFC300",
      //     inactiveTintColor: "#353935",
      //     style: {
      //         labelStyle: { fontSize: 1 },
      //     }
      // }}
      screenOptions={{
        activeTintColor: "#50d3a7",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ddd",
        inactiveTintColor: "white",
        tabBarPressColor: "#cec6c6",
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: "#9A8340",
        },

        tabBarStyle: {
          borderTopColor: "#9A8340",
          borderTopWidth: 2,
          elevation: 10,
          backgroundColor: "#0B090A",
          borderRadius: 1,
        },
      }}
      /* tabBarOptions={{
        scrollEnabled: false,
        tabStyle: {
          backgroundColor: "#000",
          borderRadius: 10,
          margin: 12,
          justifyContent: "center",
          alignContent: "center",
        },
        indicatorStyle: { backgroundColor: "#987", opacity: 0.05 },
        style: {
          backgroundColor: "#000000",
          borderRadius: 30,
          margin: 24,
          height: 72,
          width: "90%",
          labelStyle: { fontSize: 2 },
        },
      }} */
    >
      <Tabs.Screen name="Logistic" component={Logisticscreen} />
      <Tabs.Screen name="Yoris Pay" component={LogisticsAddress} />
      <Tabs.Screen name="Store" component={Stores} />
     <Tabs.Screen name="location" component={LogisticsLocation} />
      <Tabs.Screen name="Booking" component={LogisticsBooking} />
      <Tabs.Screen name="sender" component={LogisticsSender} />
      <Tabs.Screen name="received" component={LogisticsReceived} />
      <Tabs.Screen name="goods" component={LogisticsGoods} />
      <Tabs.Screen name="vehicles" component={LogisticsVehicle} />
      <Tabs.Screen name="details" component={LogisticsDetails} />
      <Tabs.Screen name="order"  component={LogisticsOrder} />
      <Tabs.Screen name="shipping" component={LogisticsShipping} />   
    </Tabs.Navigator>
  );
};

const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

export const logisticNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Logisticscreen} />
     <Stack.Screen name="logisticBooking" component={LogisticsAddress} />
      <Stack.Screen name="logisticLocation" component={LogisticsLocation} />
      <Stack.Screen name="logisticsBooking" component={LogisticsBooking} />
      <Stack.Screen name="logisticsSender" component={LogisticsSender} />
      <Stack.Screen name="logisticsReceived" component={LogisticsReceived} />
      <Stack.Screen name="logisticsGoods" component={LogisticsGoods} />
      <Stack.Screen name="logisticsVehicle" component={LogisticsVehicle} />
      <Stack.Screen name="logisticsOrder"  component={LogisticsOrder} />
      <Stack.Screen name="shipping" component={LogisticsShipping} />
      <Stack.Screen name="paymentScreen" component={PaymentScreen} />
      <Stack.Screen name="paymentOptions" component={PaymentOptions} />
      <Stack.Screen name="confirmedPayment" component={ConfirmedPayment} />  
    </Stack.Navigator>
    </NavigationContainer>
  );
};
