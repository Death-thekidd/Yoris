import { DrawerActions, useNavigation } from "@react-navigation/native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Image, Pressable, Button, View } from "react-native";
import Header from "../../../../../components/Header";
import { FontAwesome } from "../../../../../components/Icons";
import { useEffect } from "react";

export default ({ RightComponent }) => {
  const { goBack, dispatch, navigate } = useNavigation();
  const onToggle = () => dispatch(DrawerActions.toggleDrawer());
  return (
    <Header
      iconLeft={require("../../../../../../assets/backIcon.png")}
      onLeftIconPress={() => goBack()}
      IconRightComponent={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: !RightComponent ? "space-between" : "flex-end",
            alignItems: "center",
            width: 100,
          }}
        >
          {!RightComponent ? (
            <>
              <Pressable
                onPress={() =>
                  navigate("notifications", {
                    /* data should be dynamic */ isUser: false,
                    isRider: true,
                  })
                }
              >
                <FontAwesome color="#C3AD60" name={"bell"} size={20} />
              </Pressable>
              <Pressable onPress={onToggle}>
                <Image
                  source={require("../../../../../../assets/hamburger.png")}
                />
              </Pressable>
            </>
          ) : (
            <RightComponent />
          )}
        </View>
      )}
    />
  );
};
