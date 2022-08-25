import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Stores from "../../features/Stores/Stores.screen";
import Ecommerce from "../../features/ecommerce/ecommerce";
import Ecommerce2 from "../../features/ecommerce/ecommerce2";
import Ecommerce3 from "../../features/ecommerce/product";
import Ecommerce4 from "../../features/ecommerce/ecommerce4";
import Ecommerce5 from "../../features/ecommerce/ecommerce5";
import Ecommerce6 from "../../features/ecommerce/ecommerce6";
import Ecommerce7 from "../../features/ecommerce/ecommerce7";
import Ecommerce8 from "../../features/ecommerce/ecommerce8";
import Fintech1 from "../../features/Fintech/fintech1";
import MobileTopUp2 from "../../features/Fintech/mobileTopUp2";
import MobileTopUp from "../../features/Fintech/mobileTopUp";
import Hotel from "../../features/Fintech/hotel";
import Hotel2 from "../../features/Fintech/hotel2";
import Gym from "../../features/Fintech/gym";
import Gym2 from "../../features/Fintech/gym2";
import Food1 from "../../features/Fintech/food1";
import Food2 from "../../features/Fintech/food2";
import Food3 from "../../features/Fintech/food3";
import Food4 from "../../features/Fintech/food4";
import Procurement1 from "../../features/Fintech/procurement1";
import Procurement4 from "../../features/Fintech/procurement4";
import Procurement5 from "../../features/Fintech/procurement5";
import Procurement7 from "../../features/Fintech/procurement7";
import Procurement8 from "../../features/Fintech/procurement8";
import Procurement11 from "../../features/Fintech/procurement1";
import Procurement10 from "../../features/Fintech/procurement10";
import Procurement9 from "../../features/Fintech/procurement9";
import Procurement6 from "../../features/Fintech/procurement6";
import Procurement3 from "../../features/Fintech/procurement3";
import Procurement2 from "../../features/Fintech/procurement2";
import CalendarScreen from "../../features/Fintech/calendarScreen";
import Vendor1 from "../../features/Vendors/vendor1";
import Vendor2 from "../../features/Vendors/vendor2";
import Logisticscreen from "../../features/logictics/screens/logisticscreen";
import LogisticsVehicle from "../../features/logictics/screens/logisticsVehicle";
import LogisticsDetails from "../../features/logictics/screens/logisticsDetails";
import LogisticsOrder from "../../features/logictics/screens/logisticsOrder";
import LogisticsShipping from "../../features/logictics/screens/logisticsShipping";
import ShippingDetails from '../../features/logictics/screens/shipingDetails';
import {
  PaymentScreen,
  PaymentOptions,
  ConfirmedPayment,
} from "../../features/payment/screens";
import OrderHistory from "../../features/logictics/screens/OrderHistory";
import SingleOrder from "../../features/logictics/screens/SingleOrder";
import PickUp from "../../features/logictics/screens/PickUp";
import DropOff from "../../features/logictics/screens/DropOff";
import ConfirmOrder from "../../features/logictics/screens/ConfirmOrder";

import Profile from "../../features/riders/screens/Profile";
import RiderOrder from "../../features/riders/components/RiderOrder/riderOrder";

import ProfileScreen from "../../features/socialMedia/screens/ProfileScreen";
import PuddleScreen from "../../features/socialMedia/screens/PuddleScreen";
import SocialMediaSearch from "../../features/socialMedia/screens/search";
import Message from "../../features/socialMedia/screens/message";

import ChatScreen from "../../features/socialMedia/screens/chats";
import Why from "../../features/socialMedia/screens/why";
import Ready from "../../features/socialMedia/screens/ready";
import Initialized from "../../features/socialMedia/screens/initialized";
import Cancelled from "../../features/socialMedia/screens/cancelled";
import Deleted from "../../features/socialMedia/screens/deleted";
import EditVendorProfile from "../../features/socialMedia/screens/editVendorProfile";
import Notification from "../../features/socialMedia/screens/notification";
import Settings from "../../features/socialMedia/screens/settings";

import WelcomeScreen from "../../features/account/screens/welcome.screen";
import RegisterUsers from "../../features/account/screens/Register.Screen";
import SignIn from "../../features/account/screens/signIn.screen";
import ForgotPassword from "../../features/account/screens/forgotPassword.screen";
import CodeScreen from "../../features/account/screens/code.screen";
import ResetPassword from "../../features/account/screens/resetPassword.screen";
import Notification2 from "../../features/ecommerce/notification";
import Filter from "../../features/ecommerce/filterSearch";

/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();
const Screens = createStackNavigator();

// const NewScreen = ()=>{
//     return(
//          <Screens.Navigator>

//                 <Screens.Screen
//                     name="Ecommerce"
//                     component={Ecommerce}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce2"
//                     component={Ecommerce2}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce3"
//                     component={Ecommerce3}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce4"
//                     component={Ecommerce4}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce5"
//                     component={Ecommerce5}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce6"
//                     component={Ecommerce6}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce7"
//                     component={Ecommerce7}
//                     options={{
//       headerShown: false,}}
//                 />
//                 <Screens.Screen
//                     name="Ecommerce8"
//                     component={Ecommerce8}
//                     options={{
//       headerShown: false,}}
//                 />

//             </Screens.Navigator>

//         )

// };

// const FintechScreen = ()=>{
//     return(
//     <Screens.Navigator>
//         <Screens.Screen
//                     name="Fintech1"
//                     component={Fintech1}
//                     options={{
//       headerShown: false,}}
//                 />
//         <Screens.Screen
//                     name="MobileTopUp"
//                     component={MobileTopUp}
//                     options={{
//       headerShown: false,}}
//                 />
//         <Screens.Screen
//                     name="MobileTopUp2"
//                     component={MobileTopUp2}
//                     options={{
//       headerShown: false,}}
//                 />
//          <Screens.Screen
//                     name="Hotel"
//                     component={Hotel}
//                     options={{
//       headerShown: false,}}
//                 />
//          <Screens.Screen
//                     name="Hotel2"
//                     component={Hotel2}
//                     options={{
//       headerShown: false,}}
//                 />
//          <Screens.Screen
//                     name="Gym"
//                     component={Gym}
//                     options={{
//       headerShown: false,}}
//                 />
//          <Screens.Screen
//                     name="Gym2"
//                     component={Gym2}
//                     options={{
//       headerShown: false,}}
//                 />
//     </Screens.Navigator>
//     )
//    }

const TabScreen = () => {
  return (
    <Tabs.Navigator
      headerMode="none"
      // screenOptions={{
      //     activeTintColor: "#FFC300",
      //     inactiveTintColor: "#353935",
      //     style: {
      //         labelStyle: { fontSize: 1 },
      //     }
      // }}
      screenOptions={{
        activeTintColor: "#50d3a7",
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ddd",
        inactiveTintColor: "white",
        tabBarPressColor: "#cec6c6",
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: "#9A8340",
        },

        tabBarStyle: {
          borderTopColor: "9A8340",
          borderTopWidth: 2,
          elevation: 10,
          backgroundColor: "#0B090A",
          borderRadius: 1,
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
      <Tabs.Screen name="Logistic" component={Logisticscreen} />

      <Tabs.Screen
        name="Store"
        component={Ecommerce}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Social Media"
        component={PuddleScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Yoris Pay"
        component={Fintech1}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export const AccountNavigator = () => {
  return (
    <Screens.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Account"
    >
      <Tabs.Screen name="Tabs" component={TabScreen} />
      <Screens.Screen name="Account" component={WelcomeScreen} />
      <Screens.Screen name="Ecommerce" component={Ecommerce} />
      <Screens.Screen name="Filter" component={Filter} />
      <Screens.Screen name="Fintech1" component={Fintech1} />
      <Screens.Screen name="Ecommerce2" component={Ecommerce2} />
      <Screens.Screen name="Ecommerce3" component={Ecommerce3} />
      <Screens.Screen name="Ecommerce4" component={Ecommerce4} />
      <Screens.Screen name="Ecommerce5" component={Ecommerce5} />
      <Screens.Screen name="Ecommerce6" component={Ecommerce6} />
      <Screens.Screen name="Ecommerce7" component={Ecommerce7} />
      <Screens.Screen name="Ecommerce8" component={Ecommerce8} />

      <Screens.Screen name="MobileTopUp" component={MobileTopUp} />
      <Screens.Screen name="MobileTopUp2" component={MobileTopUp2} />
      <Screens.Screen name="Message" component={Message} />
      <Screens.Screen name="Vendor1" component={Vendor1} />
      <Screens.Screen name="Hotel" component={Hotel} />
      <Screens.Screen name="Hotel2" component={Hotel2} />
      <Screens.Screen name="Gym" component={Gym} />
      <Screens.Screen name="Gym2" component={Gym2} />
      <Screens.Screen name="Food1" component={Food1} />
      <Screens.Screen name="Food2" component={Food2} />
      <Screens.Screen name="Food3" component={Food3} />
      <Screens.Screen name="Food4" component={Food4} />
      <Screens.Screen name="Procurement1" component={Procurement1} />
      <Screens.Screen name="Procurement11" component={Procurement11} />
      <Screens.Screen
        name="Procurement8"
        component={Procurement8}
        initialParams={{
          paramKey: "Link",
        }}
      />
      <Screens.Screen name="Procurement4" component={Procurement4} />
      <Screens.Screen name="Procurement5" component={Procurement5} />
      <Screens.Screen name="Procurement7" component={Procurement7} />
      <Screens.Screen name="Procurement3" component={Procurement3} />
      <Screens.Screen name="Procurement2" component={Procurement2} />
      <Screens.Screen name="Procurement10" component={Procurement10} />
      <Screens.Screen
        name="Procurement6"
        component={Procurement6}
        initialParams={{
          paramKey: "Link",
        }}
      />
      <Screens.Screen
        name="Procurement9"
        component={Procurement9}
        initialParams={{
          paramKey: "Link",
        }}
      />
      <Screens.Screen
        name="Vendor2"
        component={Vendor2}
        initialParams={{
          image: require("../../../assets/header.png"),
        }}
      />
      <Screens.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        initialParams={{
          paramKey: "Link",
        }}
      />
      <Screens.Screen name="logisticsMain" component={Logisticscreen} />
      <Screens.Screen name="pickUp" component={PickUp} />
      <Screens.Screen name="dropOff" component={DropOff} />
      <Screens.Screen name="confirmOrder" component={ConfirmOrder} />
      <Screens.Screen name="logisticsVehicle" component={LogisticsVehicle} />
      <Screens.Screen name="logisticsDetails" component={LogisticsDetails} />
      <Screens.Screen name="ship" component={ShippingDetails} />
      <Screens.Screen name="logisticsOrder" component={LogisticsOrder} />
      <Screens.Screen name="shipping" component={LogisticsShipping} />
      <Screens.Screen name="paymentScreen" component={PaymentScreen} />
      <Screens.Screen name="paymentOptions" component={PaymentOptions} />
      <Screens.Screen name="confirmPayment" component={ConfirmedPayment} />
      <Screens.Screen name="orderHistory" component={OrderHistory} />
      <Screens.Screen name="singleOrder" component={SingleOrder} />
      <Screens.Screen name="riderOrder" component={RiderOrder} />
      <Screens.Screen name="profile1" component={Profile} />
      <Screens.Screen name="profile" component={ProfileScreen} />
      <Screens.Screen name="socialMediaSearch" component={SocialMediaSearch} />
      <Screens.Screen name="chats" component={ChatScreen} />
      <Screens.Screen name="why" component={Why} />
      <Screens.Screen name="ready" component={Ready} />
      <Screens.Screen name="initialized" component={Initialized} />
      <Screens.Screen name="cancelled" component={Cancelled} />
      <Screens.Screen name="deleted" component={Deleted} />
      <Screens.Screen name="editVendorProfile" component={EditVendorProfile} />
      <Screens.Screen name="notification" component={Notification} />
      <Screens.Screen name="notification2" component={Notification2} />
      <Screens.Screen name="settings" component={Settings} />
      <Screens.Screen name="register" component={RegisterUsers} />
      <Screens.Screen name="signIn" component={SignIn} />
      <Screens.Screen name="forgotPassword" component={ForgotPassword} />
      <Screens.Screen name="resetPassword" component={ResetPassword} />
      <Screens.Screen name="code" component={CodeScreen} />
    </Screens.Navigator>
  );
};
