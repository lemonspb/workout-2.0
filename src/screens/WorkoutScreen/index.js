import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Button, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "../../components/provider";
import { DataTable } from "react-native-paper";
import ModalContainer from "../../components/modal";

const WorkoutScreen = observer(({ navigation }) => {
  const { workout } = useStore();

  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Тренировка",
    });
  }, [navigation]);

  const onChangeValue = (id) => {
    setModalVisible(true);
    workout.onSelectWorkout(id);
  };

  const onChangeValueModal = (id, value) => {
    workout.onChangeAmount(id, value, "done");
  };
  return (
    <ScrollView style={styles.container}>
      <ModalContainer
        onChangeValue={onChangeValueModal}
        selectItem={workout.selectWorkout}
        listAmount={workout.listAmount}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title={"Колличество сделаное"}
      ></ModalContainer>
      <DataTable>
        <DataTable.Header>
          {workout.tableWorkoutTitle.map((title) => (
            <DataTable.Title>{title}</DataTable.Title>
          ))}
        </DataTable.Header>
        {workout.listSelectWorkout.map((workout) => {
          return (
            <DataTable.Row onPress={() => onChangeValue(workout.id)}>
              <DataTable.Cell>{workout.name}</DataTable.Cell>
              <DataTable.Cell>{workout.leftToDo}</DataTable.Cell>
              <DataTable.Cell>{workout.done}</DataTable.Cell>
              <DataTable.Cell>{workout.limit}</DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>
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

export default WorkoutScreen;
