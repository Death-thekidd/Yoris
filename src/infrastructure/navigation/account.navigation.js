import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WelcomeUsers from "../../features/account/screens/welcome.screen";
import RegisterUsers from "../../features/account/screens/Register.Screen";
import LoginUsers from '../../features/account/screens/login.screen';
import ForgotPassword from '../../features/account/screens/forgotPassword.screen';
import ResetPassword from '../../features/account/screens/resetPassword.screen';
import CodeScreen from '../../features/account/screens/code.screen';

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
      <Tabs.Screen name="account" component={AccountNavigator} />
      {/* <Tabs.Screen name="Yoris Pay" component={LogisticNavigator} /> */}
    </Tabs.Navigator>
  );
};

//  initailize and  put  createStackNavigator() in  a variable
const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="welcome" component={WelcomeUsers} />
            <Stack.Screen name="register" component={RegisterUsers} />
            <Stack.Screen name="login" component={LoginUsers} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
            <Stack.Screen name="resetPassword" component={ResetPassword} />
            <Stack.Screen name="code" component={CodeScreen} />
        </Stack.Navigator>
    );
};