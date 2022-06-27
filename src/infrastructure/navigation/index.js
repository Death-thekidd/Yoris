import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./Logistic";
//import { Tab } from "./account.navigator";

// import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  // const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};
