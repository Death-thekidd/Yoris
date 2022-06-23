import { View, Image, Text, Pressable } from "react-native";
import { FontAwesome } from "../../../components/Icons";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  ContinueButton,
  ContinueView,
  ContinuewButtonText,
} from "../../logictics/components/logictics.styles";
import { Section } from "./style";
import Header from "../../../components/Header";

const methods = [
  {
    imageSource: require("../../../../assets/CardOption.png"),
    text: "Credit/Debit Card",
    value: "card",
  },
  {
    imageSource: require("../../../../assets/Qrcode.png"),
    text: "Qr Code",
    value: "code",
  },
  {
    imageSource: require("../../../../assets/Paypal.png"),
    value: "paypal",
  },
];
export default function ({ navigation }) {
  const [value, setValue] = useState();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: "#000",
      }}
    >
      {/* Header */}

      <Header
        iconLeft={require("../../../../assets/cancelGold.png")}
        headerTitle={"Choose Payment Method"}
        onLeftIconPress={() => navigation.goBack()}
      />

      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        {/* Options List */}
        {methods.map(({ imageSource, text, value }, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              marginVertical: 20,
              borderRadius: 5,
              alignItems: "center",
              paddingHorizontal: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                // justifyContent: "space-between",
              }}
            >
              <Image style={{ resizeMode: "contain" }} source={imageSource} />
              {text && (
                <Text style={{ fontSize: 18.5, marginLeft: 25 }}>{text}</Text>
              )}
            </View>
            <RadioButton.Item value={value} />
          </View>
        ))}
      </RadioButton.Group>
      {/* Continue Button */}

      <Spacer size="xxl">
        <ContinueView>
          <ContinueButton
            onPress={() => navigation.navigate("logisticsBooking")}
          >
            <ContinuewButtonText> continue</ContinuewButtonText>
          </ContinueButton>
        </ContinueView>
      </Spacer>
    </View>
  );
}
