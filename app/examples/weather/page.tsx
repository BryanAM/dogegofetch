import "server-only";

import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Weather as WeatherAPIChart } from "@/components/fetch/Weather/weather";
import sampleData from "./sampleData.json";
import SyntaxHighlighter from "react-syntax-highlighter";

import { CodeSnippet } from "@/components/code-snippet";

export default function Weather() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Weather</h1>
      <p className="text-muted-foreground">
        Using the tomorrow.io API, we can get and display a variety of weather
        metrics as display below.
      </p>
      <Link
        className={`${buttonVariants({ variant: "secondary" })} self-start`}
        href="https://docs.tomorrow.io/reference/historical-overview"
        target="__blank"
        rel="noopener noreferrer"
      >
        API Reference <ExternalLinkIcon />
      </Link>

      <h2 className="text-xl font-bold">Average Temperatures</h2>
      <p>
        The following data is taken from the Tomorrow.io weather API. Here we
        are simply displaying the average temperatures from New York and San
        Deigo as a time series graph.
      </p>
      <WeatherAPIChart />

      <h2 className="text-xl font-bold">Data Structure</h2>
      <p>
        The following is a sample response from the API. Here you can see the
        <strong> time</strong> and <strong> average temperature</strong> values
        we&apos;re using for our graph
      </p>
      <div className="max-h-56 overflow-scroll rounded bg-stone-100 p-2">
        <pre>
          <code>{JSON.stringify(sampleData, null, 2)}</code>
        </pre>
      </div>

      <h2 className="text-xl font-bold">Sample Component and Implementation</h2>
      <CodeSnippet relPath="components/fetch/Weather/weatherChart.tsx" />
    </section>
  );
}
