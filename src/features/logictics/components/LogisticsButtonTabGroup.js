import { useEffect } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import LogisticsButtonTab from "./LogisticsButtonTab";

export default function ({ data, style }) {
  return (
    <View style={[styles.buttonTabGroup, style]}>
      {data.map((tab, i) => (
        <LogisticsButtonTab key={i} {...tab} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTabGroup: {
    flexDirection: "row",
    backgroundColor: "#9A8340",
    height: 64,
    alignSelf: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    borderColor: "#C3AD60",
    borderWidth: 2,
    marginVertical: 5,
    boxShadow: "inset 4px 4px 8px rgba(0, 0, 0, 0.25)",
  },
});
