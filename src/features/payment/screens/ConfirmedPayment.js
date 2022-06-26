import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { SubTitle, Title } from "./style";
export default function () {
  const { navigate } = useNavigation();

  const redirect = () => setTimeout(() => navigate("logisticsMain"), 5000);
  useEffect(() => {
    redirect();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#C3AD60",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "65%",
        }}
      >
        <Title
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 35,
            marginBottom: 0,
          }}
        >
          Congratulations{" "}
        </Title>
        <SubTitle
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 20,
            marginTop: 10,
          }}
        >
          your goods have been shipped!!!
        </SubTitle>
      </View>
    </View>
  );
}
