import ThemeSwitch from "./theme";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.svg";
import { FiSearch } from "react-icons/fi";

const icons = "m-0 font-navIcon";
export default function NavBar() {
  return (
    <nav className="bg-slate-100 dark:bg-slate-800 shadow-sm dark:shadow-slate-500 sticky lg:sticky min-w-full max-w-full inset-x-0 top-0 z-10">
      <div className="flex flex-row flex-wrap justify-between items-center p-4">
        <div className="overflow-auto">
          <Link href="/" passHref>
            <Image
              src={logo}
              alt="Logo"
              // width={40}
              // height={40}
              className="float-left w-logo h-logo"
            />
          </Link>
        </div>

        <div className="text-dark dark:text-light inline-flex items-center border-0 transition-none">
          <section
            className={icons}
            alt="Switch color theme between dark and light mode"
          >
            <ThemeSwitch />
          </section>
          <section className={icons}>
            {/* <Link href="/contact-form" passHref> */}
            <FiSearch alt="Search" />
            {/* </Link> */}
          </section>
        </div>
      </div>
    </nav>
  );
}
