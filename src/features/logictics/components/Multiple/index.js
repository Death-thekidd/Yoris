import { useNavigation } from "@react-navigation/native";
import { Text } from "../../../../components/Layout";
import { StyledMultiButton, Constainer } from "./styles";

export default () => {
  const navigation = useNavigation();
  const buttons = [
    {
      navigateToScreen: "pickUp",
      textRight: "Single Pickup",
      textLeft: "Multiple DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
    {
      navigateToScreen: "screenName",
      textRight: "Multiple Pickup",
      textLeft: "Multiple DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
    {
      navigateToScreen: "screenName",
      textRight: "Single Pickup",
      textLeft: "Multiple DropOff",
      textStyle: {
        fontSize: 18,
        color: "#000",
      },
    },
  ];
  return (
    <Constainer>
      {buttons.map(({ textLeft, textRight, textStyle, navigateToScreen }) => (
        <StyledMultiButton
          onPress={() => navigation.navigate(String(navigateToScreen))}
        >
          <Text style={[textStyle]}>{textRight}</Text>
          <Text style={[textStyle]}>{textLeft}</Text>
        </StyledMultiButton>
      ))}
    </Constainer>
  );
};
