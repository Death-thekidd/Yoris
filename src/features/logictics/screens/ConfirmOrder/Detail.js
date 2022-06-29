import { View, Image } from "react-native";
import { Constants } from "../../../../../constants/db.mock";

import { Text } from "../../../../components/Layout";
import { DetailOrderNumber, LocationText } from "./styles";

/** have devider and margin Vertical on index not first or last */
export default () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <DetailOrderNumber>#oRDerNuMbeR</DetailOrderNumber>
        <Image source={require("../../../../../assets/food.png")} />
      </View>
      <View>
        <Text
          style={{
            color: Constants.theme.primary,
          }}
        >
          PickUp Location
        </Text>
        <LocationText>
          15 AP street, Federal Low-cost Housing Estate, Ikorodu.
        </LocationText>
      </View>
      <View>
        <Text
          style={{
            color: Constants.theme.primary,
          }}
        >
          Drop-Off Location
        </Text>
        <LocationText>
          15 AP street, Federal Low-cost Housing Estate, Ikorodu.
        </LocationText>
      </View>
    </View>
  );
};
