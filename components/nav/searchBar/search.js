import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="">
      <form id="searchBar">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="text-fillerDark dark:text-borderDark" />
          </div>
          <input
            type="text"
            id="search"
            className="block w-full pl-10 p-2.5 "
            placeholder="Search"
            required
          />
        </div>
      </form>
    </div>
  );
}
