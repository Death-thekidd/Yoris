import { Image } from "react-native";
import { Text } from "../../../../components/Layout";
import { PressableContainer, Contents, Row } from "./styles";
import { Pressable } from "react-native";
import { FontAwesome } from "../../../../components/Icons";
import { Constants } from "../../../../../constants/db.mock";

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
          <FontAwesome name="check" color={Constants.theme.primary} />
        )}
      </Row>

      <Contents style={{}}>
        <Image source={imgSrc} />
        <Text
          style={{
            color: Constants.theme.gray,
            flex: 1,
            marginLeft: 5,
            fontSize: 13.5,
            flexWrap: "wrap",
          }}
        >
          {desc || "PassDesc"}
        </Text>
      </Contents>
    </PressableContainer>
  );
};
