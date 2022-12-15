// import Socials from "./socials";
// import Link from "next/link";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
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
    <div className="relative mx-auto min-w-full max-w-full inset-x-0 bottom-0 z-10">
      <footer>
        <div className="mb-6 mt-2 md:mb-0">
          <ul
            className={
              "grid grid-flow-row md:grid-cols-2" +
              " lg:grid-cols-" +
              items.length +
              " font-medium text-gray-300 gap-y-4 text-center justify-center transition-all delay-75 duration-100"
            }
          >
            {itemList}
          </ul>
        </div>

        <hr className="my-6 border-light dark:border-dark sm:mx-auto lg:my-8" />
        <div className="grid grid-flow-row mt-4 items-center justify-center gap-4">
          <span className="text-md">
            {"© 2022 | "}
            <Link href="/" id="link" className="hover:underline">
              {"VolaCrypto.io"}
            </Link>
            {". All Rights Reserved."}
          </span>
          <div className="grid grid-flow-col mt-4 items-center justify-center gap-4">
            <Link
              href="https://www.facebook.com/VolaCrypto-108524625431648"
              className=""
              target="_blank"
              id="link"
            >
              <GrFacebook
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://www.instagram.com/volacrypto/"
              target="_blank"
              className=""
              id="link"
            >
              <GrInstagram
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="https://twitter.com/Vola_crypto"
              target="_blank"
              id="link"
            >
              <GrTwitter
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
