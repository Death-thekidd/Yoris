import { React, useState } from "react";
import {
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { Calendar } from "react-native-calendars";
import moment from "moment";
const CUSTOM_WIDTH = Dimensions.get("window").width;
import { LocaleConfig } from "react-native-calendars";
import { Select } from "../componenets/calaendarStyle";

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Décember",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul.",
    "Aug",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  dayNamesShort: ["Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun."],
  today: "Today'now",
};

LocaleConfig.locales["ru"] = {
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthNamesShort: [
    "Янв.",
    "Феб.",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль.",
    "Авг",
    "Септ.",
    "Окт.",
    "Нов.",
    "Дек.",
  ],
  dayNames: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  dayNamesShort: ["Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб.", "Вс."],
  today: "Сегодня'hui",
};

LocaleConfig.defaultLocale = "en";

export default function ({ navigation }) {
  const [date, setDate] = useState({
    selectedDate: "",
    markedDates: {},
  });

  const getSelectedDayEvents = (date) => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: "#00B0BF",
      textColor: "#FFFFFF",
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format("DD/MM/YYYY");
    setDate({
      selectedDate: serviceDate,
      markedDates: markedDates,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderCalendar}>
        <Text style={styles.topHeaderCalendarText}> {date.selectedDate}</Text>
      </View>
      <Calendar
        style={{
          height: 257,
          width: 294,
        }}
        theme={{
          backgroundColor: "#000",
          calendarBackground: "#000",
          todayTextColor: "#57B9BB",
          dayTextColor: "#FFF",
          textDisabledColor: "#000",
          monthTextColor: "#C3AD60",
          arrowColor: "#C3AD60",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "500",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          selectedDayBackgroundColor: "#C3AD60",
          selectedDayTextColor: "white",
          textDayHeaderFontSize: 8,
        }}
        minDate={"1996-05-10"}
        maxDate={"2030-05-30"}
        monthFormat={"MMMM yyyy "}
        markedDates={date.markedDates}
        scrollEnabled={true}
        horizontal={true}
        showScrollIndicator={true}
        disableMonthChange={true}
        onDayPress={(day) => {
          getSelectedDayEvents(day.dateString);
        }}
      />
      <TouchableOpacity
        style={styles.selectbtn}
        onPress={() => {
          navigation.navigate("HistoryFilter");
        }}
      >
        <Select>Select</Select>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
    alignItems: "center",
  },

  topHeaderCalendar: {
    height: 74,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#32B2EC",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  topHeaderCalendarText: {
    fontSize: 24,
    color: "#ffffff",
  },
  selectbtn: {
    height: 48,
    width: 180,
    borderRadius: 100,
    backgroundColor: "#C3AD60",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
});
