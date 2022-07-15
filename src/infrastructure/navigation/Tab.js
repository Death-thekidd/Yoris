import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Constants } from "../../../constants/db.mock";
import Header from "../../components/Header";
import { FontAwesome } from "../../components/Icons";
import Storesscreen from "../../features/Stores/Stores.screen";
import AccountNavigator from "./account.navigation";
import LogisticNavigator from "./Logistic";
import SocialNavigator from "./social.navigation";

/// just the way we use the stack navigation
const Tabs = createMaterialTopTabNavigator();

const Tab = () => {
  const navigation = useNavigation();
  const theme = Constants.theme;
  return (
    <>
      <Header
        containerStyle={{
          padding: 10,
          marginBottom: 0,
          marginTop: 0,
          backgroundColor: theme.dark,
        }}
        IconRightComponent={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: 100,
            }}
          >
            <Pressable
              onPress={() =>
                navigation.navigate("profile", {
                  /* data should be dynamic */ isUser: false,
                  isRider: true,
                })
              }
            >
              <FontAwesome
                color={Constants.theme.primary}
                name={"user"}
                size={20}
              />
            </Pressable>
          </View>
        )}
      />

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
        <Tabs.Screen name="Stores" component={Storesscreen} />
        <Tabs.Screen name="Account" component={AccountNavigator} />
        <Tabs.Screen name="Logistics" component={LogisticNavigator} />
        <Tabs.Screen name="SocialMedia" component={SocialNavigator} />
      </Tabs.Navigator>
    </>
  );
};

export default Tab;
