import { ViewportHook } from "../viewportHook";
import { NewsCardCarousel } from "./newsCard";
import React from "react";

export default function NewsCarousel() {
  const isBreakpoint = ViewportHook(850); //mobile

  return (
    <div>
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
    </div>
  );
}
