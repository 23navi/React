import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/usersSlice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export { store };

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
