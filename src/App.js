import "./App.css";
import { Card } from "./Card";
import { pickRandomEntry } from "./utils/pickRandomEntry";
import React, { useState } from 'react';
import { arrayOfQandAs } from "./utils/randomQandA"




const randomQAndAObject = pickRandomEntry(arrayOfQandAs)

const {question, answer} = randomQAndAObject


function App() {
//Going to useState here
//Whenever state gets updated, a component re-renders
const [singleQAndA, setSingleQAndA] = useState({question: "first", answer:"first"})


function handleOnCLick() {
  const randomSelectedQAndA = pickRandomEntry(arrayOfQandAs)
  setSingleQAndA(randomSelectedQAndA)
  
  
}

console.log(singleQAndA.question)

  return (
    <div className="App">
      <h1>FLASHCARDS</h1>
      <Card question={singleQAndA.question} answer={singleQAndA.answer} />
      <button onClick={handleOnCLick}>New Question</button>
    </div>
  );
}



export default App;
