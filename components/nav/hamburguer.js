import { HiMenu } from "react-icons/hi";
import ThemeSwitch from "../theme";
import { links } from "./navItems";
import { slide as Menu } from "react-burger-menu";

const listItems = links.map((link) => {
  return <li key={link.title}>{link.title}</li>;
});

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"auto"}
      className="left-0 top-12"
    >
      <Links />
      <span className="">
        <ThemeSwitch />
      </span>
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <HiMenu />
  </div>
);

export const Links = () => (
  <div>
    <ul className="gap-2">{listItems}</ul>
  </div>
);

export default HamburgerMenu;
