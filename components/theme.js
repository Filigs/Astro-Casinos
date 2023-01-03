import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ToggleSwitch } from "flowbite-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // When mounted on client, now we can show the UI
  if (!mounted) return null;
  // check theme

  function isDark() {
    return theme === "dark";
  }
  return (
    <div className="text-dark">
      <ToggleSwitch
        id="switch"
        onChange={() => setTheme(isDark() ? "light" : "dark")}
        aria-label="Theme toggle"
        label={
          isDark() ? (
            <BsFillSunFill className="text-dark dark:text-light" />
          ) : (
            <BsFillMoonFill className="text-dark dark:text-light" />
          )
        }
        className="cursor-pointer"
      ></ToggleSwitch>
    </div>
  );
};

export default ThemeSwitch;
