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
    <div className="items-center justify-center block w-full overflow-hidden text-center align-middle whitespace-nowrap ">
      <div>
        <ul className={"grid grid-flow-col items-center"}>{listItems}</ul>
      </div>
    </div>
  );
}
