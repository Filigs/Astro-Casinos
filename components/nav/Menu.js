import Link from "next/link";
import { links } from "./navItems";
import React, { useState, useRef } from "react";
import { useOnClickOutside } from "/components/hooks";
import { HiMenu as Burger, HiOutlineX as CloseBurger } from "react-icons/hi";

export default function Menu() {
  // Menu hook
  const [navbarOpen, setNavbarOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setNavbarOpen(false));

  // toggle
  const overlay = document.getElementById("mobileOverlay");
  const openMenu = () => {
    setNavbarOpen((prev) => !prev);
    overlay.style.width = "33%";
    // item list for burger menu

    const itemList = links.map((link) => (
      <li key={link.title}>
        <Link href="/" className="gap-1">
          {link.title}
        </Link>
      </li>
    ));
    return (
      <>
        <div className="mobileOverlay" ref={node}>
          <div class="mobileOverlayContent">
            <ul className="grid grid-flow-row">{itemList}</ul>
          </div>
        </div>
      </>
    );
  };

  const closeMenu = () => {
    setNavbarOpen(false);
    overlay.style.width = "0%";
  };

  return (
    <>
      {navbarOpen ? (
        <>
          <a onClick={closeMenu} type="button" id="closeMenu">
            <CloseBurger className="closeBurger" />
          </a>
        </>
      ) : (
        <>
          <a onClick={openMenu} type="button" id="openMenu">
            <Burger className="text-xl" />
          </a>
        </>
      )}
    </>
  );
}
