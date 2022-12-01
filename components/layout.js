import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import FeaturedCrypto from "./nav/featuredCrypto";

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <FeaturedCrypto />
      <main className="bg-white dark:bg-bgContainerDark text-dark dark:text-light mb-8 lg:max-w-screen-lg lg:mx-auto rounded-lg shadow-md">
        {children}
      </main>
      <Footer />
    </div>
  );
}
