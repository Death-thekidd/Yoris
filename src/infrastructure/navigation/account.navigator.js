import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from '../../features/account/screens/Account.screen.js'
import LoginScreen from '../../features/account/screens/login.screen'
import RegisterScreen from '../../features/account/screens/Register.Screen'

//  initailize and  put  createStackNavigator() in  a variable
const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

export const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={AccountScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
    );
};

