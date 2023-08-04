import axios from "axios";

const searchImage = async (term = "cars") => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID cgLBgNtizhN0b81RxMkXOOFjRJ_JZ1n_rk-Bs54CjqE",
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response;
};

export default searchImage;
