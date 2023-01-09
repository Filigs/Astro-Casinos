import NewsCarouselCard from "./card";
import { ViewportHook } from "components/viewportHook";
import React from "react";

export default function NewsCarousel() {
  const isBreakpoint = ViewportHook(640); //mobile
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {isBreakpoint ? ( //mobile
        <ul className="flex w-full gap-2 py-4 my-4 overflow-x-scroll lg:items-stretch flex-nowrap snap-x snap-mandatory">
          {array.map((item) => (
            <li key={item} className="block snap-start">
              <NewsCarouselCard />
            </li>
          ))}
        </ul>
      ) : (
        // desktop
        <ul className="flex w-full gap-2 py-4 my-4 overflow-x-scroll lg:items-stretch flex-nowrap snap-x snap-mandatory scroll-smooth">
          {array.map((item) => (
            <li key={item} className="block snap-start">
              <NewsCarouselCard />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
