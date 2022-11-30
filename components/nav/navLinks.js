import ThemeSwitch from "../theme";
import { FiSearch } from "react-icons/fi";
import { icons } from "./icons";
import { links as navItems } from "./navItems";
import Link from "next/link";

export default function NavLinks() {
  const listItems = navItems.map((link) => {
    return (
      <li
        key={link.id}
        className="font-light text-sm whitespace-nowrap text-dark dark:text-dark mx-auto"
      >
        <Link href="/">{link.title}</Link>
      </li>
    );
  });
  return (
    <section className="flex space-x-6 text-sm md:text-base md:space-x-12 justify-center  overflow-hidden whitespace-nowrap text-center items-center align-middle p-4 transition-all mx-auto ">
      <ul className={"grid grid-flow-col gap-4 items-center mx-auto"}>
        {listItems}
      </ul>

      <ul className="flex gap-4">
        <li>
          <ThemeSwitch />
        </li>

        <li className={icons}>
          <FiSearch alt="Search" />
        </li>
      </ul>
    </section>
  );
}
