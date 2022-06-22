import {
  LogisticsInfoItem,
  LogisticsInfoItemText,
  LogisticsInfoItemTextBold,
} from "./logictics.styles";

export default function ({ label = "label", value = "value" }) {
  return (
    <LogisticsInfoItem>
      <LogisticsInfoItemText>{label}:</LogisticsInfoItemText>
      <LogisticsInfoItemTextBold>{value}</LogisticsInfoItemTextBold>
    </LogisticsInfoItem>
  );
}
