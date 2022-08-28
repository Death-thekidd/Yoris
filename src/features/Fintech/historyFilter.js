import React, { useState } from "react";
import { Calendar, CalendarList } from "react-native-calendars";
import dateFns from "date-fns";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Feather";
import Icon4 from "react-native-vector-icons/MaterialCommunityIcons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import {
  First,
  BackupTxt,
  Second,
  DateView,
  Date,
  Time,
  Select,
  Quantity,
  QtyText,
  CaretWhitespace,
} from "../componenets/fintech11Style";
import { BigText5 } from "../componenets/fintech6Style";
import { Products } from "./list";
import { ww, hh, wp } from "../../../responsive";

export default function HistoryFilter({ navigation, route }) {
  const [routee, setRoute] = useState(route.params.paramKey);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => {
    return item.type ? (
      <View style={styles.photoview}>
        <Image source={item.image} style={styles.image} />
        <Quantity>
          <QtyText>Qty: 1</QtyText>
          <CaretWhitespace>
            <Icon name="caretdown" size={12} color="#fff" />
          </CaretWhitespace>
        </Quantity>
        <View style={styles.linkView}>
          <Text style={styles.link}>{routee}</Text>
        </View>
      </View>
    ) : (
      <View style={styles.photoview}>
        <Image style={styles.image} source={item.image} />
        <Quantity>
          <QtyText>Qty: 1</QtyText>
          <CaretWhitespace>
            <Icon name="caretdown" size={12} color="#fff" />
          </CaretWhitespace>
        </Quantity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.pendingContainer}>
      <ScrollView>
        <First>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: ww(81) }}
          >
            <Icon size={20} color="#C3AD60" name="back" />
          </TouchableOpacity>
          <BigText5>History</BigText5>
          <TouchableOpacity
            onPress={() => navigation.navigate("CalendarScreen")}
            style={{ marginLeft: ww(110) }}
          >
            <Icon4 size={20} color="#C3AD60" name="calendar" />
          </TouchableOpacity>
        </First>

        <Second>
          <FlatList
            data={Products}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </Second>
      </ScrollView>
      <View style={styles.dwn}>
        <TouchableOpacity style={styles.backup}>
          <BackupTxt>Back Up</BackupTxt>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pendingContainer: {
    backgroundColor: "#000",
    paddingTop: 20,
    flex: 1,
  },
  defaultText: {
    color: "#fff",
    textAlign: "center",
  },
  backup: {
    height: 48,
    width: 300,
    borderColor: "#C3AD60",
    borderWidth: 2,
    backgroundColor: "#000",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    margin: 20,
  },
  linkView: {
    height: ww(45),
    width: ww(340),
    backgroundColor: "#4E4E4E",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingLeft: ww(25),
    justifyContent: "space-between",
    position: "absolute",
    top: ww(84),
    flexDirection: "row",
    alignItems: "center",
    paddingRight: ww(25),
  },
  link: {
    color: "#fff",
  },
  photoview: {
    position: "relative",
    height: ww(161),
  },
  image: {
    width: ww(340),
    height: ww(128),
    borderRadius: 15,
  },
  dwn: {
    justifyContent: "flex-end",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
