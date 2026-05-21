"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      suppressHydrationWarning
      className="cursor-pointer text-emerald-600 dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <>
        {theme === "dark" ? (
          // <BsFillLightbulbOffFill size={20} color="yellow" />
          "dark"
        ) : (
          // <HiLightBulb size={25}/>
          "light"
        )}
      </>
    </button>
  );
}
