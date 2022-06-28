import { useState } from "react";
import { FlatList, Image, Pressable, View } from "react-native";
import { UserAccordion } from "..";
import { Layout, Section, Text } from "../../../../../../components/Layout";
import { Row } from "../../../../../logictics/components/VehicleType/styles";
import { NewOrderActions } from "./style";

export default () => {
  const [newOrders, setNewOrders] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <Layout>
      <FlatList
        data={newOrders}
        renderItem={() => (
          <UserAccordion
            BottomComponent={() => ( 
              <Row
                style={{
                  marginVertical: 20,
                }}
              >
                <Pressable onPress={() => console.log("Reject Order")}>
                  <Image
                    source={require("../../../../../../../assets/cancelOrder.png")}
                  />
                </Pressable>
                <Pressable onPress={() => console.log("Accept Order")}>
                  <Image
                    source={require("../../../../../../../assets/acceptOrder.png")}
                  />
                </Pressable>
              </Row>
            )}
          />
        )}
        ListFooterComponent={() => (
          <Row
            style={{
              marginVertical: 20,
              justifyContent: "space-between",
            }}
          >
            <NewOrderActions
              style={{
                borderColor: "red",
              }}
              onPress={() => console.log("first")}
            >
              <Text style={{ fontSize: 20 }}>Reject All</Text>
            </NewOrderActions>
            <NewOrderActions
              style={{
                borderColor: "green",
              }}
              onPress={() => console.log("first")}
            >
              <Text style={{ fontSize: 20 }}>Accept All</Text>
            </NewOrderActions>
          </Row>
        )}
        ListFooterComponentStyle={{
          paddingHorizontal: 35,
        }}
      />
    </Layout>
  );
};
