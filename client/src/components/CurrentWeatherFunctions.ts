type Coordinates = {
  latitude: number;
  longitude: number;
};

export async function getCityCoordinates(city: string | undefined) {
  const result = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
  if (result.ok) {
    const result_json = await result.json();
    const first_result = result_json.results?.[0];
    if (first_result) {
      const { latitude, longitude } = first_result;
      return { latitude: latitude, longitude: longitude };
    }
  }
  return { latitude: null, longitude: null };
}

export async function getWeatherForCoordinates(coordinates: Coordinates) {
  if (!coordinates.latitude || !coordinates.longitude) {
    return { min: null, max: null };
  }
  const result = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&forecast_days=1&daily=temperature_2m_min&daily=temperature_2m_max&timezone=CET`);
  if (result.ok) {
    const result_json = await result.json();
    const min = result_json.daily?.temperature_2m_min?.[0];
    const max = result_json.daily?.temperature_2m_max?.[0];
    return { min: min, max: max };
  } else {
    return { min: null, max: null };
  }
}
