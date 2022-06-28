import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { UserAccordion } from "..";
import FlatlistSeperator from "../../../../../../components/FlatlistSeperator";
import { Layout, Section, Text } from "../../../../../../components/Layout";
import { Row } from "../../../../../logictics/components/VehicleType/styles";
import { Detail, Title } from "../Express/style";

export default () => {
  const [newOrders, setNewOrders] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <Layout>
      <FlatList
        data={newOrders}
        ItemSeparatorComponent={FlatlistSeperator}
        renderItem={() => (
          <UserAccordion
            details={true}
            BottomComponent={() => (
              <Pressable
                onPress={() => setShowDetails(true)}
                style={{
                  borderRadius: 50,
                  backgroundColor: "#C4C4C4",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 15,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: "#000",
                  }}
                >
                  Delivered
                </Text>
              </Pressable>
            )}
          />
        )}
      />
    </Layout>
  );
};
