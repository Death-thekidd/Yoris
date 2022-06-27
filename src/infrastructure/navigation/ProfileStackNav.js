import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../features/riders/screens/Profile";

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={"mainProfile"} component={Profile} />
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
