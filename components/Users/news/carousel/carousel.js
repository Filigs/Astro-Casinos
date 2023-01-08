import NewsCarouselCard from "./card";
import { ViewportHook } from "components/viewportHook";
import React from "react";

export default function NewsCarousel() {
  const isBreakpoint = ViewportHook(850); //mobile
  return (
    <>
      {isBreakpoint ? (
        <>
          <NewsCarouselCard />
        </>
      ) : (
        <div className="grid grid-cols-3">
          <NewsCarouselCard />
          <NewsCarouselCard />
          <NewsCarouselCard />
        </div>
      )}
    </>
  );
}
