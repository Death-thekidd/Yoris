import { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { List } from "react-native-paper";
import { Section, Text } from "../../../../../components/Layout";
import { PressableSection } from "../../../../../components/Layout/styles";
import { Row } from "../../../../logictics/components/VehicleType/styles";
import RejectReason from "../../../components/RejectReason";
import { Detail, Title } from "./Express/style";

const Details = () => {
  return (
    <>
      <Section>
        <Title style={{ color: "#fff" }}>Pick-up Details:</Title>

        <Detail>Street name, bus-stop, local govt area.</Detail>

        <Detail>Phone Number</Detail>
        <Title style={{ color: "#fff" }}>Delivery Details:</Title>

        <Detail>Street name, bus-stop, local govt area.</Detail>

        <Detail>Phone Number: </Detail>
        <Detail>Delivery fee: N0.00 </Detail>
        <Detail>Commission fee: N0.00 </Detail>

        <Row>
          <Pressable
            onPress={() => navigate("orderAccepted", { delivered: true })}
            style={{
              borderRadius: 50,
              backgroundColor: "#C3AD60",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
              marginTop: 10,
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: "#000",
                fontWeight: "500",
              }}
            >
              Picked up
            </Text>
          </Pressable>
          <RejectReason />
        </Row>
      </Section>
    </>
  );
};

export const UserAccordion = ({ BottomComponent, details = false }) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = details ? () => setExpanded(!expanded) : null;
  return (
    <PressableSection
      onPress={handlePress}
      style={{ flexDirection: "row", justifyContent: "space-evenly" }}
    >
      <Image
        style={{
          width: 64,
          height: 64,
          // marginRight: 500,
        }}
        source={require("../../../../../../assets/profile.png")}
      />
      <View style={{}}>
        <Text
          style={{
            color: "#C3AD60",
            fontSize: 20,
          }}
        >
          User 4 ordered XXXXXX
        </Text>
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            8/3/2022
          </Text>
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            N0.00
          </Text>
          <Text
            style={{
              color: "#C4C4C4",
              marginRight: 10,
            }}
          >
            0.7km Away
          </Text>
        </Row>
        {!expanded && <>{BottomComponent && <BottomComponent />}</>}

        {details && expanded && <Details />}
      </View>
    </PressableSection>
  );
};
