import HackerNews from "@/components/fetch/HackerNews/hackerNews";
import { Weather } from "@/components/fetch/Weather/weather";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Eco from "@/components/ws/echo/eco";

export default function LPCarousel() {
  return (
    <Carousel className="col-span-6 col-start-2 row-start-4 mt-12 md:col-span-4 md:col-start-3">
      <CarouselContent className="h-96">
        <CarouselItem className="h-full overflow-auto">
          <HackerNews />
        </CarouselItem>
        <CarouselItem className="h-96">
          <Weather />
        </CarouselItem>
        <CarouselItem className="">
          <Eco />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
