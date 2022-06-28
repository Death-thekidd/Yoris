import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import Profile from "../../features/riders/screens/Profile";
import Header from "../../features/riders/screens/Profile/components/Header";
import { Pressable, View } from "react-native";
import CustomDrawer from "../../components/CustomDrawer";
import { FontAwesome } from "../../components/Icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import New from "../../features/riders/screens/Notification/components/New";
import { useNavigation } from "@react-navigation/native";
import Pending from "../../features/riders/screens/Notification/components/Pending";
import Express from "../../features/riders/screens/Notification/components/Express";
import Arrivals from "../../features/riders/screens/Notification/components/Arrivals";
import OrderAccepted from "../../features/riders/components/OrderAccepted";

const Drawer = createDrawerNavigator();

const Tab = createMaterialTopTabNavigator();

const NotificationsTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "#50d3a7",
        tabBarActiveTintColor: "#C3AD60",
        tabBarInactiveTintColor: "#C3AD60",
        inactiveTintColor: "white",
        tabBarPressColor: "transparent",
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: "#9A8340",
        },

        tabBarStyle: {
          elevation: 10,
          backgroundColor: "#0B090A",
          borderRadius: 1,
        },
      }}
    >
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Pending" component={Pending} />
      <Tab.Screen name="Arrivals" component={Arrivals} />
      <Tab.Screen name="Express" component={Express} />
    </Tab.Navigator>
  );
};

const drawerScreens = [
  {
    name: "mainProfile",
    options: {
      header: () => (
        <View style={{ paddingHorizontal: 20, backgroundColor: "#000" }}>
          <Header />
        </View>
      ),
      title: "Profile",
      drawerIcon: (props) => <FontAwesome {...props} name="user-edit" />,
    },
    component: Profile,
  },
];

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveTintColor: "#fff",
        drawerItemStyle: {
          marginVertical: 20,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      {drawerScreens.map((props) => (
        <Drawer.Screen {...props} />
      ))}
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  const { navigate } = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profileDrawer" component={ProfileDrawer} />

      <Stack.Screen
        name="notifications"
        component={NotificationsTab}
        options={{
          headerShown: true,
          header: () => (
            <View style={{ paddingHorizontal: 20, backgroundColor: "#000" }}>
              <Header
                RightComponent={() => (
                  <Pressable
                    onPress={() =>
                      navigate("profileDrawer", {
                        /* data should be dynamic */ isUser: false,
                        isRider: true,
                      })
                    }
                  >
                    <FontAwesome color="#C3AD60" name={"user"} size={20} />
                  </Pressable>
                )}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="orderAccepted" component={OrderAccepted} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
