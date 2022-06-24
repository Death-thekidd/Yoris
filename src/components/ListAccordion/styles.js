import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {},
  white: {
    color: "#fff",
  },
  orderNumber: {
    fontWeight: "500",
    color: Platform.OS !== "ios" && "grey",
  },
  trackingNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  date: {
    fontWeight: Platform.OS === "ios" ? "100" : "normal",
    color: Platform.OS !== "ios" && "grey",
  },
  listIcon: {
    width: 50,
    resizeMode: "contain",
  },
  infoText: {
    fontWeight: "200",
    fontSize: 13,
    color: "grey",
  },
});
