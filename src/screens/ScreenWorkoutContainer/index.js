import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";
import WorkoutScreen from "../WorkoutScreen";
import StartScreen from "../StartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const ScreenWorkoutContainer = observer(({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: "Тренероваться",

      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={color} size={26} />
      ),
    });
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={StartScreen} />
      <Stack.Screen name="Workout" component={WorkoutScreen} />
    </Stack.Navigator>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerItemList: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  title: {
    paddingBottom: 100,
  },
  modalView: {
    margin: 20,
    marginTop: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ScreenWorkoutContainer;
