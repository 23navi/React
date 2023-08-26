import { useState, useEffect } from "react";

function useSomething(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return { count, handleClick };
}

export default function CounterPage({ initialCount }) {
  const { count, handleClick } = useSomething(initialCount);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
