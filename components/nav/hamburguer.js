import { HiMenu } from "react-icons/hi";
import ThemeSwitch from "../theme";
import { links } from "./navItems";
import { slide as Menu } from "react-burger-menu";

const listItems = links.map((link) => {
  return (
    <li key={link.title} className="gap-4">
      {link.title}
    </li>
  );
});

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12 bm-menu"
    >
      <Links />
      <>
        <ThemeSwitch className="text-center" />
      </>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="items-center">
    <HiMenu className="bm-burger-button" />
  </div>
);

export const Links = () => (
  <ul className="gap-4 items-center bm-item-list">{listItems}</ul>
);

export default HamburgerMenu;
