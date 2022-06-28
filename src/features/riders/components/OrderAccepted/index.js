import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, View } from "react-native";
import { Layout, Section, Text } from "../../../../components/Layout";
import {
  ModalCenteredView,
  ModalView,
} from "../../../../components/Modal/styles";

export default () => {
  const { navigate } = useNavigation();
  useEffect(() => {
    setTimeout(() => navigate("profileDrawer"), 3000);
  }, []);
  return (
    <Layout style={{ justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../../../../../assets/checkedOrderConfim.png")} />
      <Text
        style={{
          fontSize: 30,
          color: "#C3AD60",
          marginTop: 25,
        }}
      >
        Task Completed!
      </Text>
    </Layout>
  );
};
