"use client";
import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type WeatherData = {
  [key in keyof typeof chartConfig]: Array<{
    time: string;
    temperatureAvg: number;
  }>;
};

const chartConfig = {
  new_york: {
    label: "New York",
    color: "hsl(var(--chart-2))",
  },
  san_diego: {
    label: "San Diego",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function WeatherChart({
  apiWeatherData,
}: {
  apiWeatherData: WeatherData;
}) {
  const [activeChart, setActiveChart] =
    useState<keyof typeof chartConfig>("new_york");
  const [weatherData, setWeatherData] = useState<
    WeatherData["new_york" | "san_diego"]
  >(apiWeatherData.new_york);

  const onClick = (key: keyof typeof chartConfig) => {
    setActiveChart(key);
    setWeatherData(apiWeatherData[key]);
  };

  return (
    <Card>
      <CardHeader className="grid grid-cols-8 space-y-0 p-0">
        <div className="col-span-4 m-4">
          <CardTitle className="text-sm lg:text-xl">
            Average Temperatures in {chartConfig[activeChart].label}
          </CardTitle>
          <CardDescription>
            {weatherData[0].time} ~ {weatherData[weatherData.length - 1].time}{" "}
          </CardDescription>
        </div>
        {Object.entries(chartConfig).map(([key, value]) => {
          const typedKey = key as keyof typeof chartConfig;
          return (
            <button
              key={typedKey}
              data-active={activeChart === typedKey}
              className="col-span-2 border-l-2 transition-all duration-700 ease-in data-[active=true]:bg-primary/10"
              onClick={() => onClick(typedKey)}
            >
              <span className="text-sm font-bold leading-none lg:text-xl">
                {value.label}
              </span>
            </button>
          );
        })}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-40 w-full">
          <LineChart
            accessibilityLayer
            data={weatherData}
            margin={{
              left: -24,
              right: 12,
              top: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 6)}
              interval="preserveStartEnd"
            />
            <YAxis
              domain={[10, 85]}
              stroke="hsl(var(--border))"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="temperatureAvg"
              type="natural"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={{
                fill: `var(--color-${activeChart})`,
              }}
              activeDot={{
                r: 6,
              }}
            ></Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
