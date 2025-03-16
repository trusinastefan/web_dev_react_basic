import React, { useState, useEffect } from "react";
import { getCityCoordinates, getWeatherForCoordinates } from "./CurrentWeatherFunctions";

type CurrentWeatherProps = {
  city?: string;
};

function useFetchData(city: string | undefined) {
  const [data, setData] = useState({ min: null, max: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function actionGetWeather(city: string | undefined) {
      try {
        const city_coordinates = await getCityCoordinates(city);
        const weather = await getWeatherForCoordinates(city_coordinates);
        if (weather.min !== null && weather.max !== null) {
          setData(weather);
        } else {
          throw new Error("Weather not found for this city!");
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    actionGetWeather(city);
  }, [city]);

  return { data, loading, error };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const { data, loading, error } = useFetchData(city);
  if (loading) {
    return <div>Loading weather...</div>;
  } else if (error !== null) {
    return <div>{error.message}</div>;
  } else {
    return (
      <div>
        <div>{`Minimum temperature: ${data.min}`}</div>
        <div>{`Maximum temperature: ${data.max}`}</div>
      </div>
    );
  }
};

export default CurrentWeather;
