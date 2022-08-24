import React from "react";
import Icon from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
} from "react-native";
import { status } from "./list";
import { ads } from "./list";
import { products } from "./list";
import styled from "styled-components/native";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

const Industry = styled.Text`
  color: #c3ad60;
  font-family: Roboto;
  font-weight: 400;
  font-size: ${ww(15)}px;
  margin-left: ${ww(20)}px;
`;

const StyledCart = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: 20px;
`;

const StyledHamburger = styled.Image`
  width: ${ww(25)}px;
  height: ${ww(25)}px;
  margin-right: 20px;
`;

export default function Ecommerce({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.vector}>
        <TouchableOpacity onPress={() => navigation.navigate("Ecommerce6")}>
          <MaterialCommunityIcons
            name="cart-variant"
            color="#C3AD60"
            style={{ marginLeft: ww(20) }}
            size={ww(25)}
          />
        </TouchableOpacity>
        <View style={styles.vectorRight}>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <Icon
              name="search"
              style={{ marginRight: ww(30) }}
              size={25}
              color="#C3AD60"
            />
          </TouchableOpacity>
          <StyledHamburger source={require("../assets/hamburger.png")} />
        </View>
      </View>
      <View style={styles.industry}>
        <Industry>Industry</Industry>
        <View>
          <View style={styles.seeAllView}>
            <TouchableOpacity onPress={() => navigation.navigate("Ecommerce2")}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={status}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.imageView}
                onPress={() =>
                  navigation.navigate("Ecommerce3", {
                    image: item.image,
                    store: item.store,
                  })
                }
              >
                <Image source={item.image} style={styles.image} key={index} />
                <Text style={styles.brandName}>Brand Name</Text>
                <Text style={styles.km}>70Km away</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={styles.industry}>
        <FlatList
          data={ads}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.ad}>
              <Image source={item} key={index} style={styles.imageAd} />
            </View>
          )}
        />
      </View>

      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <FlatList
          data={products}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.imageVieww}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Ecommerce5", { image: item.image })
                }
                style={styles.imageView}
              >
                <Image source={item.image} style={styles.image} key={index} />
                <Text style={styles.brandName}>Product Name</Text>
                <Text style={styles.km}>N0.00</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Ecommerce4")}>
        <Text style={styles.seeAll}>See all</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  industry: {
    height: "30%",
    justifyContent: "center",
  },
  industryText: {
    color: "#C3AD60",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: ww(15),
    marginLeft: ww(20),
  },
  seeAllView: {
    alignItems: "flex-end",
    marginRight: ww(20),
  },
  seeAll: {
    color: "white",
    fontSize: ww(12),
    fontFamily: "Roboto",
    fontWeight: "700",
    marginLeft: ww(20),
  },
  brandName: {
    fontSize: ww(12),
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "white",
  },
  km: {
    color: "#4E4E4E",
    fontFamily: "Roboto",
    fontSize: ww(12),
    fontWeight: "400",
  },
  input: {
    backgroundColor: "#444444",
    borderColor: "#777777",
    borderRadius: 8,
    width: "90%",
    height: "50%",
  },
  inputView: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  image: {
    height: ww(80),
    width: ww(80),
    margin: ww(20),
    borderRadius: 17,
  },
  ad: {
    marginTop: ww(15),
    marginBottom: ww(15),
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageVieww: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 0,
  },
  vector: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    alignItems: "center",
  },
  vectorRight: {
    flexDirection: "row",
  },
  imageAd: {
    width: 400,
    marginLeft: 5,
    height: "100%",
    resizeMode: "cover",
    resizeMethod: "auto",
    borderRadius: 20,
  },
});
