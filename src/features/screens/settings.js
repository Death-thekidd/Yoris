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
import Back from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  SettingsBar,
  TextBar,
  FirstText,
  SubsequentText,
} from "../components/settingsStyles.js";

import { Dimensions } from "react-native";
import {} from "../components/editStyles";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default function Settings() {
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <Back size={ww(30)} color="#C3AD60" name="back" style={styles.pad} />
        <View>
          <SettingsBar>
            <Ionicons
              name="person"
              size={ww(20)}
              style={styles.icon}
              color="#4e4e4e"
            />
            <TextBar>
              <FirstText>Account Information</FirstText>
              <SubsequentText>
                See information about your account
              </SubsequentText>
            </TextBar>
          </SettingsBar>
          <SettingsBar>
            <Fontisto
              name="locked"
              size={ww(20)}
              style={styles.icon}
              color="#4e4e4e"
            />
            <TextBar>
              <FirstText>Change your password</FirstText>
              <SubsequentText>Change password at any time.</SubsequentText>
            </TextBar>
          </SettingsBar>
          <SettingsBar>
            <FontAwesome
              name="cloud-download"
              size={ww(20)}
              style={styles.icon}
              color="#4e4e4e"
            />
            <TextBar>
              <FirstText>Request account data</FirstText>
              <SubsequentText>
                Get insights into the type of information stored for your
                account.
              </SubsequentText>
            </TextBar>
          </SettingsBar>
          <SettingsBar>
            <Fontisto
              name="power"
              size={ww(20)}
              style={styles.icon}
              color="#4e4e4e"
            />
            <TextBar>
              <FirstText>Deactivate account</FirstText>
              <SubsequentText>
                Find out how you can deactivate your account
              </SubsequentText>
            </TextBar>
          </SettingsBar>
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
    paddingTop: ww(92),
  },
  pad: {
    paddingLeft: ww(51),
    paddingBottom: ww(80),
  },
  icon: {
    paddingLeft: ww(55),
  },
});
