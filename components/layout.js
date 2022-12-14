// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";

import React, { useRef } from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <main className="bg-transparent dark:bg-transparent lg:max-w-screen-lg lg:mx-auto  h-full grid grid-flow-row grid-cols-1 auto-rows-auto gap-y-12 lg:justify-center py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
