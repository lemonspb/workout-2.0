import { makeAutoObservable } from "mobx";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
class Workout {
  listWorkout = ["отжимания", "подтягивания", "приседания"];
  listAmount = [];
  listSelectWorkout = [];
  listNumberOfExercises = [];
  selectWorkout = null;
  tableWorkoutTitle = ["Упражнение", "Осталось", "Сделано", "Всего", "Пися"];

  get numberOfExercises() {
    let list = [];
    for (let i = 1; i <= 500; i++) {
      list = [...list, i];
    }
    this.listAmount = list;
  }

  constructor() {
    this.numberOfExercises;
    makeAutoObservable(this);
  }

  onCreateWorkout = (name) => {
    if (name) {
      const newItemListWorkout = {
        name,
        id: nanoid(),
        limit: 10,
        leftToDo: null,
        done: null,
        listResults: [],
      };
      this.listSelectWorkout = [...this.listSelectWorkout, newItemListWorkout];
    }
  };

  onSelectWorkout = (idx) => {
    this.selectWorkout = this.listSelectWorkout.find(({ id }) => id === idx);
  };

  onRemoveSelectWorkout = (idx) => {
    this.listSelectWorkout = this.listSelectWorkout.filter(
      ({ id }) => id !== idx
    );
  };

  onChangeAmount = (idx, newValue, type) => {
    const itemWorkout = this.listSelectWorkout.find(({ id }) => id === idx);
    if (type === "limit") {
      itemWorkout.limit = newValue;
    }
    if (type === "done") {
      itemWorkout.done += newValue;
      const leftToDoResult = itemWorkout.limit - itemWorkout.done;
      itemWorkout.leftToDo = leftToDoResult <= 0 ? 0 : leftToDoResult;
      itemWorkout.listResults = [...itemWorkout.listResults, newValue];
    }
    console.log(itemWorkout);
    this.listSelectWorkout = this.listSelectWorkout.map((item) =>
      item.id === itemWorkout.id ? itemWorkout : item
    );
  };
}

export default Workout;
