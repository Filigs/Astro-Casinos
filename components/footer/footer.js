// import Socials from "./socials";
// import Link from "next/link";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { items } from "./footerItems";
import Link from "next/link";
export default function Footer() {
  const itemList = items.map((item) => {
    return (
      <li key={item.title}>
        <Link id="link" href={item.href}>
          {item.title}
        </Link>
      </li>
    );
  });

  console.log();
  return (
    <div className="relative inset-x-0 bottom-0 z-10 max-w-full min-w-full mx-auto">
      <footer>
        <div className="mt-2 mb-6 md:mb-0">
          <ul
            className={
              "grid grid-flow-row md:grid-cols-2" +
              " lg:grid-cols-" +
              items.length +
              " font-medium text-light gap-y-4 text-center justify-center transition-all delay-75 duration-100"
            }
          >
            {itemList}
          </ul>
        </div>

        <hr className="my-6 border-light dark:border-dark sm:mx-auto lg:my-8" />
        <div className="grid items-center justify-center grid-flow-row gap-4 mt-4">
          <span className="text-base">
            {"© 2022 | "}
            <Link href="/" id="link" className="hover:underline">
              {"VolaCrypto.io"}
            </Link>
            {". All Rights Reserved."}
          </span>
          <div className="grid items-center justify-center grid-flow-col gap-4 mt-4">
            <Link
              href="https://www.facebook.com/VolaCrypto-108524625431648"
              className=""
              target="_blank"
              id="socials"
            >
              <SiFacebook
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                id="socials"
              />
            </Link>
            <Link
              href="https://www.instagram.com/volacrypto/"
              target="_blank"
              className=""
            >
              <GrInstagram
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                id="socials"
              />
            </Link>
            <Link href="https://twitter.com/Vola_crypto" target="_blank">
              <GrTwitter
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                id="socials"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
