import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import {
  LastView,
  PriceColumn,
  Total,
  Pricing,
  Paytxt,
  Second,
  SelectTxt,
  Radiobtn,
  Quantity1,
  Third,
  Bold,
  Radiobtn2,
} from "../componenets/fintech10Style";
import { BigText5, FirstView6, Smalltxt } from "../componenets/fintech6Style";
import { QtyText } from "../componenets/fintech4Style";

import { QtyText1 } from "../componenets/fintech5Style";
import { ww, hh, wp } from "../../../responsive";

export default function Notifications({ navigation, route }) {
  const [routee, setRoute] = useState(route.params.paramKey);
  const [all, setAll] = useState(false);
  const [select, setSelect] = useState(false);
  const [select2, setSelect2] = useState(false);
  return (
    <SafeAreaView style={styles.notificationsContainer}>
      <ScrollView>
        <FirstView6>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: ww(54) }}
          >
            <Icon size={20} color="#C3AD60" name="back" />
          </TouchableOpacity>
          <BigText5>Notifications</BigText5>
          <TouchableOpacity
            onPress={() => navigation.navigate("Procurement10")}
            style={{ paddingLeft: ww(878) }}
          >
            <Icon2 size={20} color="#C3AD60" name="history" />
          </TouchableOpacity>
        </FirstView6>

        <Second>
          <SelectTxt>Select All</SelectTxt>
          {all ? (
            <TouchableOpacity
              onPress={() => {
                setAll(!all);
                if (all == true) {
                  setSelect(false);
                  setSelect2(false);
                } else {
                  setSelect(true);
                  setSelect2(true);
                }
              }}
            >
              <Radiobtn></Radiobtn>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setAll(!all);
                if (all == true) {
                  setSelect(false);
                  setSelect2(false);
                } else {
                  setSelect(true);
                  setSelect2(true);
                }
              }}
            >
              <Radiobtn2></Radiobtn2>
            </TouchableOpacity>
          )}
        </Second>
        <Third>
          <View style={styles.photoview}>
            <Image
              style={styles.image}
              source={require("../../../assets/pro.png")}
            />
            <View style={styles.position}>
              <Quantity1>
                <QtyText1>Qty: 1</QtyText1>
                <Icon name="caretdown" size={6} color="#fff" />
              </Quantity1>
            </View>
            <View style={styles.roundView}>
              <Icon3 name="trash-o" size={20} color="#fff" />
            </View>

            <View style={styles.linkView}>
              <Text style={styles.link}>{routee}</Text>
              {select ? (
                <TouchableOpacity onPress={() => setSelect(!select)}>
                  <Radiobtn></Radiobtn>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setSelect(!select)}>
                  <Radiobtn2></Radiobtn2>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.white2}>
            <Smalltxt>
              Procurement Fee: <Bold>10%</Bold>
            </Smalltxt>
            <Smalltxt>
              Product Price: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              Shipping Fee/Kg: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              Import Duty/Kg: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              VAT: <Bold>7.5%</Bold>
            </Smalltxt>
          </View>

          <View style={styles.photoview}>
            <Image
              style={styles.image}
              source={require("../../../assets/soap.png")}
            />
            <View style={styles.position}>
              <Quantity1>
                <QtyText>Qty: 1</QtyText>
                <Icon name="caretdown" size={6} color="#fff" />
              </Quantity1>
            </View>
            <View style={styles.roundView}>
              <Icon3 name="trash-o" size={20} color="#fff" />
            </View>
            <View style={styles.php}>
              {select2 ? (
                <TouchableOpacity onPress={() => setSelect2(!select2)}>
                  <Radiobtn></Radiobtn>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setSelect2(!select2)}>
                  <Radiobtn2></Radiobtn2>
                </TouchableOpacity>
              )}
            </View>
          </View>
          <View style={styles.white2}>
            <Smalltxt>
              Procurement Fee: <Bold>10%</Bold>
            </Smalltxt>
            <Smalltxt>
              Product Price: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              Shipping Fee/Kg: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              Import Duty/Kg: <Bold>N0.00</Bold>
            </Smalltxt>
            <Smalltxt>
              VAT: <Bold>7.5%</Bold>
            </Smalltxt>
          </View>
        </Third>
        <View style={styles.whitespace}></View>
      </ScrollView>
      <View style={styles.dwn}>
        <LastView>
          <PriceColumn>
            <Total>Total:</Total>
            <Pricing>N0.00</Pricing>
          </PriceColumn>
          <TouchableOpacity style={styles.pay}>
            <Paytxt>Pay</Paytxt>
          </TouchableOpacity>
        </LastView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notificationsContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  defaulttext: {
    color: "#fff",
  },
  pad: {
    paddingLeft: 30,
  },
  padd: {
    paddingLeft: 80,
    paddingRight: 80,
  },
  pay: {
    width: 180,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
  },
  linkView: {
    height: ww(64),
    width: ww(340),
    backgroundColor: "#4E4E4E",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingLeft: ww(25),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: ww(25),
    position: "absolute",
    top: ww(116),
  },
  link: {
    color: "#fff",
  },
  roundView: {
    borderRadius: 100,
    height: 32,
    width: 32,
    backgroundColor: "rgba(78,78,78,0.5)",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    position: "absolute",
    top: ww(13),
    right: ww(15),
  },
  white2: {
    alignSelf: "flex-start",
    paddingLeft: ww(45),
    paddingTop: ww(20),
  },
  php: {
    alignSelf: "flex-end",
    position: "absolute",
    right: ww(24),
    top: ww(140),
  },
  whitespace: {
    paddingBottom: "30%",
  },
  photoview: {
    position: "relative",
    height: ww(180),
  },
  image: {
    width: ww(340),
    height: ww(180),
    borderRadius: 15,
  },
  position: {
    positon: "absolute",
    top: ww(-167),
  },
  dwn: {
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
