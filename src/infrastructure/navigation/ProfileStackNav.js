import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../features/riders/screens/Profile";

const Stack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="mainProfile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;
