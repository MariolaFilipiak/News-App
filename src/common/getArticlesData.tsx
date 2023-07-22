import axios from "axios";

const apiKey = "6tcR78NwMvqJfFoeHZgcDz1bQbs15Qzu";

export const getArticlesData = async (searchQuery: any, page: number) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&sort=newest&page=${page}&api-key=${apiKey}`
  );
  return response.data.response.docs;
};

export const getCategory = async (
  category: string,
  searchQuery: any,
  page: number
) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&q=${category}&sort=newest&page=${page}&api-key=${apiKey}`
  );
  return response.data.response.docs;
};
