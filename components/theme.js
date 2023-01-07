import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
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
    <a
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Theme toggle"
      className="cursor-pointer"
    >
      <span>
        {isDark() ? (
          <BsFillSunFill id="switch" />
        ) : (
          <BsFillMoonFill id="switch" />
        )}
      </span>
    </a>
  );
};

export default ThemeSwitch;
