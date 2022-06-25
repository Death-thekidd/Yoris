import { useNavigation } from "@react-navigation/native";
import Header from "../../../../components/Header";
import { Layout, LayoutScrollView } from "../../../../components/Layout";
import Detail from "./Detail";

export default () => {
  const { goBack, navigate } = useNavigation();

  return (
    <LayoutScrollView
      style={{
        paddingHorizontal: 35,
      }}
    >
      <Header
        iconLeft={require("../../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
        headerTitle={"Confirm Details"}
        headerTitleStyle={{
          color: "#C3AD60",
        }}
        iconRight={require("../../../../../assets/cancel.png")}
      />

      {["", "", "", "", "", ""].map((data, i) => (
        <Detail key={i} />
      ))}
    </LayoutScrollView>
  );
};
