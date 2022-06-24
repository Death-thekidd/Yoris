import { View } from "react-native";
import { Text } from "../../../../components/Layout";
import StyledAddressBoxView from "./style";

export default function ({ text }) {
  return (
    <StyledAddressBoxView>
      <Text>{text}</Text>
    </StyledAddressBoxView>
  );
}
