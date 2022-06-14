
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from 'react'
import { theme } from "./src/infrastructure/theme/index";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from "./src/infrastructure/navigation";

import { LogBox } from 'react-native';
import _ from 'lodash';

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


export default function App() {


  LogBox.ignoreLogs(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
    }
  }



  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
};
