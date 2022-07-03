import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, View, StyleSheet, FlatList } from "react-native";
import { Constants } from "../../../../../constants/db.mock";
import {
  Layout,
  LayoutScrollView,
  Section,
  Text,
} from "../../../../components/Layout";
import Header from "../Profile/components/Header";
import { WalletActionBtn } from "./styles";

export default () => {
  const { navigate } = useNavigation();
  const [wallets, setWallets] = useState([{}, {}, {}, {}, {}, {}]);

  return (
    <LayoutScrollView>
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

        <WalletActionBtn
          onPress={() => console.log(true)}
          style={[
            {
              backgroundColor: Constants.theme.primary,
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
        </WalletActionBtn>
        <WalletActionBtn
          onPress={() => console.log("Send")}
          style={[
            {
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
        </WalletActionBtn>

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
    </LayoutScrollView>
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
