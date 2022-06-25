import { Image, View } from "react-native";
import { Text } from "../../../../components/Layout";
import {
  StyledMultiItemView,
  Address,
  MultiTitle,
  BottomInfo,
  ContentsView,
} from "./style";

export default ({
  title = "add title",
  titleStyle,
  address = "add address",
  addressStyle,
  bottomComp,
  containerStyle,
}) => {
  return (
    <StyledMultiItemView style={containerStyle}>
      <ContentsView>
        <MultiTitle style={titleStyle}>{title}</MultiTitle>
        <Address style={addressStyle}>{address}</Address>
        <BottomInfo>{bottomComp}</BottomInfo>
      </ContentsView>
      <Image source={require("../../../../../assets/foodBlack.png")} />
    </StyledMultiItemView>
  );
};
