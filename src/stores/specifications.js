import { makeAutoObservable } from "mobx"

class Specifications {
    listHeight = []
    listWeight = []

    formSpecification = {
        name:'',
        weight: null,
        height: null,
        birthday: null
    }

    get heightList() {
       let list = []
       for (let i = 100; i<=200; i++){
           list =  [...list,i]
       }
       this.listHeight = list;
     }

    get weightList() {
       let list = []
       for (let i = 30; i<=150; i++){
           list =  [...list,i]
       }
       this.listWeight = list;
     }


   constructor() {
       this.heightList
       this.weightList
       makeAutoObservable(this)
   }

   handleChange = (type,value) =>{
    this.formSpecification[type] = value
}     

 
}

export default Specifications