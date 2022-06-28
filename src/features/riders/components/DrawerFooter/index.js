import { Image, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";

export default () => {
  return (
    <Section
      style={{
        backgroundColor: "#C3AD60",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        flex: 1,
        bottom: -10,
      }}
    >
      <Image source={require("../../../../../assets/signoutWhite.png")} />
      <Text
        style={{
          fontSize: 18,
          marginLeft: 20,
        }}
      >
        Logout
      </Text>
    </Section>
  );
};
