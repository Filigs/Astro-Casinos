// import ThemeSwitch from "./theme";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import FeaturedCrypto from "./featuredCrypto";

const icons = "m-0 font-navIcon width-navIcon height-navIcon text-dark";

export default function NavBar() {
  return (
    <nav className="bg-light shadow-sm sticky lg:sticky min-w-full max-w-full inset-x-0 top-0 z-10">
      <div className="flex flex-row flex-wrap justify-between items-center p-4 text-center mx-3">
        {/* Hamburguer Icon (Mobile Menu) */}
        <section className={icons}>
          <GiHamburgerMenu alt="Mobile Menu" className={icons} />
        </section>
        {/* logo */}
        <section className="overflow-auto">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
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
      <div className="flex flex-nowrap shrink overflow-x-auto whitespace-nowrap text-center align-middle py-4">
        <FeaturedCrypto />
      </div>
    </nav>
  );
}
