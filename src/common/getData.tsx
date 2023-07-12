import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=ad6a0b2fb94c4421915b2e62d6e20ece`
  );
  return response.data;
};

export const getCountryData = async (country: string) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=ad6a0b2fb94c4421915b2e62d6e20ece`
  );
  return response.data;
};
export const getCategory = async (category: string) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=ad6a0b2fb94c4421915b2e62d6e20ece`
  );
  return response.data;
};
