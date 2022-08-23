import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import Back from "react-native-vector-icons/AntDesign";
import {
  TopView,
  HeadText,
  SecondView,
  Contactstxt,
  Vendorstxt,
} from "../components/chatStyles";
import Contacts from "../components/Contacts";
import Vendors from "../components/Vendors";
import { ww, hh, wp } from "../components/Vendors";

export default function ChatScreen() {
  const [isVendors, setIsVendors] = useState(false);
  return (
    <SafeAreaView style={styles.chatContainer}>
      <ScrollView>
        <TopView>
          <Pressable style={styles.back2} onPress={() => navigation.goBack()}>
            <Back
              size={ww(30)}
              color="#C3AD60"
              name="back"
              style={styles.pad}
            />
          </Pressable>
          <HeadText>Chats</HeadText>
        </TopView>
        <View
          style={[
            styles.row,
            {
              paddingTop: ww(60),
              marginBottom: ww(20),
            },
          ]}
        >
          <Pressable
            style={[styles.padding, { borderBottomWidth: isVendors ? 0 : 4 }]}
            onPress={() => setIsVendors(false)}
          >
            <Text
              style={[styles.text, { fontWeight: isVendors ? "300" : "900" }]}
            >
              Contacts
            </Text>
          </Pressable>
          <Pressable
            style={[styles.padding, { borderBottomWidth: !isVendors ? 0 : 4 }]}
            onPress={() => setIsVendors(true)}
          >
            <Text
              style={[styles.text, { fontWeight: !isVendors ? "300" : "900" }]}
            >
              Vendors
            </Text>
          </Pressable>
        </View>
        <SecondView>{!isVendors ? <Contacts /> : <Vendors />}</SecondView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: "#000",
    paddingTop: ww(25),
    flex: 1,
    position: "relative",
  },
  row: {
    flexDirection: "row",
  },
  screenToggleBtn: {
    fontSize: ww(16),
    fontWeight: 300,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: ww(15),
    color: "#c3ad60",
  },
  padding: {
    width: `50%`,
    alignItems: "center",
    paddingTop: ww(8),
    paddingBottom: ww(8),
    borderColor: "#c3ad60",
  },
  pad: {
    paddingLeft: ww(34),
  },
});
