// import ThemeSwitch from "./theme";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { ViewportHook } from "../viewportHook";
import NavLinks from "./navLinks";
import { icons } from "./icons";
import { FiSearch } from "react-icons/fi";
import NavLogo from "./logo";

export default function NavBar() {
  const isBreakpoint = ViewportHook(850); //mobile viewport
  return (
    <nav className="shadow-md sticky lg:sticky min-w-full max-w-full w-full inset-x-0 top-0 z-10 md:px-2 md:py-1 transition-all duration-150 bg-light dark:bg-light">
      <>
        {/* Hamburguer Icon (Mobile Menu) */}
        {isBreakpoint ? (
          <div className="flex justify-between flex-nowrap items-center gap-2">
            <>
              <GiHamburgerMenu alt="Mobile Menu" className={icons} />
            </>
            <>
              <Link href="/" passHref>
                <NavLogo />
              </Link>
            </>
            <>
              <FiSearch className={icons} alt="Search" />
            </>
          </div>
        ) : (
          // breakpoint between mobile and desktop
          <div className="flex flex-col flex-wrap justify-between items-center px-3 py-1 text-center ">
            <Link href="/" passHref>
              <NavLogo />
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
