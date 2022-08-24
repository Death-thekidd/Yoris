import React, { useState } from "react";
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
import { products } from "./list";
import { productsPage2 } from "./list";
import { products2Page2 } from "./list";
import { VectorHeader } from "../../components/screenComponents/components";
import styled from "styled-components/native";

export default function Ecommerce2({ navigation }) {
  const [brandView, setBrandView] = useState(true);
  const handleBrandView = () => {
    setBrandView(!brandView);
  };
  const handleCart = () => {
    navigation.navigate("Ecommerce6");
  };
  const handleSearch = () => {
    navigation.navigate("Filter");
  };

  return (
    <SafeAreaView style={styles.container}>
      <VectorHeader
        goBack={() => navigation.goBack()}
        handleBrandView={() => handleBrandView()}
        handleCart={() => handleCart()}
        handleSearch={() => handleSearch()}
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Text style={{ color: "white" }}>PREMIUM BRANDS</Text>
          <Text style={{ color: "white" }}>see all</Text>
        </View>

        {brandView ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <FlatList
              data={productsPage2}
              key={1}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.imageVieww}>
                  <TouchableOpacity
                    style={styles.imageView}
                    onPress={() => navigation.navigate("Ecommerce3")}
                  >
                    <Image
                      source={item.image}
                      style={styles.image}
                      key={index}
                    />
                    <Text style={styles.brandName}>Brand Name</Text>
                    <Text style={styles.km}>7km</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={{ height: "95%" }}>
            <FlatList
              data={productsPage2}
              key={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.imageVieww2}>
                  <TouchableOpacity
                    style={styles.other}
                    onPress={() => navigation.navigate("Ecommerce3")}
                  >
                    <Image
                      source={item.image}
                      style={styles.image}
                      key={index}
                    />
                    <View
                      style={{
                        marginTop: 20,
                        marginBottom: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.brandName}>Brand Name</Text>
                      <Text style={styles.km}>
                        Lorem ipsum dolor, sit ahmet...
                      </Text>
                      <View style={{ height: 5, width: 5 }}></View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>

      <View style={{ flex: 1, marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Text style={{ color: "white" }}>REGULAR BRANDS</Text>
          <Text style={{ color: "white" }}>see all</Text>
        </View>
        {brandView ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <FlatList
              data={products2Page2}
              key={1}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.imageVieww}>
                  <TouchableOpacity
                    style={styles.imageView}
                    onPress={() => navigation.navigate("Ecommerce3")}
                  >
                    <Image
                      source={item.image}
                      style={styles.image}
                      key={index}
                    />
                    <Text style={styles.brandName}>Brand Name</Text>
                    <Text style={styles.km}>7km</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={{ height: "95%" }}>
            <FlatList
              data={products2Page2}
              key={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.imageVieww2}>
                  <TouchableOpacity
                    style={styles.other}
                    onPress={() => navigation.navigate("Ecommerce3")}
                  >
                    <Image
                      source={item.image}
                      style={styles.image}
                      key={index}
                    />
                    <View
                      style={{
                        marginTop: 20,
                        marginBottom: 20,
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={styles.brandName}>Brand Name</Text>
                      <Text style={styles.km}>
                        Lorem ipsum dolor, sit ahmet...
                      </Text>
                      <View style={{ height: 5, width: 5 }}></View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
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
    fontSize: 15,
    lineHeight: 21.09,
    marginLeft: 20,
  },
  seeAllView: {
    alignItems: "flex-end",
    marginRight: 20,
  },
  seeAll: {
    color: "white",
    fontSize: 12,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 14,
    marginLeft: 20,
  },
  brandName: {
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "white",
    fontSize: 10,
  },
  km: {
    color: "#4E4E4E",
    fontFamily: "Roboto",
    fontSize: 10,
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
    height: 60,
    width: 60,
    margin: 20,
    borderRadius: 17,
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
  imageVieww2: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  other: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
    padding: 0,
  },
  ad: {
    marginTop: 40,
    marginBottom: 40,
  },
  imageAd: {
    height: 140,
    width: "100%",
  },
});
