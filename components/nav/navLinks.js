import ThemeSwitch from "../theme";
import { FiSearch } from "react-icons/fi";
import { icons } from "./icons";
const links = [
  {
    id: 0,
    title: "Latest News",
  },
  {
    id: 1,
    title: "Analysis",
  },
  {
    id: 2,
    title: "Guides",
  },
  {
    id: 3,
    title: "Interviews",
  },
  {
    id: 4,
    title: "Podcast",
  },
  {
    id: 5,
    title: "Reviews",
  },
  {
    id: 6,
    title: "Games",
  },
];

export default function NavLinks() {
  return (
    <section
      className="flex space-x-6 text-sm md:text-base md:space-x-12 justify-center  overflow-hidden whitespace-nowrap text-center items-center align-middle p-4 transition-all mx-auto "
      key={links.id}
    >
      {links.map(({ title }) => (
        <ul
          key={links.title}
          className={"grid grid-flow-row items-center mx-auto"}
        >
          <li className="font-light text-sm whitespace-nowrap text-dark dark:text-dark mx-auto">
            {title}
          </li>
        </ul>
      ))}
      <ul className="flex gap-4">
        <li>
          <ThemeSwitch />
        </li>

        <li className={icons}>
          <FiSearch alt="Search" />
        </li>
      </ul>
    </section>
  );
}
