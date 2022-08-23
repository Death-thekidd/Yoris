import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import {
  Container,
  ChatView,
  ColumnTextView,
  Name,
  RecentText,
} from "./styles";
import { ww, hh, wp } from "../Vendors";

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

const styles = StyleSheet.create({
  text: {},
  image: {
    height: ww(64),
    width: ww(64),
  },
});
