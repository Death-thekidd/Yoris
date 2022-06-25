import { Image } from "react-native";
import { Text } from "../../../../components/Layout";
import { PressableContainer, Contents, Row } from "./styles";
import { Pressable } from "react-native";
import { FontAwesome } from "../../../../components/Icons";

export default ({
  vehicle,
  desc,
  imgSrc,
  itemKey,
  onVehicleSelect,
  selectedVehicle,
}) => {
  return (
    <PressableContainer onPress={() => onVehicleSelect(itemKey)}>
      <Row style={{ paddingHorizontal: 15 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 14,
          }}
        >
          {vehicle || "Not passed"}
        </Text>
        {selectedVehicle === itemKey && (
          <FontAwesome name="check" color="#C3AD60" />
        )}
      </Row>

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
    </PressableContainer>
  );
};
