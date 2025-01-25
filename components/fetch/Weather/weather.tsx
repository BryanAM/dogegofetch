import queryString from "querystring";
import { WeatherChart } from "./weatherChart";

type WeatherData = {
  [key in "new_york" | "san_diego"]: Array<{
    time: string;
    temperatureAvg: number;
  }>;
};

async function getWeather(location: string) {
  const API_KEY = process.env.WEATHER_API;
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

  try {
    const res = await fetch(`${weatherForecastURL}?${weatherForecastParams}`, {
      ...options,
    });
    return await res.json();
  } catch (err) {
    console.log("error getting weather data default to static data, ", err);
    return null;
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  })
    .format(date)
    .slice(0, 3);
  const day = date.getDate();
  return `${dayOfWeek} ${day}`;
}

// Just using any to save time becuase there is hundreds of types on this data
// in production we would actually use a type here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cleanedData = (rawData: any) => {
  return rawData.map(
    ({
      time,
      values,
    }: {
      time: string;
      values: { temperatureAvg: number };
    }) => ({
      time: formatDate(time),
      temperatureAvg: values.temperatureAvg,
    }),
  );
};

export async function Weather() {
  // const _rawNY = null;
  // const _rawSD = null;
  const [_rawNY, _rawSD] = await Promise.all([
    getWeather("10001 US"),
    getWeather("92115 US"),
  ]);

  let weatherData: WeatherData = {
    new_york: [
      { time: formatDate("2025-01-23T11:00:00Z"), temperatureAvg: 74.84 },
      { time: formatDate("2025-01-24T11:00:00Z"), temperatureAvg: 21.33 },
      { time: formatDate("2025-01-25T11:00:00Z"), temperatureAvg: 22.6 },
      { time: formatDate("2025-01-26T11:00:00Z"), temperatureAvg: 61.21 },
      { time: formatDate("2025-01-27T11:00:00Z"), temperatureAvg: 27.67 },
      { time: formatDate("2025-01-28T11:00:00Z"), temperatureAvg: 12.79 },
    ],
    san_diego: [
      { time: formatDate("2025-01-23T11:00:00Z"), temperatureAvg: 54.84 },
      { time: formatDate("2025-01-24T11:00:00Z"), temperatureAvg: 61.33 },
      { time: formatDate("2025-01-25T11:00:00Z"), temperatureAvg: 72.6 },
      { time: formatDate("2025-01-26T11:00:00Z"), temperatureAvg: 31.21 },
      { time: formatDate("2025-01-27T11:00:00Z"), temperatureAvg: 67.67 },
      { time: formatDate("2025-01-28T11:00:00Z"), temperatureAvg: 82.79 },
    ],
  };

  if (_rawNY && _rawSD) {
    const nyDailyWeather = {
      new_york: cleanedData(_rawNY?.timelines?.daily),
    };

    const sdDailyWeather = {
      san_diego: cleanedData(_rawSD?.timelines?.daily),
    };

    weatherData = { ...nyDailyWeather, ...sdDailyWeather };
  }

  return (
    <section className="h-full w-full">
      <h3 className="text-xl font-bold">Tomorrow Weather API</h3>
      <WeatherChart apiWeatherData={weatherData} />
    </section>
  );
}
