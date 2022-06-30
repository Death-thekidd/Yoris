import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, View, StyleSheet, FlatList } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import { Layout, Section, Text } from "../../../../components/Layout";
import Header from "../Profile/components/Header";

export default () => {
  const { navigate } = useNavigation();
  const [wallets, setWallets] = useState([{}, {}, {}]);

  return (
    <Layout>
      <Section>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 96,
              height: 96,
            }}
            source={require("../../../../../assets/profile.png")}
          />
          <View>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "700",
              }}
            >
              Rider's Name
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginVertical: 5,

                color: Constants.theme.gray,
              }}
            >
              08182897492
            </Text>
            <Text
              style={{
                color: Constants.theme.gray,
                textTransform: "uppercase",
              }}
            >
              plt3 nm3r
            </Text>
          </View>
        </View>
      </Section>

      <Section>
        <View
          style={{
            paddingHorizontal: 65,
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 12 }}>Total Commission:</Text>
          <Text style={{ fontSize: 30 }}>N100,000.00</Text>
        </View>

        <Pressable
          onPress={() => setModalVisible(true)}
          style={[
            {
              borderRadius: 50,
              borderWidth: 1,
              backgroundColor: Constants.theme.primary,
              justifyContent: "space-between",
              paddingHorizontal: 15,
              alignItems: "center",
              height: 48,

              width: "75%",
              marginTop: 10,
              alignSelf: "center",
              flexDirection: "row",
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              color: Constants.theme.dark,
            }}
          />
          <Text
            style={{
              fontWeight: "500",
              color: Constants.theme.dark,
            }}
          >
            Withdraw
          </Text>
          <Image source={require("../../../../../assets/arrowBlack.png")} />
        </Pressable>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={[
            {
              paddingHorizontal: 15,

              borderRadius: 50,
              borderWidth: 1,
              borderColor: Constants.theme.primary,
              justifyContent: "space-between",
              alignItems: "center",
              height: 48,

              width: "75%",
              marginTop: 10,
              alignSelf: "center",
              flexDirection: "row",
              marginBottom: 50,
            },
          ]}
        >
          <Text
            style={{
              fontWeight: "500",
              color: Constants.theme.dark,
            }}
          />
          <Text
            style={{
              fontWeight: "500",
              color: Constants.theme.primary,
            }}
          >
            Send
          </Text>
          <Image source={require("../../../../../assets/arrowGold.png")} />
        </Pressable>

        <FlatList
          data={wallets}
          ItemSeparatorComponent={() => (
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: Constants.theme.gray,
                marginVertical: 20,
              }}
            />
          )}
          renderItem={() => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <View>
                <Text style={[styles.white, styles.orderNumber]}>
                  #oRDerNuMbeR
                </Text>
                <Text style={[styles.white, styles.trackingNumber]}>
                  #tRaCkiNgnUMbEr
                </Text>
                <Text style={[styles.white, styles.date]}>DD/MM/YYYY</Text>
              </View>
              <Text style={{ color: "#1DB704" }}>100$</Text>
            </View>
          )}
        />
      </Section>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  white: {
    color: "#fff",
  },
  orderNumber: {
    fontWeight: "500",
    color: Platform.OS !== "ios" && "grey",
  },
  trackingNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  date: {
    fontWeight: Platform.OS === "ios" ? "100" : "normal",
    color: Platform.OS !== "ios" && "grey",
  },
  listIcon: {
    width: 50,
    resizeMode: "contain",
  },
  infoText: {
    fontWeight: "200",
    fontSize: 13,
    color: "grey",
  },
});
