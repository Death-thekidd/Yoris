import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WelcomeUsers from "../../features/account/screens/welcome.screen";
import RegisterUsers from "../../features/account/screens/Register.Screen";
import  SignIn from "../../features/account/screens/signIn.screen";
import ForgotPassword from "../../features/account/screens/forgotPassword.screen";
import ResetPassword from "../../features/account/screens/resetPassword.screen";
import CodeScreen from "../../features/account/screens/code.screen";
import SettingsScreen from "../../features/account/screens/SettingsScreen";
import AudienceScreen from "../../features/account/screens/AudienceScreen";
import NotificationScreen from "../../features/account/screens/NotificationScreen";
import FactorScreen from "../../features/account/screens/FactorScreen";

//  initailize and  put  createStackNavigator() in  a variable
const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeUsers} />
      <Stack.Screen name="register" component={RegisterUsers} />
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="resetPassword" component={ResetPassword} />
      <Stack.Screen name="code" component={CodeScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
      <Stack.Screen name="audience" component={AudienceScreen} />
      <Stack.Screen name="notification" component={NotificationScreen} />
      <Stack.Screen name="factor" component={FactorScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
