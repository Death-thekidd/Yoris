import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Logisticscreen from '../../features/logictics/screens/logisticscreen';
import LogisticsBooking from '../../features/logictics/screens/logisticBooking';
import LogisticsAddress from '../../features/logictics/screens/logisticsAddress';
import LogisticsLocation from '../../features/logictics/screens/logisticslocation';
import { createStackNavigator } from '@react-navigation/stack';
import Stores from '../../features/Stores/Stores.screen';
import Fintech1 from '../../features/Fintech/screens/fintech1';
import Fintech2 from '../../features/Fintech/screens/fintech2';
import Fintech3 from '../../features/Fintech/screens/fintech3';
import Fintech4 from '../../features/Fintech/screens/fintech4';
import Fintech5 from '../../features/Fintech/screens/fintech5';
import Pending from '../../features/Fintech/screens/fintech6';
import Submitted from '../../features/Fintech/screens/fintech7';
import Fintech8 from '../../features/Fintech/screens/fintech8';
import Submitted1 from '../../features/Fintech/screens/fintech9';
import Notifications from '../../features/Fintech/screens/fintech10';
import History from '../../features/Fintech/screens/fintech11';
import App from '../../features/Fintech/screens/calendarScreen';
/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const FintechScreen = ()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen
         name="Fintech1"
         component={Fintech1}
         options={{
             headerShown:false
         }}/>
        <Stack.Screen
        name="Fintech2"
        component={Fintech2}
        options={{
            headerShown: false
        }}/>
        <Stack.Screen
        name="Fintech3"
        component={Fintech3}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name="Fintech4"
        component={Fintech4}
        options={{
            headerShown: false
        }}
        />
        <Stack.Screen
        name="Fintech5"
        component={Fintech5}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Fintech6"
        component={Pending}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Fintech7"
        component={Submitted}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Fintech8"
        component={Fintech8}
        options={{
            headerShown: false
        }}
        />
         <Stack.Screen
        name="Fintech9"
        component={Submitted1}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Fintech10"
        component={Notifications}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Fintech11"
        component={History}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
        <Stack.Screen
        name="Calendar"
        component={App}
        options={{
            headerShown: false
        }}
        initialParams={{
            paramKey:'Link'
        }}
        />
    </Stack.Navigator>
    )
    
}

export const AccountNavigator = () => {

    return (
        <Tabs.Navigator
            headerMode="none"
            style={{ backgroundColor: "#fff", paddingTop: 30, }}
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
                component={FintechScreen}
            />
            <Tabs.Screen
              name="Pick Up"
              component={LogisticsLocation}
            />
            <Tabs.Screen
            name="Booking"
            component={LogisticsBooking}
            />
        </Tabs.Navigator >
    );
};


// JUST THE WAY IT SOUNDS WE ARE STACKING THE VIEWS
// read the documentation

export const logisticNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Logisticscreen} />
            <Stack.Screen name="logisticBooking" component={LogisticsAddress} />
            <Stack.Screen name="logisticLocation" component={LogisticsLocation} />
            <Stack.Screen name="logisticsBooking" component={LogisticsBooking} />
        </Stack.Navigator>
    );
};

