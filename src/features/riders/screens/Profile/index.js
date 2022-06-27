import { Image, View } from "react-native";
import { FontAwesome } from "../../../../components/Icons";
import {
  Layout,
  LayoutScrollView,
  Section,
  Text,
} from "../../../../components/Layout";
import { ListAccordion } from "../../../../components/ListAccordion";
import { Row } from "../../../logictics/components/VehicleType/styles";
import Header from "./components/Header";
export default () => {
  return (
    <LayoutScrollView
      style={{
        paddingHorizontal: 25,
      }}
    >
      {/* Profile Image */}
      <Section
        style={{
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: 128,
            height: 128,
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 100,
            marginBottom: 20,
            resizeMode: "contain",
          }}
          source={require("../../../../../assets/profile.png")}
        />
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Rider’s name
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
        >
          Plate Number
        </Text>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          08182897492
        </Text>
      </Section>

      <Section>
        <Row
          style={{
            width: 140,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              marginRight: 20,
            }}
          >
            Rating:
          </Text>
          <FontAwesome name="star" color={"#C3AD60"} size={20} />
          <FontAwesome name="star" color={"#C3AD60"} size={20} />
          <FontAwesome name="star" color={"#C3AD60"} size={20} />
          <FontAwesome name="star" color={"#C3AD60"} size={20} />
          <FontAwesome name="star" color={"#C3AD60"} size={20} />
        </Row>
      </Section>
      <Section>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            color: "#C3AD60",
          }}
        >
          Delivery History
        </Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#C3AD60",
            borderRadius: 7,
            marginVertical: 15,
          }}
        >
          <ListAccordion />
          {/* Pass order number and tracking number and dob */}
        </View>
      </Section>
    </LayoutScrollView>
  );
};
