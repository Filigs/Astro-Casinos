import Link from "next/link";
import { links } from "./navItems";
import React, { useState } from "react";
import { HiMenu as Burger, HiOutlineX as CloseBurger } from "react-icons/hi";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

export default function Menu() {
  // link list for drawer
  const itemList = links.map((link) => (
    <li key={link.title} className="drawerText">
      <Link href="/">{link.title}</Link>
    </li>
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
        >
          <>
            <ul>{itemList}</ul>
          </>
        </Drawer>
      </button>
    </>
  );
}
