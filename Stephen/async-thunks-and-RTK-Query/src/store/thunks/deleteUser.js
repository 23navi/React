import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const deleteUser = createAsyncThunk("users/delete", async (user) => {
  console.log({ user });
  const response = await axios.delete(
    `http://localhost:3005/users/${user.id}`,
    {}
  );
  console.log({ delete_response: response }); // =>{}
  // Dev network request latency
  await pause(500); // 3 sec

  return user;
});

export { deleteUser };
