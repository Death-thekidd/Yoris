import React from "react";
import { Dimensions, View } from "react-native";
import LogisticsInfoItem from "./LogisticsInfoItem";

export default function LogisticsInfo({
  firstLabel,
  firstValue,
  secondLabel,
  secondValue,
  style,
  helper,
}) {
  const { width } = Dimensions.get("window");
  return (
    <View
      style={[
        {
          backgroundColor: "#4E4E4E",
          width: width / 1.3,
          // marginVertical: 10,
          justifyContent: "center",
          padding: 10,
          alignSelf: "center",
          borderRadius: 5,
        },
        style,
      ]}
    >
      <LogisticsInfoItem
        label={firstLabel}
        value={firstValue}
        helper={helper}
      />
      <LogisticsInfoItem label={secondLabel} value={secondValue} second />
    </View>
  );
}
