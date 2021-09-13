import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { observer } from "mobx-react-lite";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

const ResultsScreenContainer = observer(({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarLabel: "Результаты",
      headerBackTitle: "Назад",
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons
          name="chart-bell-curve-cumulative"
          color={color}
          size={26}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>Здесь будут резуьтаты</Text>
    </View>
  );
});

export default ResultsScreenContainer;
