import Link from "next/link";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import { useOnClickOutside } from "/components/hooks";
import React, { useState, useRef } from "react";
import { HiMenu as Burger, HiOutlineX as CloseBurger } from "react-icons/hi";
import Menu from "./Menu";

export default function NavBar() {
  const isBreakpoint = ViewportHook(850); //mobile viewport
  // side bar on toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const node = useRef();
  const closeMenu = () => {
    document.getElementById("nav-drawer").style.width = "0";
    setNavbarOpen(false);
  };
  const handleToggle = () => {
    document.getElementById("nav-drawer").style.width = "250px";
    setNavbarOpen((prev) => !prev);
  };
  useOnClickOutside(node, () => setNavbarOpen(false));

  // end of side bar
  return (
    <nav>
      <div className="">
        {isBreakpoint ? (
          <div className="grid grid-cols-3 items-center justify-between ">
            {
              <Burger id="burger" />

              /* <div ref={node} className="p-2 items-center">
              {navbarOpen ? (
                <button
                  onClick={closeMenu}
                  data-drawer-dismiss="nav-drawer"
                  aria-controls="nav-drawer"
                  type="button"
                >
                  <CloseBurger className="text-xl" />
                </button>
              ) : (
                <button
                  data-drawer-target="nav-drawer"
                  data-drawer-show="nav-drawer"
                  aria-controls="nav-drawer"
                  onClick={handleToggle}
                >
                  <Burger className="text-xl" />
                </button>
              )}
              <Menu />
            </div> */
            }
            <div id="navLogo">
              <Link href="/" passHref>
                VolaCrypto
              </Link>
            </div>
          </div>
        ) : (
          // breakpoint between mobile and desktop
          <div className="flex flex-col flex-wrap justify-between items-center px-3 py-1 text-center ">
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
