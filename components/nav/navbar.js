import Link from "next/link";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import ThemeSwitch from "../theme";

import React from "react";

import Menu from "./Menu";

export default function NavBar() {
  const isBreakpoint = ViewportHook(850); //mobile viewport

  return (
    <nav>
      <div className="">
        {isBreakpoint ? (
          <>
            <div className="flex items-center justify-center align-baseline justify-items-center ">
              <div className="shrink">
                <Menu />
              </div>

              <div className="text-center grow" id="navLogo">
                <Link href="/" passHref>
                  VolaCrypto
                </Link>
              </div>
              <div className="shrink">
                <button className="openBurger outline-0">
                  <ThemeSwitch />
                </button>
              </div>
            </div>
          </>
        ) : (
          // breakpoint between mobile and desktop
          <div className="flex flex-col flex-wrap items-center justify-between px-3 py-1 text-center ">
            <div id="navLogo">
              <Link href="/" passHref>
                VolaCrypto
              </Link>
            </div>
            <>
              <NavLinks />
            </>
          </div>
        )}
      </div>
    </nav>
  );
}
