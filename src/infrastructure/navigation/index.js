import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./account.navigation";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};