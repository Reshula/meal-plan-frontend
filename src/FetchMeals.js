import axios from "axios";

const getAllMeals = (setMyMeal) =>{
    axios.get("https://meal-plan-backend-62hc.onrender.com")
    .then(({data}) => {console.log(data)
    setMyMeal(data)
})
}
const addMeal = (title, setTitle,setMyMeal ) =>{
    axios.post(`https://meal-plan-backend-62hc.onrender.com/saveMeals`, {title})
    .then((data) =>{
        console.log(data);
        setTitle("");
        getAllMeals(setMyMeal)
    })
   
}
const editMeal = (mealId, title, setMyMeal, setTitle,  setEditing) =>{
    axios.post(`https://meal-plan-backend-62hc.onrender.com/editMeal`, {_id: mealId, title})
    .then((data) =>{
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMyMeal)
    })

}
const deleteMeal = (_id, setMyMeal) =>{
    axios.post(`https://meal-plan-backend-62hc.onrender.com/deleteMeal`, {_id})
    .then((data) =>{
        console.log(data)
        getAllMeals(setMyMeal)
    })

}

export {getAllMeals, addMeal, editMeal, deleteMeal}