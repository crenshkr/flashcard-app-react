import "./App.css";
import { Card } from "./Card";

const arrayOfQandAs = [
  { question: "What goes quack", answer: "A duck" },
  { question: "What goes moo", answer: "A cow" },
  { question: "What goes woof", answer: "A dog" },
  { question: "What goes meow", answer: "A cat" },
];


function pickRandomEntry(providedArray) {
  const numberOfEntries = providedArray.length;
  const randomEntry = Math.floor(Math.random() * numberOfEntries);
  return providedArray[randomEntry];
}

const randomQAndAObject = pickRandomEntry(arrayOfQandAs)

const {question, answer} = randomQAndAObject

//This is the same (destructuring)

// const randomQuestion = question
// const randomAnswer = answer


function App() {
  return (
    <div className="App">
      <h1>{question}</h1>
      <Card question={question} answer={answer} />
    </div>
  );
}



export default App;
