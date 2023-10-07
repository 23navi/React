import axios from "axios";
import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.person.firstName(),
  });
  console.log({ post_response: response });

  // Dev network request latency
  await pause(500); // 3 sec
  return response.data;
});

export { addUser };
