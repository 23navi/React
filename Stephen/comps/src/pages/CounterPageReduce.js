import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_VALUE = "increment_value";
const DECREMENT_VALUE = "decrement_value";
const VALUE_TO_ADD = "value_to_add";
const VALUE_TO_CHANGE = "value_to_change";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_VALUE:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_VALUE:
      return {
        ...state,
        count: state.count - 1,
      };

    case VALUE_TO_ADD:
      return {
        ...state,
        count: state.count + action.payload.valueToAdd,
        valueToAdd: 0,
      };
    case VALUE_TO_CHANGE:
      return {
        ...state,
        valueToAdd: action.payload.valueToAdd,
      };
    default:
      console.error("No matching action type");
      return {
        state,
      };
  }
};

function CounterPageReduce({ initialCount }) {
  //   const [count, setCount] = useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    //     setCount(count + 1);
    dispatch({ type: INCREMENT_VALUE });
  };
  const decrement = () => {
    //     setCount(count - 1);
    dispatch({ type: DECREMENT_VALUE });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: VALUE_TO_CHANGE, payload: { valueToAdd: value } });

    //     setValueToAdd(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: VALUE_TO_ADD,
      payload: { valueToAdd: state.valueToAdd },
    });
    //     setCount(count + valueToAdd);
    //     setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPageReduce;
