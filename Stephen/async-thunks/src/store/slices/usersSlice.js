import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    // Fetch all users
    builder.addCase(fetchUsers.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Create User
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUser.pending, (state, _) => {
      state.isLoading = true;
    });

    // Delete User
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      // Add logic for removing user from data array
      state.data = state.data.filter((user) => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      console.log({ rejected_action: action });
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export { usersSlice };
