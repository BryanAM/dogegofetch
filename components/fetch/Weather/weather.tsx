import queryString from "querystring";
import { WeatherChart } from "./weatherChart";

async function getWeather() {
  const API_KEY = process.env.WEATHER_API;
  const location = "new york";
  const units = "imperial";
  const timestep = ["1d"];
  const weatherForecastURL = "https://api.tomorrow.io/v4/weather/forecast";

  const weatherForecastParams = queryString.stringify(
    {
      location,
      timestep,
      units,
    },
    "&",
  );

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      apikey: API_KEY || "",
    },
  };

  // try {
  //   const res = await fetch(
  //     `${weatherForecastURL}?${weatherForecastParams}`,
  //     options,
  //   );
  //   return await res.json();
  // } catch (err) {
  //   console.log("error getting weather data, ", err);
  //   return null;
  // }
}

export async function Weather() {
  // const weatherData = await getWeather();
  // const dailyWeatherForecastData = weatherData?.timelines?.daily;
  // console.log(dailyWeatherForecastData);
  // const cleanedData = dailyWeatherForecastData.map(({ time, values }) => ({
  //   time,
  //   temperatureAvg: values.temperatureAvg,
  // }));

  return (
    <section className="h-full w-full">
      <h3 className="text-xl font-bold">Tomorrow Weather API</h3>
      <WeatherChart />
    </section>
  );
}
