
import React,  { useEffect, useState } from 'react';

import './App.css';
import { MyMeals } from './MyMeals';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';


function App() {

const [ mymeal, setMyMeal ] = useState([]);
const [ title, setTitle ] = useState("");
const [ editing, setEditing] = useState(false);
const [ mealId, setMealId] = useState("")


useEffect(() =>{
  getAllMeals(setMyMeal)
},[])

const updatingInput = (_id, title) =>{
  setEditing(true)
  setTitle(title)
  setMealId(_id)
}


  return (
    <div>
      <h1>Meal Plan</h1>
      <input
      type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <button 
      disabled={!title}
      onClick=
      {editing ? () => editMeal (mealId, title, setMyMeal, setTitle, setEditing) :() => addMeal(title, setTitle, setMyMeal )}>
      {editing ? "Edit" : "Add"}
      </button>
      {mymeal.map((meal) => <MyMeals text={meal.title} key={meal._id}
      updatingInput={() => updatingInput(meal._id, meal.title)}
      deleteMeal={() => deleteMeal(meal._id, setMyMeal)}
      />
    
    )}

     
      
    </div>
  );
}

export default App;
