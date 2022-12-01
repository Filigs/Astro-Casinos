import Link from "next/link";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import { FiSearch } from "react-icons/fi";
import NavLogo from "/public/logo.svg";
import HamburgerMenu from "./hamburguer";
import Image from "next/image";

export default function NavBar() {
  const isBreakpoint = ViewportHook(850); //mobile viewport

  return (
    <nav className="shadow-md sticky lg:sticky min-w-full max-w-full w-full inset-x-0 top-0 px-1 md:px-2 md:py-1 transition-all duration-150 bg-light dark:bg-bgContainerDark">
      <>
        {/* Hamburguer Icon (Mobile Menu) */}
        {isBreakpoint ? (
          <div className="grid grid-flow-col items-center justify-between z-50">
            <section>
              <HamburgerMenu />
            </section>
            <section className="">
              <Link href="/" passHref>
                <Image src={NavLogo} alt="Nav logo" />
              </Link>
            </section>
            <section>
              <FiSearch
                className={
                  "font-navIcon width-navIcon height-navIcon text-dark dark:text-light text-center w-6 h-6 "
                }
                alt="Search"
              />
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
      </>
    </nav>
  );
}
