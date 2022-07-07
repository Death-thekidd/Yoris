import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tab from "./Tab.js";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};