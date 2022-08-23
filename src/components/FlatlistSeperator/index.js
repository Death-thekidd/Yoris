import { View } from "react-native";
import { Constants } from "../../../constants/db.mock";

const theme = Constants.theme;
export default () => (
  <View
    style={{
      width: "100%",
      backgroundColor: theme.primary,
      borderBottomColor: theme.primary,
      borderBottomWidth: 0.5,
    }}
  />
);
