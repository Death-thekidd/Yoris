import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import Header from "../../../components/Header";
export default function () {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header
        headerTitle={"Order History & Tracking"}
        headerStyle={{
          color: "#C3AD60",
        }}
        iconLeft={require("../../../../assets/backIcon.png")}
        onLeftIconPress={() => navigation.goBack()}
      />
    </View>
  );
}
