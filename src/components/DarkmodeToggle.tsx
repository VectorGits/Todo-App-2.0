import { useEffect, useState } from "react";

export default function DarkmodeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)} className="text-white hover:text-gray-200 transition-colors">
        {darkMode ? (
          <img src="/icon-sun.svg" alt="Switch to Light Mode" className="h-6 w-6" />
        ) : (
          <img src="/icon-moon.svg" alt="Switch to Dark Mode" className="h-6 w-6" />
        )}
      </button>
    </>
  );
}