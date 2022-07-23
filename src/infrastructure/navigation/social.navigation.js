import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from "../../features/socialMedia/screens/ProfileScreen";
import PuddleScreen from "../../features/socialMedia/screens/PuddleScreen";
import { NavigationContainer } from "@react-navigation/drawer";

// initiallize and put createStackNavigation() in a variable
const Stack = createStackNavigator();


// JUS THE WAY IT SOUNDS WE ARE STACKING THE VIEWS 
// read the documentation 

const SocialNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="puddle" component={PuddleScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    );
};



export default SocialNavigator;