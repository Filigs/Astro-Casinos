// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";

import React, { useRef } from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <main className="bg-transparent dark:bg-transparent lg:max-w-screen-lg mx-auto h-full grid grid-cols-1 gap-6 py-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
