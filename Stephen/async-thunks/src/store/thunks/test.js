// import axios from "axios";
const axios = require("axios");
const fun = async () => {
  try {
    const response = await axios.delete(
      `http://localhost:3005/users/${1}}`,
      {}
    );
    console.log({ delete_response: response.code }); // =>{}
  } catch (err) {
    console.log(err.code);
  }
};

fun();
