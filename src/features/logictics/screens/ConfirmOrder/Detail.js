import { useRoute } from "@react-navigation/native";
import { View, Image } from "react-native";
import { Constants } from "../../../../../constants/db.mock";

import { Text } from "../../../../components/Layout";
import { DetailOrderNumber, LocationText } from "./styles";

export default ({
  isPickupSingle,
  isDropSingle,
  orderNumber,
  address,
  pickupAddress,
  dropAddress,
}) => {
  const { params } = useRoute();
  const isSingle = params.singleDropOff || params.singlePickup;
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
      {!isPickupSingle && (
        <View>
          <Text
            style={{
              color: Constants.theme.primary,
            }}
          >
            {params.isInternationalActive ? "Tracking ID" : "PickUp Location"}
          </Text>
          <LocationText>{isSingle ? address : pickupAddress}</LocationText>
        </View>
      )}

      {!isDropSingle && (
        <View>
          <Text
            style={{
              color: Constants.theme.primary,
            }}
          >
            Drop-Off Location
          </Text>
          <LocationText>{isSingle ? address : dropAddress}</LocationText>
        </View>
      )}
    </View>
  );
};
