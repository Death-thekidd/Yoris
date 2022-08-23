import { Text, View } from "react-native";
import {
  LogisticsInfoItem,
  LogisticsInfoItemHelperText,
  LogisticsInfoItemText,
  LogisticsInfoItemTextBold,
} from "./logictics.styles";

export default function ({ label = "label", value = "value", second, helper }) {
  return (
    <LogisticsInfoItem
      style={
        second && {
          marginBottom: 0,
        }
      }
    >
      <LogisticsInfoItemText>{label}:</LogisticsInfoItemText>

      {helper ? (
        <View style={{ position: "relative", border: "1px solid blue" }}>
          <LogisticsInfoItemTextBold>{value}</LogisticsInfoItemTextBold>
          <LogisticsInfoItemHelperText
            style={{ position: "absolute", top: "110%", left: 0 }}
          >
            {helper}
          </LogisticsInfoItemHelperText>
        </View>
      ) : (
        <LogisticsInfoItemTextBold>{value}</LogisticsInfoItemTextBold>
      )}
    </LogisticsInfoItem>
  );
}
