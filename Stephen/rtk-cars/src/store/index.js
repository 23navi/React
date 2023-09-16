import { configureStore } from "@reduxjs/toolkit";
import {
  carsSlice,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { formSlice, changeCost, changeName } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
    form: formSlice.reducer,
  },
});

export {
  store,
  addCar,
  removeCar,
  changeSearchTerm,
  formSlice,
  changeCost,
  changeName,
};
