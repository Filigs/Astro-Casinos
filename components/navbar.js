// import ThemeSwitch from "./theme";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const icons =
  "m-0 font-navIcon width-navIcon height-navIcon text-dark dark:text-light";
export default function NavBar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 shadow-sm dark:shadow-slate-500 sticky lg:sticky min-w-full max-w-full inset-x-0 top-0 z-10">
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
              // className="object-center float-none w-logo h-logo"
            />
          </Link>
        </section>
        {/* search */}

        <section className={icons}>
          <FiSearch alt="Search" />
        </section>
      </div>
    </nav>
  );
}
