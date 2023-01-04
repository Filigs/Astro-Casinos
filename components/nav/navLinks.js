import ThemeSwitch from "../theme";
import SearchBar from "./searchBar/search";
import { links as navItems } from "./navItems";
import Link from "next/link";

export default function NavLinks() {
  const listItems = navItems.map((link) => {
    return (
      <Link key={link.id} href={link.href ? link.href : ""}>
        <li>{link.title}</li>
      </Link>
    );
  });
  return (
    <div className="flex items-center justify-around w-full px-4 py-2 overflow-hidden text-center align-middle whitespace-nowrap ">
      <div id="dark">
        <ThemeSwitch />
      </div>
      <div>
        <ul className={"grid grid-flow-col items-center"}>{listItems}</ul>
      </div>

      <div>
        <SearchBar />
      </div>
    </div>
  );
}
