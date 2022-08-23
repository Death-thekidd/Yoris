import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";
import { Layout, Section, Text } from "../../../../../../components/Layout";
import { Row } from "../../../../../logictics/components/VehicleType/styles";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Detail } from "./style";
import { useNavigation } from "@react-navigation/native";
import RejectReason from "../../../../components/RejectReason";
import { Constants } from "../../../../../../../constants/db.mock";

export default () => {
  const [order, setOrder] = useState({});
  const [packageState, setPackageState] = useState({
    pickedUp: false,
    delivered: false,
  });
  const { navigate } = useNavigation();
  return (
    <Layout>
      <LinearGradient
        // Button Linear Gradient
        colors={["rgba(154, 131, 64, 1)", "transparent"]}
      >
        <Section
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <Image
            style={{
              width: 64,
              height: 64,
            }}
            source={require("../../../../../../../assets/profile.png")}
          />
          <View>
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
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
          </View>
        </Section>
      </LinearGradient>
      <Section
        style={{
          paddingHorizontal: 50,
        }}
      >
        <Title>Pick-up Details:</Title>

        <Detail>Street name, bus-stop, local govt area.</Detail>

        <Detail>Phone Number</Detail>
      </Section>
      <Section
        style={{
          paddingHorizontal: 50,
        }}
      >
        <Title>Delivery Details:</Title>

        <Detail>Street name, bus-stop, local govt area.</Detail>

        <Detail>Phone Number: </Detail>
        <Detail>Delivery fee: N0.00 </Detail>
        <Detail>Commission fee: N0.00 </Detail>
      </Section>

      {!packageState.pickedUp ? (
        <Pressable
          onPress={() => setPackageState({ pickedUp: true })}
          style={{
            borderRadius: 50,
            backgroundColor: Constants.theme.primary,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
            marginTop: 10,
            width: "50%",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: Constants.theme.dark,
              fontWeight: "500",
            }}
          >
            Picked Up
          </Text>
        </Pressable>
      ) : (
        <>
          <Pressable
            onPress={() => navigate("orderAccepted", { delivered: true })}
            style={{
              borderRadius: 50,
              backgroundColor: Constants.theme.primary,
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 15,
              marginTop: 10,
              width: "50%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{
                color: Constants.theme.dark,
                fontWeight: "500",
              }}
            >
              Delivered
            </Text>
          </Pressable>
          <RejectReason
            buttonStyle={{
              paddingVertical: 15,
              marginTop: 10,
              width: "50%",
              alignSelf: "center",
            }}
          />
        </>
      )}
    </Layout>
  );
};
