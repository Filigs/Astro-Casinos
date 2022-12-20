import Link from "next/link";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import React, { useState, useRef } from "react";
import { HiMenu as Burger, HiOutlineX as CloseBurger } from "react-icons/hi";
import Menu from "./Menu";

export default function NavBar() {
  const isBreakpoint = ViewportHook(850); //mobile viewport

  return (
    <nav>
      <div className="">
        {isBreakpoint ? (
          <>
            <div className="grid items-center justify-between grid-cols-3 ">
              {/* <Menu /> */}
            </div>

            <div id="navLogo">
              <Link href="/" passHref>
                VolaCrypto
              </Link>
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
