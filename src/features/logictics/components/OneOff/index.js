import { useState } from "react";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import Selector from "../../../../components/Selector";
import {
  LogisticsCountryContainer,
  LogisticsCountryText,
} from "../logictics.styles";
import LogisticsButtonTabGroup from "../LogisticsButtonTabGroup";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getNames } from "country-list";
import useDateTimePicker from "../../../../hooks/useDateTimePicker";
import LogisticsInfo from "../../components/LogisticsInfo";
import { Button } from "../../../../components/Button";
import { useNavigation } from "@react-navigation/native";
export default () => {
  const countries = getNames();
  const navigation = useNavigation();

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
    <>
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
              source={require("../../../../../assets/calender.png")}
            />
            <Text style={styles.iconText}>Date</Text>
          </Pressable>

          {/* Time selector */}
          <Pressable style={[styles.row]} onPress={showTimepicker}>
            <Image
              style={styles.icon}
              source={require("../../../../../assets/history.png")}
            />
            <Text style={styles.iconText}>Time Slot</Text>
          </Pressable>
        </View>
      )}
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

      <Button
        onPress={() =>
          navigation.navigate(isInternationalActive ? "shipping" : "pickUp", {
            singlePickup: true,
            singleDropOff: true,
          })
        }
        style={{ backgroundColor: "#C3AD60", marginTop: 74 }}
      >
        <Text style={{ fontSize: 24 }}>Continue</Text>
      </Button>
    </>
  );
};

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
  screenToggleBtn: {
    fontSize: 16,
    fontWeight: "300",
  },
});
