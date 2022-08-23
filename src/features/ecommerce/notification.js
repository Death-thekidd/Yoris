import React from "react";
import Icon from "react-native-vector-icons/Feather";
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
  TopView,
  Notifications,
  NotificationBar,
  ImageRow,
  Info,
} from "./components/notificationStyles";

import { Dimensions } from "react-native";
import {} from "../components/editStyles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Notification2({ navigation }) {
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
          <Notifications>Notifications</Notifications>
        </TopView>

        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
            <Image
              style={styles.position1}
              source={require("../../../assets/notificationImage2.png")}
            />
            <Image
              style={styles.position2}
              source={require("../../../assets/notificationImage.png")}
            />
            <Image
              style={styles.position3}
              source={require("../../../assets/notificationImage4.png")}
            />
          </ImageRow>
          <Info>User 1, and 3 others liked your post</Info>
        </NotificationBar>
        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
            <Image
              style={styles.position1}
              source={require("../../../assets/notificationImage2.png")}
            />
          </ImageRow>
          <Info>User 4 ordered XXXXXX</Info>
        </NotificationBar>
        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
          </ImageRow>
          <Info>User3 left a review</Info>
        </NotificationBar>
        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
            <Image
              style={styles.position1}
              source={require("../../../assets/notificationImage2.png")}
            />
          </ImageRow>
          <Info>User 3 and User 2 left reviews</Info>
        </NotificationBar>
        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
            <Image
              style={styles.position1}
              source={require("../../../assets/notificationImage2.png")}
            />
            <Image
              style={styles.position2}
              source={require("../../../assets/notificationImage.png")}
            />
            <Image
              style={styles.position3}
              source={require("../../../assets/notificationImage4.png")}
            />
          </ImageRow>
          <Info>User 1, and 3 others liked your post</Info>
        </NotificationBar>
        <NotificationBar>
          <ImageRow>
            <Image
              style={styles.position}
              source={require("../../../assets/notificationImage1.png")}
            />
          </ImageRow>
          <Info>User 4 ordered XXXXXX</Info>
        </NotificationBar>
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
  pad: {
    paddingLeft: ww(34),
  },
  position: {
    position: "absolute",
    height: ww(32),
    width: ww(32),
  },
  position1: {
    position: "absolute",
    height: ww(32),
    width: ww(32),
    left: ww(28),
  },
  position2: {
    position: "absolute",
    height: ww(32),
    width: ww(32),
    left: ww(56),
  },
  position3: {
    position: "absolute",
    height: ww(32),
    width: ww(32),
    left: ww(84),
  },
});
