import Link from "next/link";
import { links } from "./navItems";

export default function Menu() {
  const itemList = links.map((link) => (
    <li key={link.title}>
      <Link href="/" className="gap-1">
        {link.title}
      </Link>
    </li>
  ));
  return (
    <div
      className="overflow-y-auto fixed top-0 left-0 z-40 p-4 w-full max-w-xs h-screen transition-transform -translate-x-full"
      tabIndex="-1"
      aria-labelledby="drawer-label"
      aria-hidden="true"
      id="nav-drawer"
    >
      <ul className="grid grid-flow-row">{itemList}</ul>
    </div>
  );
}
