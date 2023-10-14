import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  // Setup to make the RTK Query API available in all components
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch); // One time setup
export { store };

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/deleteUser";
export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
