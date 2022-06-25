import { Image } from "react-native";
import { Text } from "../../../../components/Layout";
import { Container, Contents } from "./styles";

export default ({ vehicle, desc, imgSrc }) => {
  return (
    <Container>
      <Text
        style={{
          paddingHorizontal: 15,
          fontWeight: "700",
          fontSize: 14,
        }}
      >
        {vehicle || "Not passed"}
      </Text>
      <Contents style={{}}>
        <Image
          // style={{ paddingRight: 5 }}
          source={imgSrc}
        />
        <Text
          style={{
            color: "#C4C4C4",
            marginLeft: 5,
          }}
        >
          {desc || "PassDesc"}
        </Text>
      </Contents>
    </Container>
  );
};
