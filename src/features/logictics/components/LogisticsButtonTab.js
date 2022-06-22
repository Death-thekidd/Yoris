import { useEffect } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function ({ onPress, isActive, text = "tab" }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonTab,
        {
          backgroundColor: isActive ? "#C3AD60" : "transparent",
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonTabText,
          { color: !isActive ? "#C3AD60" : "#000" },
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
