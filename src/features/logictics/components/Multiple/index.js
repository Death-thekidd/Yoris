import { useNavigation } from "@react-navigation/native";
import { Text } from "../../../../components/Layout";
import { StyledMultiButton, Constainer } from "./styles";

export default () => {
  const navigation = useNavigation();
  const buttons = [
    {
      routeParams: {
        singlePickup: true,
        singleDropOff: false,
        multiPickup: false,
        multiDropOff: true,
      },
      textRight: "Single Pickup",
      textLeft: "Multiple DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
    {
      routeParams: {
        singlePickup: false,
        singleDropOff: false,
        multiPickup: true,
        multiDropOff: true,
      },
      textRight: "Multiple Pickup",
      textLeft: "Multiple DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
    {
      routeParams: {
        singlePickup: false,
        singleDropOff: true,
        multiPickup: true,
        multiDropOff: false,
      },
      textRight: "Multiple Pickup",
      textLeft: "Single DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
  ];
  return (
    <Constainer>
      {buttons.map(({ textLeft, textRight, textStyle, routeParams }) => (
        <StyledMultiButton
          onPress={() => navigation.navigate("pickUp", routeParams)}
        >
          <Text style={[textStyle]}>{textRight}</Text>
          <Text style={[textStyle]}>{textLeft}</Text>
        </StyledMultiButton>
      ))}
    </Constainer>
  );
};
