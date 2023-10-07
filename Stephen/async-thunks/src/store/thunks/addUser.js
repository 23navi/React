import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {});
  console.log({ response });

  // Dev network request latency
  await pause(3000); // 3 sec
  return response.data;
});

export { addUser };
