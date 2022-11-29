import { GiHamburgerMenu } from "react-icons/gi";
import { icons } from "./icons";

export default function SidePanel() {
  return (
    <>
      <>
        <button
          alt="Mobile Menu"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <GiHamburgerMenu className={icons} />
        </button>
      </>
      <div
        id="drawer-navigation"
        class="fixed z-40 h-screen p-4 overflow-y-auto bg-gray-300 w-80 dark:bg-gray-800 hidden"
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Menu
        </h5>
      </div>
    </>
  );
}
