import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, Pressable, View } from "react-native";
import Header from "../../../../components/Header";
import { FontAwesome } from "../../../components/Icons";
import { Constants } from "../../../../constants/db.mock";

export default ({ RightComponents, title = "", titleStyle }) => {
    const { goBack, dispatch, navigate } = useNavigation();
    const onToggle = () => dispatch(DrawerActions.toggleDrawer());
    return (
     <Header 
      iconLeft={require("../../../../assets/backIcon.png")}
      onLeftIconPress={() => goBack()}
      headerTitle={title ? title : true}
      headerTitleStyle={[titleStyle]}
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
                 isUser: false,
                 isProfile: true,
               })
              }
             >
             <FontAwesome 
                color={Constants.theme.primary}
                name={"bell"}
             />
            </Pressable>
            <Pressable onPress={onToggle}>
              <Image 
                source={require("../../../../assets/hamburger.png")}
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
}