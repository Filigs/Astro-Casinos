import { Carousel } from "flowbite-react";
import { ViewportHook } from "../viewportHook";
import { NewsCardCarousel } from "./newsCard";
import React from "react";

export default function NewsCarousel() {
  const isBreakpoint = ViewportHook(850); //mobile

  return (
    <section className="h-56 lg:h-64 xl:h-80 2xl:h-96 rounded-xl">
      <Carousel indicators={false}>
        <div className="flex mx-auto">
          {isBreakpoint ? (
            <div className="mx-auto">
              {/*   mobile */}

              <>{NewsCardCarousel}</>
              <>{NewsCardCarousel}</>
              <>{NewsCardCarousel}</>
            </div>
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
    </section>
  );
}
