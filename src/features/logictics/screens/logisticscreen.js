import React, { useCallback, useState } from "react";
import {
  LogicticsBacground,
  ContinueButton,
  ContinueView,
  LogisticsCountryText,
  LogisticsCountryContainer,
  LogisticsHeaderIconContainer,
  ContinuewButtonText,
} from "../components/logictics.styles";
import { getNames } from "country-list";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Text,
  View,
  Image,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Selector from "../../../components/Selector";
import LogisticsInfo from "../components/LogisticsInfo";
import LogisticsButtonTabGroup from "../components/LogisticsButtonTabGroup";
import DateTimePicker from "@react-native-community/datetimepicker";
import useDateTimePicker from "../../../hooks/useDateTimePicker";
import { useNavigation } from "@react-navigation/native";
import Header from "../../../components/Header";
import { Layout } from "../../../components/Layout";

export default function Logisticscreen() {
  const navigation = useNavigation();
  const countries = getNames();
  const [isMultiple, setIsMultiple] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState();
  const [selectedTo, setSelectedTo] = useState();

  const [
    { isInternationalActive, isLocalActive, isExpressActive, isRegularActive },
    setIsActive,
  ] = useState({
    isLocalActive: true,
    isInternationalActive: false,
    isRegularActive: true,
    isExpressActive: false,
  });
  const setActiveTab = (tab) => {
    switch (tab) {
      case "local":
        setIsActive((prevState) => ({
          ...prevState,
          isLocalActive: true,
          isInternationalActive: false,
        }));

        break;
      case "international":
        setIsActive((prevState) => ({
          ...prevState,
          isLocalActive: false,
          isInternationalActive: true,
        }));

        break;
      case "regular":
        setIsActive((prevState) => ({
          ...prevState,
          isExpressActive: false,
          isRegularActive: true,
        }));

        break;
      case "express":
        setIsActive((prevState) => ({
          ...prevState,
          isRegularActive: false,
          isExpressActive: true,
        }));

        break;
    }
  };

  const {
    showDatepicker,
    show: showDateTimePicker,
    onChange: onChangeDate,
    date,
    mode,
    showTimepicker,
  } = useDateTimePicker();

  return (
    <Layout
      styles={{
        paddingHorizontal: 50,
      }}
    >
      <Header
        iconLeft={require("../../../../assets/delivery.png")}
        iconRight={require("../../../../assets/history.png")}
        onRightIconPress={() => navigation.navigate("orderHistory")}
        containerStyle={{
          padding: 20,
        }}
      />

      <View style={[styles.row]}>
        <Pressable>One Off</Pressable>
        <Pressable>Multiple</Pressable>
      </View>

      {/* Container */}
      <View style={[styles.container]}>
        {/**
         * BTN tabs Group
         */}

        <LogisticsButtonTabGroup
          data={[
            {
              isActive: isLocalActive,
              text: "Local",
              onPress: () => setActiveTab("local"),
            },
            {
              isActive: isInternationalActive,
              text: "International",
              onPress: () => setActiveTab("international"),
            },
          ]}
        />

        {/**
         *  Location Selector
         *   */}
        {isInternationalActive && (
          <View
            style={{
              // marginHorizontal: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <LogisticsCountryContainer>
              <LogisticsCountryText>From: </LogisticsCountryText>
              {/* Countries List */}
              <Selector
                data={countries}
                defaultButtonText={"Select Country"}
                setSelectedItem={setSelectedFrom}
                buttonStyle={{
                  // padding: 10,
                  height: 35,
                  width: 125,
                }}
              />
              {/* Send  */}
            </LogisticsCountryContainer>

            <LogisticsCountryContainer>
              <LogisticsCountryText>To: </LogisticsCountryText>
              {/* Countries List */}
              <Selector
                data={countries}
                defaultButtonText={"Select Country"}
                setSelectedItem={setSelectedTo}
                buttonStyle={{
                  height: 35,
                  width: 125,
                }}
              />
            </LogisticsCountryContainer>
          </View>
        )}

        <LogisticsButtonTabGroup
          data={[
            {
              isActive: isRegularActive,
              text: "Regular",
              onPress: () => setActiveTab("regular"),
            },
            {
              isActive: isExpressActive,
              text: "Express",
              onPress: () => setActiveTab("express"),
            },
          ]}
          style={{
            marginVertical: 20,
          }}
        />

        {isInternationalActive && (
          <>
            {/* info container  */}
            <LogisticsInfo
              firstLabel={"Charge"}
              firstValue={"$10 per kg"}
              secondLabel={"Time Frame"}
              secondValue={isExpressActive ? "5 - 7 days" : "7 - 14 Days"}
              style={{ marginBottom: 15 }}
            />

            {/* Show on Regular */}
            {isRegularActive && (
              <LogisticsInfo
                firstLabel={"Charge"}
                firstValue={"$100 per CBM"}
                helper={"CBM = Cubic Meter"}
                secondLabel={"Time Frame"}
                secondValue={"45 - 60 days"}
              />
            )}
          </>
        )}

        {isLocalActive && isRegularActive && (
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            {/* Date Selector */}
            <Pressable style={[styles.row]} onPress={showDatepicker}>
              <Image
                style={styles.icon}
                source={require("../../../../assets/calender.png")}
              />
              <Text style={styles.iconText}>Date</Text>
            </Pressable>

            {/* Time selector */}
            <Pressable style={[styles.row]} onPress={showTimepicker}>
              <Image
                style={styles.icon}
                source={require("../../../../assets/history.png")}
              />
              <Text style={styles.iconText}>Time Slot</Text>
            </Pressable>
          </View>
        )}

        <Spacer size="xxl">
          <ContinueView>
            <ContinueButton onPress={() => navigation.navigate("Yoris Pay")}>
              <ContinuewButtonText>continue</ContinuewButtonText>
            </ContinueButton>
          </ContinueView>
        </Spacer>
      </View>

      {showDateTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChangeDate}
          style={{
            backgroundColor: "#9A8340",
          }}
        />
      )}
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  row: {
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "flex-end",
  },

  icon: {
    marginRight: 10,
    width: 30,
    height: 30,
  },
  iconText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
