import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Notifications,
  ImageRow,
  NotificationBar,
  TopView,
  Info,
  Swipe,
  Ship,
  TextBox,
  ProfileRow,
  ProfileColumn,
  UserRow,
  UserName,
  Handle,
  Details,
  ReactionsRow,
} from "../components/notificationStyles";

import { Dimensions } from "react-native";
import {} from "../components/editStyles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Notification() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <TopView>
          <AntDesign
            size={ww(30)}
            color="#C3AD60"
            name="back"
            style={styles.pad}
          />
          <Notifications>Notifications</Notifications>
        </TopView>
        <NotificationBar>
          <View style={styles.row}>
            <AntDesign
              size={ww(25)}
              color="#F44336"
              name="heart"
              style={styles.padd}
            />
            <ImageRow>
              <Image
                style={styles.position}
                source={require("../../../../assets/notificationImage1.png")}
              />
              <Image
                style={styles.position1}
                source={require("../../../../assets/notificationImage2.png")}
              />
              <Image
                style={styles.position2}
                source={require("../../../../assets/notificationImage3.png")}
              />
            </ImageRow>
          </View>
          <Info>(User Name and xxx others) Liked your post</Info>
          <TextBox>
            So I came across this awesome brand that sells ankara bracelets and
            pendants, they looked really awesome!!!
          </TextBox>
        </NotificationBar>
        <NotificationBar>
          <ProfileRow>
            <Image
              style={styles.profileImg}
              source={require("../../../../assets/notificationImage.png")}
            />
            <ProfileColumn>
              <UserRow>
                <UserName>USER NAME</UserName>
                <Handle>@handle</Handle>
              </UserRow>
              <Details>Beat you to it!</Details>
            </ProfileColumn>
          </ProfileRow>
          <ReactionsRow>
            <FontAwesome
              size={ww(18)}
              color="#4E4E4E"
              name="comment-o"
              style={styles.pad2}
            />
            <AntDesign
              size={ww(18)}
              color="#4E4E4E"
              name="hearto"
              style={styles.pad1}
            />
            <Entypo
              size={ww(18)}
              color="#4E4E4E"
              name="retweet"
              style={styles.pad1}
            />
            <Ionicons
              size={ww(18)}
              color="#4E4E4E"
              name="heart-dislike"
              style={styles.pad1}
            />
          </ReactionsRow>
        </NotificationBar>
        <NotificationBar>
          <View style={styles.row}>
            <Entypo
              size={ww(25)}
              color="#1DB704"
              name="retweet"
              style={styles.padd}
            />
            <ImageRow>
              <Image
                style={styles.position}
                source={require("../../../../assets/notificationImage1.png")}
              />
            </ImageRow>
          </View>
          <Info>(User Name) Reposted your post</Info>
          <TextBox>
            So I came across this awesome brand that sells ankara bracelets and
            pendants, they looked really awesome!!!
          </TextBox>
        </NotificationBar>
        <NotificationBar>
          <View style={styles.row}>
            <Ionicons
              size={ww(25)}
              color="#C3AD60"
              name="person"
              style={styles.padd}
            />
            <ImageRow>
              <Image
                style={styles.position}
                source={require("../../../../assets/notificationImage1.png")}
              />
            </ImageRow>
          </View>
          <Info>(User Name) Followed you</Info>
        </NotificationBar>
        <NotificationBar>
          <View style={styles.row}>
            <Ionicons
              size={ww(25)}
              color="#6C63FF"
              name="heart-dislike"
              style={styles.pad1}
            />
            <ImageRow>
              <Image
                style={styles.position}
                source={require("../../../../assets/notificationImage1.png")}
              />
              <Image
                style={styles.position1}
                source={require("../../../../assets/notificationImage2.png")}
              />
              <Image
                style={styles.position2}
                source={require("../../../../assets/notificationImage3.png")}
              />
            </ImageRow>
          </View>
          <Info>(User Name and xxx others)Disliked your post</Info>
          <TextBox>
            So I came across this awesome brand that sells ankara bracelets and
            pendants, they looked really awesome!!!
          </TextBox>
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
    paddingTop: ww(92),
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
  background: {
    position: "absolute",
    right: ww(0),
    top: ww(0),
    height: ww(116),
    width: ww(167),
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    width: ww(101),
    height: ww(14),
  },
  row: {
    flexDirection: "row",
    marginTop: ww(24),
  },
  padd: {
    paddingLeft: ww(44),
  },
  profileImg: {
    height: ww(42),
    width: ww(42),
  },
  pad1: {
    paddingLeft: ww(37),
  },
  pad2: {
    paddingLeft: ww(104),
  },
});
