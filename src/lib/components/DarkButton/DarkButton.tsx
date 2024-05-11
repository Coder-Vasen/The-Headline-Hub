import { useState, useEffect } from "react";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import { useLocalStorage } from "usehooks-ts";
function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      {theme === "dark" ? (
        <SunIcon
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-8 w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
