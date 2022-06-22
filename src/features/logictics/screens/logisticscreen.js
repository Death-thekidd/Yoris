import React, { useCallback, useState } from "react";
import {
  LogicticsBacground,
  ContinueButton,
  ContinueView,
  LogisticsCountryText,
  LogisticsCountryContainer,
  LogisticsHeaderIconContainer,
} from "../components/logictics.styles";
import { getNames } from "country-list";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import Selector from "../../../components/Selector";
import LogisticsInfo from "../components/LogisticsInfo";
import LogisticsButtonTabGroup from "../components/LogisticsButtonTabGroup";
import DateTimePicker from "@react-native-community/datetimepicker";
import useDateTimePicker from "../../../hooks/useDateTimePicker";

export default function Logisticscreen({ navigation }) {
  const countries = getNames();
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
    onChange,
    date,
    mode,
    showTimepicker,
  } = useDateTimePicker();

  return (
    <LogicticsBacground>
      <LogisticsHeaderIconContainer>
        <Image source={require("../../../../assets/delivery.png")} />
        <Image source={require("../../../../assets/history.png")} />
      </LogisticsHeaderIconContainer>
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
              marginHorizontal: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <LogisticsCountryContainer>
              <LogisticsCountryText>From: </LogisticsCountryText>
              {/* Countries List */}
              <Selector
                data={countries}
                defaultButtonText={"Select Country"}
                setSelectedItem={setSelectedFrom}
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
            <ContinueButton
              onPress={() => navigation.navigate("logisticBooking")}
            >
              continue
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
          onChange={onChange}
          style={{
            backgroundColor: "#9A8340",
          }}
        />
      )}
    </LogicticsBacground>
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
