import { useState, useEffect, useCallback } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  function logCounter() {
    setCounter(10);
  }

  const stableLogCounter = useCallback(logCounter, []);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {counter}
      <button onClick={() => stableLogCounter()}>Console log</button>
    </div>
  );
}

export default App;
