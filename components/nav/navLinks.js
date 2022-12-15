import ThemeSwitch from "../theme";
import SearchBar from "./searchBar/search";
import { links as navItems } from "./navItems";
import Link from "next/link";

export default function NavLinks() {
  const listItems = navItems.map((link) => {
    return (
      <li key={link.id}>
        <Link href={link.href ? link.href : ""}>{link.title}</Link>
      </li>
    );
  });
  return (
    <div className="grid grid-flow-col-dense text-lg justify-around overflow-hidden whitespace-nowrap text-center items-center align-middle p-4 w-full">
      <div id="dark">
        <ThemeSwitch />
      </div>
      <div className="">
        <ul className={"grid grid-flow-col items-center"}>{listItems}</ul>
      </div>

      <div>
        <SearchBar />
      </div>
    </div>
  );
}
