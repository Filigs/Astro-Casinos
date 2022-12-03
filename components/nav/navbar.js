import Link from "next/link";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import NavLogo from "/public/logo.svg";
import Image from "next/image";
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
    <nav className="shadow-md sticky lg:sticky min-w-full max-w-full w-full inset-x-0 top-0  md:px-2 md:py-2 transition-all duration-150 bg-light dark:bg-bgContainerDark z-20">
      <div className="">
        {isBreakpoint ? (
          <div className="grid grid-cols-3 items-center justify-between ">
            <div ref={node} className="p-2 items-center">
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
            </div>
            <section className="scale-125">
              <Link href="/" passHref>
                <Image src={NavLogo} alt="Nav logo" />
              </Link>
            </section>
          </div>
        ) : (
          // breakpoint between mobile and desktop
          <div className="flex flex-col flex-wrap justify-between items-center px-3 py-1 text-center ">
            <Link href="/" passHref>
              <Image src={NavLogo} alt="Nav logo" />
            </Link>
            <>
              <NavLinks />
            </>
          </div>
        )}
      </div>
    </nav>
  );
}
