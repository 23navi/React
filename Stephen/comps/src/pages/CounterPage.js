import { useState, useEffect } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return { count, incrementCount };
}

export default function CounterPage({ initialCount }) {
  const { count, incrementCount } = useCounter(initialCount);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => incrementCount()}>Click me</button>
    </div>
  );
}
