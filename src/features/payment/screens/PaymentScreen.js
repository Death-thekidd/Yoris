import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { Button } from "../../../components/Button";
import Input from "../../../components/input";
import { Text } from "../../../components/Layout";
import {
  CardDateContainer,
  CardDateDevider,
  CardInfoContainer,
  PaymentContainer,
  Section,
  SubTitle,
  Title,
} from "./style";

const saved_cards = [
  {
    source: require("../../../../assets/mastercardLogo1.png"),
  },
  {
    source: require("../../../../assets/visaLogo1.png"),
  },
  {
    source: require("../../../../assets/visaLogo1.png"),
  },
];
export default function PaymentScreen({ navigation }) {
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvvNumber, setCardCvvNumber] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const { navigate } = useNavigation();
  return (
    <PaymentContainer>
      {/* Back Icon */}

      <Section>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={require("../../../../assets/backIcon.png")} />
        </Pressable>
      </Section>

      {/* SavedCards */}
      <Section>
        <Text style={styles.title}>Saved Cards</Text>
        <FlatList
          data={saved_cards}
          alwaysBounceHorizontal
          renderItem={({ item, i }) => (
            <Image style={{ marginHorizontal: 10 }} source={item.source} />
          )}
          horizontal
        />
      </Section>

      {/* New card details */}
      <Section>
        <Title>New Card Details</Title>
        <Input
          placeholder={"Card Number"}
          value={cardNumber}
          setValue={setCardNumber}
          style={styles.input}
          keyboardType={"number-pad"}
          placeholderTextColor={"#fff"}
        />
        <SubTitle>Expiration Date</SubTitle>

        <CardInfoContainer>
          {/* Month and Year */}
          <CardDateContainer>
            <Input
              placeholder={"Month"}
              value={cardMonth}
              setValue={setCardMonth}
              style={[styles.input, styles.cardDate]}
              keyboardType={"number-pad"}
              placeholderTextColor={"#fff"}
              maxLength={2}
            />
            <CardDateDevider>/</CardDateDevider>
            <Input
              placeholder={"Year"}
              value={cardYear}
              setValue={setCardYear}
              style={[styles.input, styles.cardDate]}
              keyboardType={"number-pad"}
              placeholderTextColor={"#fff"}
              maxLength={4}
            />
          </CardDateContainer>
          {/* CVV */}
          <Input
            placeholder={"cvv"}
            value={cardCvvNumber}
            setValue={setCardCvvNumber}
            style={[styles.input, styles.cvv]}
            keyboardType={"number-pad"}
            placeholderTextColor={"#fff"}
            maxLength={4}
          />
        </CardInfoContainer>
      </Section>

      <Button onPress={() => navigate("confirmPayment")}>
        <Text style={{ fontSize: 24, color: "#fff" }}>Continue</Text>
      </Button>
    </PaymentContainer>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  input: {
    backgroundColor: "#4E4E4E",
    padding: 15,
    borderRadius: 7,
    color: "#fff",
  },
  cvv: {
    width: "30%",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  spaceEvenly: {
    justifyContent: "space-between",
  },
  title: {},
  subTitle: {
    color: "#fff",
    marginVertical: 30,
    fontSize: 15,
  },
  cardDate: {
    width: "40%",
  },
});
