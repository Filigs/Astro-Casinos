import { Carousel } from "flowbite-react";
import { ViewportHook } from "../viewportHook";
import { NewsCardCarousel } from "./newsCard";
import React from "react";

export default function NewsCarousel() {
  const isBreakpoint = ViewportHook(850); //mobile

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        className="border-y-2 border-borderLight dark:border-borderDark"
        leftControl={false}
        rightControl={false}
      >
        <div className="flex mx-4 rounded-xl">
          {isBreakpoint ? (
            <>
              {/*   mobile */}
              {NewsCardCarousel}
            </>
          ) : (
            <>
              {/* desktop */}

              {NewsCardCarousel}
              {NewsCardCarousel}
              {NewsCardCarousel}
            </>
          )}
        </div>
      </Carousel>
    </div>
  );
}
