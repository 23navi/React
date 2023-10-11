import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const deleteUser = createAsyncThunk("users/delete", async (user) => {
  try {
    const response = await axios.delete(
      `http://localhost:3005/users/${user.id}}`,
      {}
    );
    console.log({ delete_response: response }); // =>{}
    // Dev network request latency
    await pause(500); // 3 sec

    // response.data will be {} so we will be sending user directly on successful deletion
    //     return response.data;
    return user;
  } catch (err) {
    console.log({ user_delete_error: err.code });
  }
});

export { deleteUser };
