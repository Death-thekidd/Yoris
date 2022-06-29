import {} from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Constants } from "../../../constants/db.mock";
import Header from "../../components/Header";
import { FontAwesome } from "../../components/Icons";
/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        activeTintColor: "#50d3a7",
        tabBarActiveTintColor: Constants.theme.primary,
        tabBarInactiveTintColor: Constants.theme.primary,
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
      {/* <Tabs.Screen name="Puddle" component={Puddle */}
      <Tabs.Screen name="Stores" component={Stores} />
      <Tabs.Screen name="Logistics" component={LogisticNavigator} />
      {/* <Tabs.Screen name="Yoris Pay" component={LogisticNavigator} /> */}
    </Tabs.Navigator>
  );
};

export default Tab;
