import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import { observer } from "mobx-react-lite";
import { useStore } from "../../components/provider";
import { List } from "react-native-paper";
import ModalContainer from "../../components/modal";
const StartScreen = observer(({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Выбор упражнений",
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("StartPage")}
          title="начать"
        />
      ),
      headerBackTitle: "Назад",
    });
  }, [navigation]);
  const { workout } = useStore();

  const [value, setValue] = useState("");

  const onHandleItemListWorkout = (id) => {
    setModalVisible(true);
    workout.onSelectWorkout(id);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ModalContainer
          onChangeAmount={workout.onChangeAmount}
          selectItem={workout.selectWorkout}
          listAmount={workout.listAmount}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          title={"Выбор колличества"}
        ></ModalContainer>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => {
            setValue(itemValue);
            if (itemValue !== value) {
              workout.onCreateWorkout(itemValue);
            }
          }}
        >
          <Picker.Item label={"Выберите упражнение"} value={""} key={""} />
          {workout.listWorkout.map((item) => {
            return <Picker.Item label={item} value={item} key={item} />;
          })}
        </Picker>
        <List.Section>
          <List.Subheader>Cписок упражнений</List.Subheader>
          {workout.listSelectWorkout.map((item) => (
            <List.Item
              title={item.name}
              description={`Кол-во: ${item.limit}`}
              onPress={() => onHandleItemListWorkout(item.id)}
              right={() => (
                <TouchableOpacity
                  onPress={() => workout.onRemoveSelectWorkout(item.id)}
                >
                  <List.Icon icon="delete" />
                </TouchableOpacity>
              )}
            />
          ))}
        </List.Section>
      </ScrollView>
    </>
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

export default StartScreen;
