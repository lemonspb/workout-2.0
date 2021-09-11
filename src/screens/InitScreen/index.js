import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Button, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-community/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { observer } from "mobx-react-lite";
import { useStore } from "../../components/provider";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const InitInfoScreen = observer(({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Профиль",
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Start")} title="Готово" />
      ),
      tabBarLabel: "Профиль",
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account" color={color} size={26} />
      ),
    });
  }, [navigation]);

  const { specifications } = useStore();
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Имя"
        value={specifications.formSpecification.name}
        onChangeText={(text) => specifications.handleChange("name", text)}
      />
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={mode}
        locale="ru-RU"
        is24Hour={true}
        display="spinner"
      />
      <Picker
        selectedValue={specifications.formSpecification.height}
        onValueChange={(itemValue) => {
          specifications.handleChange("height", itemValue);
        }}
      >
        <Picker.Item label="Выберите Рост" value="" />
        {specifications.listHeight.map((h) => {
          return <Picker.Item label={`${h} см`} value={h} />;
        })}
      </Picker>
      <Picker
        selectedValue={specifications.formSpecification.weight}
        onValueChange={(itemValue) => {
          specifications.handleChange("weight", itemValue);
        }}
      >
        <Picker.Item label="Выберите вес" value="" />
        {specifications.listWeight.map((w) => (
          <Picker.Item label={`${w} кг`} value={w} />
        ))}
      </Picker>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    paddingBottom: 100,
  },
});

export default InitInfoScreen;
