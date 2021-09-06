import Specifications from './specifications'
import Workout from './workout'


class RootStore {
    constructor() {
        this.specifications = new Specifications(this)
        this.workout = new Workout(this)

    }
}

export default RootStore