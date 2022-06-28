import { useState } from "react";
import { FlatList, Pressable, View } from "react-native";
import { UserAccordion } from "..";
import FlatlistSeperator from "../../../../../../components/FlatlistSeperator";
import { Layout, Text } from "../../../../../../components/Layout";

export default () => {
  const [newOrders, setNewOrders] = useState([{}, {}, {}, {}, {}, {}]);
  return (
    <Layout>
      <FlatList
        data={newOrders}
        ItemSeparatorComponent={FlatlistSeperator}
        renderItem={() => (
          <UserAccordion
            BottomComponent={() => (
              <Pressable
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
                  Droped Off
                </Text>
              </Pressable>
            )}
          />
        )}
      />
    </Layout>
  );
};
