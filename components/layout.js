// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";

import React, { useRef } from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <main className="bg-transparent dark:bg-transparent mb-8 lg:max-w-screen-lg lg:mx-auto  h-full mt-2 grid grid-flow-row grid-cols-1 auto-rows-auto gap-y-12">
        {children}
      </main>
      <Footer />
    </>
  );
}
