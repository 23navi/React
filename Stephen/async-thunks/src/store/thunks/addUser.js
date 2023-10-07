import axios from "axios";
import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
console.log({ name: faker.person.firstName() });
const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.person.firstName(),
  });
  console.log({ response });

  // Dev network request latency
  await pause(3000); // 3 sec
  return response.data;
});

export { addUser };
