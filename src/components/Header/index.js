import { Pressable, Image, Text } from "react-native";
import { Section } from "../../features/payment/screens/style";

export default function ({
  onLeftIconPress,
  onRightIconPress,
  onEndIconPress,
  containerStyle,
  iconLeft,
  iconRight,
  iconEnd,
  IconLeftComponent,
  IconRightComponent,
  IconEndComponent,
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
      {IconEndComponent ? (
       <IconEndComponent /> 
     ) : (
       <Pressable
         style={{
           left: 260,
         }}
         onPress={() => onEndIconPress && onEndIconPress}
       >
         {iconEnd && <Image source={iconEnd} />}
       </Pressable>
     )}
      {IconLeftComponent ? (
        <IconLeftComponent />
      ) : (
        <Pressable
          style={{}}
          onPress={() => onLeftIconPress && onLeftIconPress()}
        >
          {iconLeft && <Image source={iconLeft} />}
        </Pressable>
      )}
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
      {IconRightComponent ? (
        <IconRightComponent />
      ) : (
        <Pressable
          style={{
            marginLeft: 20,
          }}
          onPress={() => onRightIconPress && onRightIconPress()}
        >
          {iconRight && <Image source={iconRight} />}
        </Pressable>
      )}

    </Section>
  );
}
