import { Image, View } from "react-native";
import {
  StyledMultiItemView,
  Address,
  MultiTitle,
  BottomInfo,
  ContentsView,
} from "./style";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { memo, useEffect, useState } from "react";
import { FontAwesome } from "../../../../components/Icons";

export default memo(
  ({
    title = "add title",
    titleStyle,
    address = "add address",
    addressStyle,
    bottomComp,
    containerStyle,
    isMultiple,
    dropOffAddress,
    onItemPress,
  }) => {
    const [showDropOffInfo, setShowDropOffInfo] = useState(false);

    return (
      <Animated.View entering={FadeInUp}>
        <StyledMultiItemView
          style={containerStyle}
          onPress={
            isMultiple
              ? () => setShowDropOffInfo(!showDropOffInfo)
              : onItemPress
              ? onItemPress
              : null
          }
        >
          <ContentsView>
            <MultiTitle style={titleStyle}>{title}</MultiTitle>
            <Address style={addressStyle}>{address}</Address>
            <BottomInfo>{bottomComp}</BottomInfo>
          </ContentsView>
          <Image source={require("../../../../../assets/foodBlack.png")} />
        </StyledMultiItemView>
        {isMultiple && showDropOffInfo && (
          <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
            <StyledMultiItemView
              onPress={() => onItemPress()}
              style={[
                {
                  marginTop: 10,
                },
                containerStyle,
              ]}
            >
              <ContentsView>
                <MultiTitle style={titleStyle}>Drop-Off Location</MultiTitle>
                <Address style={addressStyle}>{dropOffAddress}</Address>
              </ContentsView>
              <FontAwesome name={"edit"} size={30} />
              {/* Item category image */}
            </StyledMultiItemView>
          </Animated.View>
        )}
      </Animated.View>
    );
  }
);
