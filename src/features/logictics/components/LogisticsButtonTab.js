import { useEffect } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Constants } from "../../../../constants/db.mock";

export default function ({
  onPress,
  isActive,
  text = "tab",
  buttonStyle,
  index,
  buttonActiveColor,
  buttonInactiveColor,
  buttonTextInactiveColor,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.buttonTab,
        {
          backgroundColor: isActive
            ? !buttonActiveColor
              ? Constants.theme.primary
              : buttonActiveColor
            : !buttonInactiveColor
            ? "transparent"
            : buttonInactiveColor,
          ...(!buttonStyle &&
            index[0] && {
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }),
          ...(!buttonStyle &&
            index[index.length - 1] && {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }),
        },
        buttonStyle,
      ]}
    >
      <Text
        style={[
          styles.buttonTabText,
          {
            color: !isActive
              ? !buttonTextInactiveColor
                ? Constants.theme.primary
                : buttonTextInactiveColor
              : Constants.theme.dark,
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
