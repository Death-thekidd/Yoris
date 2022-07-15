import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from "../../features/socialMedia/screens/ProfileScreen";

// initiallize and put createStackNavigation() in a variable
const Stack = createStackNavigator();

// JUS THE WAY IT SOUNDS WE ARE STACKING THE VIEWS 
// read the documentation 

const SocialNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
};


export default SocialNavigator;