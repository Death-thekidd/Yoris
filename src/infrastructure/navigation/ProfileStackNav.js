import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import Profile from "../../features/riders/screens/Profile";
import Header from "../../features/riders/screens/Profile/components/Header";
import { View } from "react-native";
import DrawerHeader from "../../features/riders/components/DrawerHeader";
import CustomDrawer from "../../components/CustomDrawer";
import { FontAwesome } from "../../components/Icons";

const Drawer = createDrawerNavigator();
/* 
const drawerLists = [
  {
    name: "",
    component: ,
    options: {}
  },
  {
    name
  }
]
 */
const ProfileDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "transparent",

        drawerItemStyle: {
          marginVertical: 25,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={"mainProfile"}
        options={{
          header: () => (
            <View style={{ paddingHorizontal: 20, backgroundColor: "#000" }}>
              <Header />
            </View>
          ),
          title: "Edit Profile",
          drawerIcon: (props) => <FontAwesome {...props} name="user-edit" />,
        }}
        component={Profile}
      />
    </Drawer.Navigator>
  );
};

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="DrawerProfile" component={ProfileDrawer} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
