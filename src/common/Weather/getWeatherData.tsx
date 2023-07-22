import axios from "axios";

export const getWeatherData = async () => {
    const response = await axios.get(
      'https://api.weatherapi.com/v1/current.json?key=5a67856953ee46f7a38143139231307&q=NY'
    );
    return response.data;
  };