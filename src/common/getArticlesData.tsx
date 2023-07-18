import axios from "axios";

const apiKey = "6tcR78NwMvqJfFoeHZgcDz1bQbs15Qzu"

export const getArticlesData = async (searchQuery: any) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&sort=newest&api-key=${apiKey}`
  );
  return response.data.response.docs;
};

export const getCategory = async (category: string, searchQuery: any) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&q=${category}&sort=newest&api-key=${apiKey}`
  );
  return response.data.response.docs;
};
