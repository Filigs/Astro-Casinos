import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import FeaturedCrypto from "./nav/featuredCrypto";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <FeaturedCrypto />
      <main className="bg-white mb-8 max-w-screen-lg lg:mx-auto rounded-lg shadow-md">
        {children}
      </main>
      <Footer />
    </>
  );
}
