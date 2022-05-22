import { Platform } from "react-native";

const liveHost = "??";
const localHost = " you backend Local Host";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
