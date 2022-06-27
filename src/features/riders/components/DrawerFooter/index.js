import { Image, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";

export default () => {
  return (
    <View
      style={{
        backgroundColor: "#F62424",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        flex: 1,
        alignContent: "flex-end",
      }}
    >
      <Image source={require("../../../../../assets/signoutWhite.png")} />
      <Text
        style={{
          fontSize: 25,
          marginLeft: 20,
        }}
      >
        Logout
      </Text>
    </View>
  );
};
