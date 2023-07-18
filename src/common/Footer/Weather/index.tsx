import { useQuery } from "@tanstack/react-query";
import { getWeatherData } from "../../getData";
import { Box, Icon, Text, Wrapper } from "./styled";

export const Weather = () => {
  const { data } = useQuery(["weatherData"], getWeatherData);
  const weather = data?.current;
  return (
    <Wrapper>
      {weather && (
        <Box>
          <Text>{weather.temp_c}°C</Text>
          <Icon src={weather.condition.icon} />
        </Box>
      )}
    </Wrapper>
  );
};
