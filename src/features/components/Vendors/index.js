import React, { useEffect, useState } from "react";
import { View, Pressable, StyleSheet, Image } from "react-native";
import {} from "./styles";
import {
  Container,
  ChatView,
  ColumnTextView,
  Name,
  RecentText,
} from "../Contacts/styles";

import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const ww = (a) => (windowWidth * a) / 428;
export const hh = (a) => (windowHeight * a) / 1024;
export const wp = (a) => (a / 428) * 100;

export default () => {
  return (
    <Container>
      <ChatView>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profilepic.png")}
        />
        <ColumnTextView>
          <Name>James</Name>
          <RecentText>Thank you! That was very helpful!</RecentText>
        </ColumnTextView>
      </ChatView>
      <ChatView>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profilepic2.png")}
        />
        <ColumnTextView>
          <Name>Will Kenny</Name>
          <RecentText>I know... I'm trying to get the funds</RecentText>
        </ColumnTextView>
      </ChatView>
      <ChatView>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profilepic3.png")}
        />
        <ColumnTextView>
          <Name>Beth Williams</Name>
          <RecentText>
            I'm looking for tips around catching the milky way. I have a 60 with
            a 24-100mm...
          </RecentText>
        </ColumnTextView>
      </ChatView>
      <ChatView>
        <Image
          style={styles.image}
          source={require("../../../../../assets/profilepic4.png")}
        />
        <ColumnTextView>
          <Name>Rev Shawn</Name>
          <RecentText>
            Wanted to ask if you're available for a portrait shoot next week.
          </RecentText>
        </ColumnTextView>
      </ChatView>
    </Container>
  );
};
//64
const styles = StyleSheet.create({
  text: {},
  image: {
    height: ww(64),
    width: ww(64),
  },
});
