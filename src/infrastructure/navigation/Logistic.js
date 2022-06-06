import React from 'react';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Logisticscreen from '../../features/logictics/screens/logisticscreen';
import LogisticBooking from '../../features/logictics/screens/logisticBooking';
import LogisticsAddress from '../../features/logictics/screens/logisticsAddress';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../../features/Stores/Stores.screen';


/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();

export const AccountNavigator = () => {

    return (
        <Tabs.Navigator
            headerMode="none"
            style={{ backgroundColor: "#A7A5A6", paddingTop: 30, }}
            // screenOptions={{
            //     activeTintColor: "#FFC300",
            //     inactiveTintColor: "#353935",
            //     style: {
            //         labelStyle: { fontSize: 1 },
            //     }
            // }}
            screenOptions={{
                activeTintColor: "#50d3a7",
                inactiveTintColor: "white",
                tabBarPressColor: '#cec6c6',
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: '#9A8340',
                },

                tabBarStyle: {
                    borderTopColor: "9A8340",
                    borderTopWidth: 2,
                    elevation: 10,
                    backgroundColor: '#0B090A',
                    borderRadius: 1

                },
            }}
        // tabBarOptions={{
        //     activeTintColor: '#ffffff',
        //     inactiveTintColor: '#ffffff',
        //     showIcon: true,
        //     pressColor: '#856',
        //     scrollEnabled: false,
        //     tabStyle: { backgroundColor: '#000', borderRadius: 10, margin: 12, justifyContent: 'center', alignContent: 'center' },
        //     indicatorStyle: { backgroundColor: '#987', opacity: 0.05 },
        //     style: {
        //         backgroundColor: '#000000', borderRadius: 30, margin: 24, height: 72, width: '90%',
        //         labelStyle: { fontSize: 2 },
        //     }
        // }}
        >

            <Tabs.Screen
                name="Logistic"
                component={Logisticscreen}
            />

            <Tabs.Screen
                name="Store"
                component={Stores}
            />

            <Tabs.Screen
                name="Puddle"
                component={Logisticscreen}
            />

            <Tabs.Screen
                name="Yoris Pay"
                component={LogisticsAddress}
            />
        </Tabs.Navigator >
    );
};

const Stack = createStackNavigator();
// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

export const logisticNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Logisticscreen} />
            <Stack.Screen name="logisticBooking" component={LogisticsAddress} />
        </Stack.Navigator>
    );
};

