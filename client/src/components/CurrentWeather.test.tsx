import { render, screen } from "@testing-library/react";
import CurrentWeather from "./CurrentWeather";
import { getCityCoordinates, getWeatherForCoordinates } from "./CurrentWeatherFunctions";

jest.mock("./CurrentWeatherFunctions", () => ({
  getCityCoordinates: jest.fn(),
  getWeatherForCoordinates: jest.fn(),
}));

describe ("CurrentWeather", () => {
  test("test what happens if no temperature is found", async () => {
    (getCityCoordinates as jest.Mock).mockResolvedValue({ latitude: null, longitude: null });
    (getWeatherForCoordinates as jest.Mock).mockResolvedValue({ min: null, max: null });
    render (
      <CurrentWeather city="Qwerty" />
    );
    const text = await screen.findByText("Weather not found for this city!");
    expect(text).toBeInTheDocument();
  });
  test("test what happens if temperature is found", async () => {
    (getCityCoordinates as jest.Mock).mockResolvedValue({ latitude: 42, longitude: 42 });
    (getWeatherForCoordinates as jest.Mock).mockResolvedValue({ min: 10, max: 20 });
    render (
      <CurrentWeather city="Rome" />
    );
    const min_temperature = await screen.findByText("Minimum temperature: 10");
    expect(min_temperature).toBeInTheDocument();
    const max_temperature = await screen.findByText("Maximum temperature: 20");
    expect(max_temperature).toBeInTheDocument();
  });
});
