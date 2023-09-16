import { configureStore } from "@reduxjs/toolkit";
import { carsSlice } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer,
  },
});

export { store };
