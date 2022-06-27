import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./Logistic";
import ProfileNavigation from "./ProfileStackNav";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export const Navigation = () => {
  // const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="tab" component={Tab} />
        <Stack.Screen name="profile" component={ProfileNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
