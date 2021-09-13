import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import InitScreen from "./src/screens/InitScreen";
import StartScreen from "./src/screens/StartScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { MobxProvider } from "./src/components/provider";
import ScreenWorkoutContainer from "./src/screens/ScreenWorkoutContainer";
import ResultsScreenContainer from "./src/screens/ResultsScreenContainer";

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <MobxProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Start"
              component={ScreenWorkoutContainer}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Settings" component={InitScreen} />
            <Tab.Screen name="Results" component={ResultsScreenContainer} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </MobxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    paddingBottom: 100,
  },
});
