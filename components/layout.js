// import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import React from "react";
import NavBar from "./nav/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      <main
        className="grid h-full grid-cols-1 gap-6 py-4 mx-auto bg-transparent dark:bg-transparent lg:max-w-screen-lg "
        id="overlay"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
