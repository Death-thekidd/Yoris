import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import {
  FirstView6,
  BigText5,
  SecondView6,
  ProductImage,
  PayText,
  Smalltxt,
  Bigtxt,
  SugoiDekaitxt,
  Txt,
} from "../componenets/fintech6Style";
import { ww, hh, wp } from "../../../responsive";

import { PhotoView, Quantity, QtyText } from "../componenets/fintech4Style";
export default function Pending({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [routee, setRoute] = useState(route.params.paramKey);

  return (
    <SafeAreaView style={styles.fintech6container}>
      <ScrollView>
        <FirstView6>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: ww(54) }}
          >
            <Icon size={20} color="#C3AD60" name="back" />
          </TouchableOpacity>
          <BigText5>Pending Orders</BigText5>
          <TouchableOpacity
            onPress={() => navigation.navigate("Procurement10")}
            style={{ paddingLeft: ww(81) }}
          >
            <Icon2 size={20} color="#C3AD60" name="history" />
          </TouchableOpacity>
        </FirstView6>
        <SecondView6>
          <View style={styles.photoview}>
            <Image
              source={require("../../../assets/camera.png")}
              style={styles.image}
            />
            <Quantity>
              <QtyText>Qty: 1</QtyText>
              <Icon name="caretdown" size={6} color="#fff" />
            </Quantity>
            <View style={styles.linkView}>
              <Text style={styles.link}>{routee}</Text>
            </View>
          </View>
          <View style={styles.photoview}>
            <Image
              source={require("../../../assets/soap.png")}
              style={styles.image}
            />
            <Quantity>
              <QtyText>Qty: 1</QtyText>
              <Icon name="caretdown" size={6} color="#fff" />
            </Quantity>
          </View>
          <View style={styles.photoview}>
            <Image
              source={require("../../../assets/pro.png")}
              style={styles.image}
            />
            <Quantity>
              <QtyText>Qty: 1</QtyText>
              <Icon name="caretdown" size={6} color="#fff" />
            </Quantity>
          </View>
          <View style={styles.photoview}>
            <Image
              source={require("../../../assets/shoe.png")}
              style={styles.image}
            />
            <Quantity>
              <QtyText>Qty: 1</QtyText>
              <Icon name="caretdown" size={6} color="#fff" />
            </Quantity>
          </View>
          {/* <TouchableOpacity style={styles.paybtn}>
                    <PayText>Pay All</PayText>
                </TouchableOpacity> */}
        </SecondView6>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fintech6container: {
    backgroundColor: "#000",
    paddingTop: 20,
    flex: 1,
  },
  back4: {
    padding: 10,
  },
  pad5: {
    paddingLeft: 30,
  },
  pad: {
    paddingLeft: 50,
    paddingRight: 60,
  },
  linkView: {
    height: ww(54),
    width: ww(340),
    backgroundColor: "#4E4E4E",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingLeft: 25,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 25,
    position: "absolute",
    top: ww(87),
  },
  link: {
    color: "#fff",
  },
  photoview: {
    marginTop: ww(32),
    height: ww(128),
    position: "relative",
  },

  back3: {
    padding: 10,
  },
  pad4: {
    paddingLeft: 40,
  },
  mar: {
    marginTop: 55,
  },
  white1: {
    alignItems: "center",
    marginTop: 55,
    position: "relative",
  },
  white2: {
    marginTop: 56,
    paddingLeft: 75,
  },
  white3: {
    marginTop: 64,
    paddingLeft: 75,
    flexDirection: "row",
  },
  txt: {
    width: 283,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#C3AD60",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
  },
  image: {
    width: ww(340),
    height: ww(128),
    borderRadius: 15,
  },
});
