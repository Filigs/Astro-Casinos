// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";

import React, { useRef } from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <div className="">
      <NavBar />

      <main className="bg-white dark:bg-bgContainerDark text-dark dark:text-light mb-8 lg:max-w-screen-lg lg:mx-auto rounded-lg shadow-md h-full grid grid-flow-row mt-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
