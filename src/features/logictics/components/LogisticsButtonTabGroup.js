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
    alignSelf: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    borderColor: "#C3AD60",
    borderWidth: 2,
    marginVertical: 5,
  },
});
