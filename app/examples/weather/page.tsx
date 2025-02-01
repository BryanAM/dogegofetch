import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

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
      <p></p>
      {/* <Weather /> */}
    </section>
  );
}
