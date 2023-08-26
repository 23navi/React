import { useState, useEffect } from "react";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";

// function useCounter(initialCount = 0) {
// const [count, setCount] = useState(initialCount);

// useEffect(() => {
//   document.title = `You clicked ${count} times`;
// }, [count]);

// const incrementCount = () => {
//   setCount(count + 1);
// };

//   return { count, incrementCount };
// }

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleAddValueSubmit = async (value) => {
    setCount(count + +value);
    console.log(`Add value : ${value}`);
  };

  return (
    <div>
      <p className="text-2l font-bold">Count: {count} </p>
      <div className="flex items-center justify-center space-x-2 my-4 ">
        <Button primary onClick={() => incrementCount()}>
          Increment
        </Button>
        <Button danger onClick={() => decrementCount()}>
          Decrement
        </Button>
      </div>

      <SearchBar onSubmitCallback={handleAddValueSubmit} />
    </div>
  );
}
