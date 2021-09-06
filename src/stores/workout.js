import { makeAutoObservable } from "mobx"
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
class Workout {
    listWorkout = ["отжимания", "подтягивания"]
    listSelectWorkout = [{
        name: '',
        limit: null,
        id: null,
        leftToDo: null,
        done: null,
    }]
    constructor() {
        makeAutoObservable(this)
    }

    onSelectWorkout = (name) => {
        const newItemListWorkout = {
            name,
            id: nanoid(),
            limit: null,
            leftToDo: null,
            done: null,

        }
        this.listSelectWorkout = [...this.listSelectWorkout, newItemListWorkout]
    }
    onRemoveSelectWorkout = (idx) => {
        this.listSelectWorkout = this.listSelectWorkout.filter(({ id }) => id !== idx)

    }

}

export default Workout