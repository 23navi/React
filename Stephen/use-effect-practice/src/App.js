import { useState, useCallback, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  // function logCounter() {
  //   setCounter(10);
  // }

  // const stableLogCounter = useCallback(logCounter, []);

  useEffect(() => {
    document.body.onclick = () => {
      console.log(counter);
    };
  }, [counter]);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default App;
