import Link from "next/link";
import { links } from "./navItems";
import React, { useState } from "react";
import { HiMenu as Burger } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Menu() {
  // link list for drawer
  const itemList = links.map((link) => (
    <Link key={link.title} href={"/" + link.title}>
      <li className="drawerText">{link.title}</li>
    </Link>
  ));
  // toggle
  // Menu hook
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        type="button"
        className="openBurger"
        id="openMenu"
      >
        <Burger />

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          enableOverlay="true"
          zIndex={30}
          overlayOpacity={0.8}
          className="text-dark dark:text-light bg-borderLight dark:bg-borderDark"
        >
          <>
            <ul>{itemList}</ul>
          </>
        </Drawer>
      </button>
    </>
  );
}
