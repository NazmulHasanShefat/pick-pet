"use client";

import { useTheme } from "next-themes";
import { GiMoon, GiSun } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
import SunIcon from "./SunIcon";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      suppressHydrationWarning
      className="cursor-pointer text-emerald-600 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "light" : "Dark"}
    </button>
  );
}
