import { useSelector } from "react-redux";

function CarValue() {
  const totalValue = useSelector((state) => {
    const { cars, searchTerm } = state.cars;
    return cars
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => {
        return acc + car.cost;
      }, 0);
  });
  return <div className="car-value">Total Cost: ${totalValue}</div>;
}

export default CarValue;
