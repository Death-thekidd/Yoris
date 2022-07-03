import { useEffect } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Constants } from "../../../../constants/db.mock";

export default function ({ onPress, isActive, text = "tab" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonTab,
        {
          backgroundColor: isActive ? Constants.theme.primary : "transparent",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonTabText,
          {
            color: !isActive ? Constants.theme.primary : Constants.theme.dark,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonTab: {
    width: "50%",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  buttonTabText: {
    fontSize: 15,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  },
});
