// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import FeaturedCrypto from "./nav/featuredCrypto";
import React, { useRef } from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      <FeaturedCrypto />
      <main className="bg-white dark:bg-bgContainerDark text-dark dark:text-light mb-8 lg:max-w-screen-lg lg:mx-auto rounded-lg shadow-md h-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
