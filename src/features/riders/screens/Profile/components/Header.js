import { DrawerActions, useNavigation } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Image, Pressable, View } from "react-native";
import Header from "../../../../../components/Header";
import { FontAwesome } from "../../../../../components/Icons";
import { useEffect } from "react";

export default ({ navigation }) => {
  useEffect(() => console.log("navigation => ", navigation), []);
  const { goBack, dispatch } = useNavigation();
  const onToggle = () => dispatch(DrawerActions.toggleDrawer());
  return (
    <Header
      iconLeft={require("../../../../../../assets/backIcon.png")}
      onLeftIconPress={() => goBack()}
      IconRightComponent={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 100,
          }}
        >
          <Pressable
            onPress={() =>
              navigate("profile", {
                /* data should be dynamic */ isUser: false,
                isRider: true,
              })
            }
          >
            <FontAwesome color="#C3AD60" name={"bell"} size={20} />
          </Pressable>
          <Pressable onPress={onToggle}>
            <Image source={require("../../../../../../assets/hamburger.png")} />
          </Pressable>
        </View>
      )}
    />
  );
};
