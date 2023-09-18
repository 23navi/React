import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName, addCar } from "../store";
function CarForm() {
  const name = useSelector((state) => {
    return state.form.name;
  });
  const cost = useSelector((state) => {
    return state.form.cost;
  });
  const dispatch = useDispatch();
  function handleNameChange(event) {
    console.log(event.target.value);
    dispatch(changeName(event.target.value));
  }
  function handleCostChange(event) {
    dispatch(changeCost(parseInt(event.target.value) || 0));
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add car</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            ></input>
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
