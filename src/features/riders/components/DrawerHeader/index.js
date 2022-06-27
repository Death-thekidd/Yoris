import { Image, View } from "react-native";
import { Section, Text } from "../../../../components/Layout";

export default () => {
  return (
    <Section
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <Image
        style={{
          marginRight: 15,
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={require("../../../../../assets/profile.png")}
      />
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            fontSize: 15,
          }}
        >
          @john_doe
        </Text>
      </View>
    </Section>
  );
};
