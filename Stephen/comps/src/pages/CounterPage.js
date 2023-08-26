import { useState, useEffect } from "react";

export default function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
