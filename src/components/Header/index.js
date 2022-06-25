import { Pressable, Image, Text } from "react-native";
import { Section } from "../../features/payment/screens/style";

export default function ({
  onLeftIconPress,
  onRightIconPress,
  containerStyle,
  iconLeft,
  iconRight,
  headerTitle,
  headerTitleStyle,
}) {
  return (
    <Section
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      <Pressable style={{}} onPress={() => {}}>
        {iconLeft && <Image source={iconLeft} />}
      </Pressable>
      {headerTitle && (
        <Text
          style={[
            {
              color: "#fff",
              textAlign: "left",
              marginLeft: 20,
              fontSize: 20,
            },
            headerTitleStyle,
          ]}
        >
          {headerTitle}
        </Text>
      )}
      <Pressable style={{ 
        marginLeft: 20,
      }} onPress={onRightIconPress}>
        {iconRight && <Image source={iconRight} />}
      </Pressable>
    </Section>
  );
}
