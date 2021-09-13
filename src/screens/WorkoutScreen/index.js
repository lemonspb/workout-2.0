import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "../../components/provider";
import { DataTable } from "react-native-paper";
import ModalContainer from "../../components/modal";

const WorkoutScreen = observer(({ navigation }) => {
  const { workout } = useStore();

  const [seconds, setSeconds] = React.useState("0:0");

  const [modalVisible, setModalVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Тренеровка",
      headerBackTitle: "Назад",
    });
  }, [navigation]);

  function update() {
    let ss = seconds.split(":");
    let dt = new Date();
    dt.setHours(0);
    dt.setMinutes(ss[0]);
    dt.setSeconds(ss[1]);

    let dt2 = new Date(dt.valueOf() + 1000);
    let temp = dt2.toTimeString().split(" ");
    let ts = temp[0].split(":");

    setSeconds(ts[1] + ":" + ts[2]);
  }

  React.useEffect(() => {
    setTimeout(() => update(), 1000);
  });

  const onChangeValue = (id) => {
    setModalVisible(true);
    workout.onSelectWorkout(id);
  };

  const onChangeValueModal = (id, value) => {
    workout.onChangeAmount(id, value, "done");
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.timer}>
        Время: <Text style={styles.count}> {seconds}</Text>
      </Text>
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
              <DataTable.Cell>
                {workout.listResults.map((list, i) => `${i + 1})${list},`)}
              </DataTable.Cell>
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
    paddingLeft: 15,
    paddingRight: 15,
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
  timer: {
    paddingTop: 23,
    textAlign: "right",
  },
  count: {
    fontWeight: "700",
  },
});

export default WorkoutScreen;
