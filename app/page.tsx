import HackerNews from "@/components/fetch/HackerNews/hackerNews";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="grid grid-cols-8 sm:items-start">
        <h1 className="col-span-8 text-3xl font-bold md:col-span-6 lg:col-span-4">
          Fetch anything on the front end with ease
        </h1>
        <h2 className="col-span-8 col-start-1 pb-2 md:col-span-6 lg:col-span-4 lg:col-start-1">
          Learn how to retrieve anything from the internet with ease using
          dozens of interactive examples. Master web requests quickly and unlock
          the full potential of APIs!
        </h2>
        <Button className="col-span-2 md:col-span-1 md:col-start-1" asChild>
          <Link href="/docs">Go to Docs!</Link>
        </Button>

        <Carousel className="col-span-4 col-start-3 row-start-4 mt-12">
          <CarouselContent>
            <CarouselItem>
              <HackerNews />
            </CarouselItem>
            <CarouselItem>HELLO2</CarouselItem>
            <CarouselItem>HELLO3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
