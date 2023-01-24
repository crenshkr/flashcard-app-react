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

function App() {
  return (
    <div className="App">
      <Card question="What is your name?" answer="Khalil" />
    </div>
  );
}

export default App;
