"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { CgDarkMode } from "react-icons/cg";
import { HiLightBulb } from "react-icons/hi";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer text-emerald-600 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span>{theme === "dark" ? <BsFillLightbulbOffFill size={20} color="yellow"/> : <HiLightBulb size={25} />}</span>
    </button>
  );
}