import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Constants } from "../../../../../constants/db.mock";
import { Button } from "../../../../components/Button";
import { Section, Text } from "../../../../components/Layout";
import LogisticsButtonTabGroup from "../LogisticsButtonTabGroup";
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
        color: Constants.theme.dark,
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
        color: Constants.theme.dark,
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
        color: Constants.theme.dark,
      },
    },
  ];
  const international_buttons = [
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
        color: Constants.theme.dark,
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
        color: Constants.theme.dark,
      },
    },
  ];

  const [{ isInternationalActive, isLocalActive }, setIsActive] = useState({
    isLocalActive: true,
    isInternationalActive: false,
  });

  const setActiveTab = (tab) => {
    switch (tab) {
      case "local":
        setIsActive((prevState) => ({
          ...prevState,
          isLocalActive: true,
          isInternationalActive: false,
        }));

        break;
      case "international":
        setIsActive((prevState) => ({
          ...prevState,
          isLocalActive: false,
          isInternationalActive: true,
        }));
        break;
    }
  };

  return (
    <Constainer>
      <LogisticsButtonTabGroup
        style={{
          height: 48,
          borderRadius: 50,
          overflow: "hidden",
          backgroundColor: "transparent",
          borderColor: Constants.theme.gray,
        }}
        buttonStyle={{
          borderRadius: 50,
          paddingVertical: 10,
        }}
        buttonActiveColor={Constants.theme.gray}
        buttonTextInactiveColor={Constants.theme.gray}
        data={[
          {
            isActive: isLocalActive,
            text: "Local",
            onPress: () => setActiveTab("local"),
          },
          {
            isActive: isInternationalActive,
            text: "International",
            onPress: () => setActiveTab("international"),
          },
        ]}
      />

      {isLocalActive
        ? buttons.map(({ textLeft, textRight, textStyle, routeParams }, i) => (
            <StyledMultiButton
              key={i}
              onPress={() =>
                navigation.navigate("pickUp", {
                  ...routeParams,
                  isInternationalActive,
                  isLocalActive,
                })
              }
            >
              <Text style={[textStyle]}>{textRight}</Text>
              <Text style={[textStyle]}>{textLeft}</Text>
            </StyledMultiButton>
          ))
        : isInternationalActive &&
          international_buttons.map(
            ({ textLeft, textRight, textStyle, routeParams }, i) => (
              <StyledMultiButton
                key={i}
                onPress={() =>
                  navigation.navigate("pickUp", {
                    ...routeParams,
                    isInternationalActive,
                    isLocalActive,
                  })
                }
              >
                <Text style={[textStyle]}>{textRight}</Text>
                <Text style={[textStyle]}>{textLeft}</Text>
              </StyledMultiButton>
            )
          )}
    </Constainer>
  );
};
