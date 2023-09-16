import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export { carsSlice, addCar, removeCar, changeSearchTerm };
