import Link from "next/link";
import { links } from "./navItems";
import React from "react";

export default function Menu() {
  // item list for burger menu
  const itemList = links.map((link) => (
    <li key={link.title}>
      <Link href="/" className="gap-1">
        {link.title}
      </Link>
    </li>
  ));
  return (
    <div id="overlay" className="mobileOverlay">
      <div
        tabIndex="-1"
        aria-hidden="true"
        id="mobileOverlayContent"
        ref={node}
      >
        <ul className="grid grid-flow-row">{itemList}</ul>
      </div>
    </div>
  );
}
