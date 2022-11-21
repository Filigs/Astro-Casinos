import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import FeaturedCrypto from "./nav/featuredCrypto";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <FeaturedCrypto />
      <main>{children}</main>
      <Footer />
    </>
  );
}
