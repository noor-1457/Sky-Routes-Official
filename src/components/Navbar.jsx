import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
   const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [dark]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="flex items-center transform hover:scale-[1.01] transition duration-300"
          >
            Sky Routes
          </a>

          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600 dark:text-slate-300">
            <a href="#home" className="hover:text-sky-500">Home</a>
            <a href="#about" className="hover:text-sky-500">About Us</a>
            <a href="#profiler" className="hover:text-sky-500">Visa Profiler</a>
            <a href="#deals" className="hover:text-sky-500">Flight Deals</a>
            <a href="#hotels" className="hover:text-sky-500">Hotels</a>
            <a href="#airlines" className="hover:text-sky-500">Airlines</a>
            <a href="#contact" className="hover:text-sky-500">Inquire</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark((prev) => !prev)}
              className=" cursor-pointer w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 flex items-center justify-center"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              className="bg-black dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white dark:text-black font-bold px-6 py-2.5 rounded-full text-xs uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};