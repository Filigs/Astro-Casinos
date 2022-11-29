// import Socials from "./socials";
// import Link from "next/link";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
import {} from "react-icons/fa";
export default function Footer() {
  return (
    <div className="relative mx-auto min-w-full max-w-full inset-x-0 bottom-0">
      <footer className="p-4 bg-gray-800 sm:p-6 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://flowbite.com"
                    className="font-light hover:underline"
                  >
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="font-light hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="font-light hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="font-light hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="font-light hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-light hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div>
          <p className="my-6 text-white font-extralight">
            {"Please note that our"}
            <a href="#" className="text-success hover:underline font-medium">
              {"privacy policy"}
            </a>
            {","}
            <a href="#" className="text-success hover:underline font-medium">
              {"terms of use"}
            </a>
            {","}
            <a href="#" className="text-success hover:underline font-medium">
              {"cookies"}
            </a>
            {", and "}
            <a href="#" className="text-success hover:underline font-medium">
              {"do not sell my personal information"}
            </a>
            {" has been updated"}.
            {
              "The leader in news and information on cryptocurrency, digital assets and the future of money, COMPANY is a media outlet that strives for the highest journalistic standards and abides by a"
            }{" "}
            <a href="#" className="text-success hover:underline font-medium">
              {"strict set of editorial policies"}
            </a>
            {". COMPANY is an independent operating subsidiary of "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:underline font-medium"
            >
              {"Digital Currency Group"}
            </a>
            {", which invests in "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:underline font-medium"
            >
              {"cryptocurrencies"}
            </a>
            {" and blockchain "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:underline font-medium"
            >
              {"startups"}
            </a>
            {
              ". As part of their compensation, certain COMPANY employees, including editorial employees, may receive exposure to DCG equity in the form of"
            }{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success hover:underline font-medium"
            >
              {"stock appreciation rights"}
            </a>
            {
              ", which vest over a multi-year period. COMPANY journalists are not allowed to purchase stock outright in DCG."
            }
          </p>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="#" className="hover:underline">
              Placeholder™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="text-white dark:hover:text-white">
              <GrFacebook
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </a>
            <a href="#" className="text-white dark:hover:text-white">
              <GrInstagram
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </a>
            <a href="#" className="text-white dark:hover:text-white">
              <GrTwitter
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
