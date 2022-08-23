import { React, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Slider from "@react-native-community/slider";
import { RadioButton } from "react-native-paper";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";

import {
  FilterText,
  TopView,
  MinPrice,
  MaxPrice,
  RatingText,
  ExpressDelivery,
  RegularDelivery,
  SearchBtn,
  SearchText,
} from "./components/filterStyles";

import { Dimensions } from "react-native";
import {} from "../components/editStyles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Filter({ navigation }) {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [star, setStar] = useState(3);
  const handleStar1 = (aa) => {
    setStar(1);
  };
  const handleStar2 = (aa) => {
    setStar(2);
  };
  const handleStar3 = (aa) => {
    setStar(3);
  };
  const handleStar4 = (aa) => {
    setStar(4);
  };
  const handleStar5 = (aa) => {
    setStar(5);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <TopView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              size={ww(30)}
              color="#C3AD60"
              name="back"
              style={styles.pad}
            />
          </TouchableOpacity>
          <FilterText>Filter Search</FilterText>
        </TopView>
        <View style={styles.secondView}>
          <TextInput
            style={styles.category}
            placeholder={"Category"}
          ></TextInput>
          <TextInput style={styles.brand} placeholder={"Brand"}></TextInput>
        </View>
        <View style={styles.mapView}>
          <Image
            style={styles.map}
            source={require("../../../assets/dummyMap.png")}
          />
          <TextInput
            style={styles.location}
            placeholder={"Type in location"}
          ></TextInput>
        </View>
        <View style={styles.priceSelect}>
          <Slider
            style={{ width: ww(360), height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#C3AD60"
            maximumTrackTintColor="#000000"
            thumbTintColor="#C3AD60"
          />
          <View style={styles.priceRange}>
            <MinPrice>Min price</MinPrice>
            <MaxPrice>Max price</MaxPrice>
          </View>
        </View>
        <View style={styles.last}>
          <View style={styles.rating}>
            <RatingText>Filter by rating</RatingText>
            <View style={styles.stars}>
              {star >= 1 ? (
                <TouchableOpacity onPress={() => handleStar1()}>
                  <Ionicons name="star" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleStar1()}>
                  <Ionicons name="star-outline" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              )}

              {star >= 2 ? (
                <TouchableOpacity
                  onPress={() => handleStar2()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleStar2()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star-outline" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              )}

              {star >= 3 ? (
                <TouchableOpacity
                  onPress={() => handleStar3()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleStar3()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star-outline" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              )}

              {star >= 4 ? (
                <TouchableOpacity
                  onPress={() => handleStar4()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleStar4()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star-outline" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              )}

              {star >= 5 ? (
                <TouchableOpacity
                  onPress={() => handleStar5()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => handleStar5()}
                  style={styles.starMargin}
                >
                  <Ionicons name="star-outline" color={"#EB8F00"} size={24} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View style={styles.last}>
          <View style={styles.delivery}>
            <View style={styles.deliveryy}>
              <RadioButton
                style={styles.btn}
                value="first"
                status={first ? "checked" : "unchecked"}
                onPress={() => setFirst(!first)}
                uncheckedColor={"#fff"}
                color={"#C3AD60"}
              />
              <ExpressDelivery>Express Delivery</ExpressDelivery>
            </View>
            <View style={styles.deliveryy}>
              <RadioButton
                style={styles.btn}
                value="second"
                status={second ? "checked" : "unchecked"}
                onPress={() => setSecond(!second)}
                uncheckedColor={"#fff"}
                color={"#C3AD60"}
              />
              <RegularDelivery>Regular Delivery</RegularDelivery>
            </View>
          </View>
          <TouchableOpacity>
            <SearchBtn>
              <SearchText>Search</SearchText>
            </SearchBtn>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#000",
    flex: 1,
    position: "relative",
    paddingTop: ww(68),
  },
  secondView: {
    alignItems: "center",
  },
  deliveryy: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    height: ww(20),
    width: ww(20),
  },
  delivery: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: ww(360),
  },
  pad: {
    paddingLeft: ww(34),
  },
  stars: {
    flexDirection: "row",
    marginTop: ww(12),
  },
  starMargin: {
    marginLeft: ww(32),
  },
  last: {
    alignItems: "center",
    marginTop: ww(48),
  },
  rating: {
    alignItems: "flex-start",
    width: ww(340),
  },
  category: {
    borderRadius: 100,
    width: ww(360),
    height: ww(48),
    backgroundColor: "#4E4E4E",
    marginTop: ww(28),
    paddingLeft: ww(39),
    color: "#fff",
  },
  priceRange: {
    flexDirection: "row",
    color: "#fff",
    justifyContent: "space-between",
    width: ww(340),
  },
  brand: {
    borderRadius: 100,
    width: ww(360),
    height: ww(48),
    backgroundColor: "#4E4E4E",
    marginTop: ww(12),
    paddingLeft: ww(39),
    color: "#fff",
  },
  location: {
    borderRadius: 100,
    width: ww(360),
    height: ww(48),
    backgroundColor: "#4E4E4E",
    position: "absolute",
    paddingLeft: ww(39),
    color: "#fff",
    bottom: 0,
  },
  mapView: {
    marginTop: ww(38),
    alignItems: "center",
  },
  priceSelect: {
    marginTop: ww(38),
    alignItems: "center",
  },
  map: {
    height: ww(256),
    width: ww(360),
  },
});
