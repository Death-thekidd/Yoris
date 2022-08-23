import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import Header from "../../../components/Header";
import { Section } from "../../payment/screens/style";
import { FontAwesome } from "../../../components/Icons";
import { ListAccordion } from "../../../components/ListAccordion";
import { LayoutScrollView } from "../../../components/Layout";
import { Constants } from "../../../../constants/db.mock";

export default function () {
  const { goBack } = useNavigation();
  const [history, setHistory] = useState([{}]);
  const theme = Constants.theme;

  return (
    <LayoutScrollView style={{ paddingHorizontal: 23 }}>
      {/* Header */}
      <Header
        headerTitle={"Order History & Tracking"}
        headerTitleStyle={{
          color: theme.primary,
        }}
        iconLeft={require("../../../../assets/backIcon.png")}
        onLeftIconPress={() => goBack()}
      />

      <Section>
        {history.map((order) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: theme.primary,
              borderRadius: 7,
              marginVertical: 15,
            }}
          >
            <ListAccordion />
            {/* Pass order number and tracking number and dob */}
          </View>
        ))}
      </Section>
    </LayoutScrollView>
  );
}
