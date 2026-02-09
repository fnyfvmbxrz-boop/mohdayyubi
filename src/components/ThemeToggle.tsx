"use client";

import { useTheme } from "./ThemeProvider";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by showing consistent icon during SSR
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-muted hover:bg-border transition-colors"
        aria-label="Toggle theme"
      >
        <SunIcon size={20} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-border transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </button>
  );
}
