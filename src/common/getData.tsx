import axios from "axios";

export const getData = async (searchQuery: any) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&sort=newest&api-key=6tcR78NwMvqJfFoeHZgcDz1bQbs15Qzu`
  );
  return response.data.response.docs;
};

export const getCategory = async (category: string, searchQuery: any) => {
  const response = await axios.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchQuery}&q=${category}&sort=newest&api-key=a77Wg2GL8hchlSATWlFHvpdAPGU8w1O3`
  );
  return response.data.response.docs;
};
export const getWeatherData = async () => {
  const response = await axios.get(
    'https://api.weatherapi.com/v1/current.json?key=5a67856953ee46f7a38143139231307&q=warsaw'
  );
  return response.data;
};