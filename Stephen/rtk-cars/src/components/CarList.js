import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";
function CarList() {
  const dispatch = useDispatch();

  const carList = useSelector((state) => {
    const { cars, searchTerm } = state.cars;
    if (!searchTerm) {
      return cars;
    }
    return cars.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };
  const carListRender = carList.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={(event) => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {carListRender} <hr />
    </div>
  );
}

export default CarList;
