import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./App.css";

const getRandomAnimal = () => {
  const animalList = ["bird", "cat", "cow", "dog", "horse", "gator"];
  const randomIndex = Math.floor(Math.random() * animalList.length);
  return animalList[randomIndex];
};

function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimal}</div>
    </div>
  );
}

export default App;
