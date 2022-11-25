// import ThemeSwitch from "./theme";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./navLinks";

const icons = "m-0 font-navIcon width-navIcon height-navIcon text-dark";

export default function NavBar() {
  return (
    <nav className="bg-light shadow-md shadow-gray-200 sticky lg:sticky min-w-full max-w-full w-full inset-x-0 top-0 z-10">
      <div className="flex flex-row flex-wrap justify-between items-center p-4 text-center ">
        {/* Hamburguer Icon (Mobile Menu) */}
        <section className={icons}>
          <GiHamburgerMenu alt="Mobile Menu" className={icons} />
        </section>
        {/* logo */}
        <section className="overflow-auto justify-center">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
              priority="true"

              // width={40}
              // height={40}
            />
          </Link>
        </section>
        {/* search */}

        <section className={icons}>
          <FiSearch alt="Search" />
        </section>
      </div>
      <section>
        <NavLinks />
      </section>
    </nav>
  );
}
