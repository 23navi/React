import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
  const animalList = [
    "dog",
    "cat",
    "horse",
    "snake",
    "bird",
    "fish",
    "lizard",
    "frog",
  ];
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
    <div>
      <button onClick={handleClick}>Click Me</button>
      {renderedAnimal}
    </div>
  );
}

export default App;
