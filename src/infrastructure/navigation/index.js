import React, { useContext, } from "react";
import { NavigationContainer } from "@react-navigation/native";
;
import { AccountNavigator } from "./Logistic";



// import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
    // const { isAuthenticated } = useContext(AuthenticationContext);

    return (

        <NavigationContainer>
            {<AccountNavigator />}
        </NavigationContainer>

    );
};
