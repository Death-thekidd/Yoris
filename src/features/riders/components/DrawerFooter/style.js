import { Image } from "react-native";
import { Section } from "../../../../components/Layout";

export default () => {
  return (
    <Section
      style={{
        backgroundColor: "#F62424",
        height: 48,
        justifyContent: "row",
      }}
    >
      <Image source={require("../../../../../assets/logoutWhite.png")} />
    </Section>
  );
};
