import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
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
import { productsPage2 } from "./list";
import { products2Page2 } from "./list";
import { VectorHeader5 } from "../../components/screenComponents/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import styled from "styled-components/native";
import Posts from "./posts";
import { Products, Reviews, About, Services } from "./brandz";

import { ww, wp } from "../../../responsive";

const Tabs = createMaterialTopTabNavigator();

const StyledText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: ${ww(18)}px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;

const RateText = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400
  font-size: ${ww(18)}px;
  padding-left: ${ww(68)}px;
  color: #ffffff;
`;

const StyledText1 = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(36)}px;
  text-align: center;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;

const NumFollowers = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: ${ww(24)}px;
  color: #c3ad60;
`;

const Plus = styled.Image`
  width: ${ww(39)}px;
  height: ${ww(39)}px;
`;

const Plus2 = styled.Image`
  width: ${ww(39)}px;
  height: ${ww(39)}px;
  transform: rotate(45deg);
`;

const Pluss = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  background-color: #c3ad60;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 0 ${ww(20)}px ${ww(20)}px 0;
`;

const Plus1 = styled.Image`
  width: ${ww(19)}px;
  height: ${ww(19)}px;
`;

export default function Vendor1({ navigation, routeImage }) {
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

  const [clicked, setClicked] = useState(false);
  const [brandView, setBrandView] = useState(true);
  const handleBrandView = () => {
    setBrandView(!brandView);
  };
  const handleCart = () => {
    navigation.navigate("Ecommerce6");
  };
  const handleChats = () => {
    navigation.navigate("chats");
  };
  const handleSearch = () => {
    navigation.navigate("Filter");
  };

  return (
    <SafeAreaView style={styles.container}>
      <VectorHeader5
        goBack={() => navigation.goBack()}
        handleBrandView={() => handleBrandView()}
        handleCart={() => handleCart()}
        handleChats={() => handleChats()}
        handleSearch={() => handleSearch()}
      />

      <View style={styles.header}>
        <View>
          <Image
            source={require("../assets/header.png")}
            style={styles.imageAd}
          />
          <Image source={routeImage} style={styles.profile} />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <StyledText1>Brand Name</StyledText1>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <StyledText>
            Brand Description: Lorem ipsum dolor, sit ahmet... This is pretty
            much the brand’s bio.
          </StyledText>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 15 }}>Follow</Text>
          <Icon2 name="plus" style={{ marginLeft: 20 }} size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 15 }}>Share</Text>
          <Icon2 name="sharealt" style={{ marginLeft: 15 }} size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.follower}>
        <NumFollowers>1000</NumFollowers>
        <StyledText>Followers</StyledText>
      </View>

      <View style={styles.rowView}>
        <RateText>Rate this Brand:</RateText>

        <View style={styles.stars}>
          {star >= 1 ? (
            <TouchableOpacity onPress={() => handleStar1()}>
              <Ionicons name="star" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleStar1()}>
              <Ionicons name="star-outline" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          )}

          {star >= 2 ? (
            <TouchableOpacity
              onPress={() => handleStar2()}
              style={styles.starMargin}
            >
              <Ionicons name="star" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleStar2()}
              style={styles.starMargin}
            >
              <Ionicons name="star-outline" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          )}

          {star >= 3 ? (
            <TouchableOpacity
              onPress={() => handleStar3()}
              style={styles.starMargin}
            >
              <Ionicons name="star" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleStar3()}
              style={styles.starMargin}
            >
              <Ionicons name="star-outline" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          )}

          {star >= 4 ? (
            <TouchableOpacity
              onPress={() => handleStar4()}
              style={styles.starMargin}
            >
              <Ionicons name="star" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleStar4()}
              style={styles.starMargin}
            >
              <Ionicons name="star-outline" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          )}

          {star >= 5 ? (
            <TouchableOpacity
              onPress={() => handleStar5()}
              style={styles.starMargin}
            >
              <Ionicons name="star" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => handleStar5()}
              style={styles.starMargin}
            >
              <Ionicons name="star-outline" color={"#c3ad60"} size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Tabs.Navigator
        headerMode="none"
        screenOptions={{
          tabBarShowIcon: true,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#ddd",
          tabBarIndicatorStyle: {
            backgroundColor: "#C3AD60",
          },

          tabBarStyle: {
            borderTopWidth: 2,
            elevation: 10,
            backgroundColor: "#000",
            borderRadius: 1,
          },
        }}
      >
        <Tabs.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Posts"
          component={Posts}
          options={{
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="Reviews"
          component={Reviews}
          options={{
            headerShown: false,
          }}
        />
      </Tabs.Navigator>

      <View style={{ alignItems: "flex-end", justifyContent: "flex-end" }}>
        {clicked ? (
          <View style={styles.plus}>
            <Plus1 source={require("../../../assets/plus1.png")} />
            <Plus1 source={require("../../../assets/plus2.png")} />
            <Pluss onPress={() => setClicked(false)}>
              <Plus2 source={require("../../../assets/plusBar.png")} />
            </Pluss>
          </View>
        ) : (
          <View style={styles.plus2}>
            <Pluss onPress={() => setClicked(true)}>
              <Plus source={require("../../../assets/plusBar.png")} />
            </Pluss>
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
  starMargin: {
    marginLeft: ww(8),
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
  stars: {
    flexDirection: "row",
    marginLeft: ww(11),
  },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandName: {
    fontSize: 17,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },
  km: {
    color: "#4E4E4E",
    fontFamily: "Roboto",
    fontSize: 10,
    textAlign: "center",
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
  image2: {
    borderRadius: 50,
    width: 55,
    height: 55,
    marginLeft: 25,
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
  header: {
    marginBottom: 50,
  },
  imageAd: {
    height: 90,
    width: "100%",
    position: "absolute",
  },
  profile: {
    height: 90,
    width: 90,
    zIndex: 1,
    left: "39%",
    top: "50%",
    padding: 0,
    margin: 0,
    borderRadius: 50,
  },
  products: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#C3AD60",
    width: 128,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    marginBottom: 30,
  },
  follower: {
    alignItems: "center",
    marginBottom: ww(15),
  },
  plus: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#00000066",
  },
  plus2: {
    position: "absolute",
    alignItems: "flex-end",
    width: ww(428),
    borderRadius: 30,
  },
});
