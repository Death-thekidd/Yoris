import { View, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import { useState } from "react";
import Header from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { Constants } from "../../../../constants/db.mock";

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
export default function () {
  const [value, setValue] = useState();
  const { goBack, navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 25,
        backgroundColor: Constants.theme.dark,
      }}
    >
      {/* Header */}

      <Header
        iconLeft={require("../../../../assets/cancelGold.png")}
        headerTitle={"Choose Payment Method"}
        onLeftIconPress={() => goBack()}
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
                <Text
                  style={{
                    fontSize: 18.5,
                    marginLeft: 25,
                    color: Constants.theme.dark,
                  }}
                >
                  {text}
                </Text>
              )}
            </View>
            <RadioButton.Item value={value} />
          </View>
        ))}
      </RadioButton.Group>
      {/* Continue Button */}

      <Button
        style={{ marginVertical: 24 }}
        onPress={() => navigate("paymentScreen")}
      >
        <Text style={{ fontSize: 24, color: "#fff" }}>Continue</Text>
      </Button>
    </View>
  );
}
