import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export const Navbar = () => {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    // { path: "/visa-profiler", label: "Visa Profiler" },
    // { path: "/flight-deals", label: "Flight Deals" },
    // { path: "/hotels", label: "Hotels" },
    { path: "/airlinesPage", label: "Airlines" },
    { path: "/umrah-packages", label: "Umrah Packages" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
         {/* Logo */}
<Link
  to="/"
  className="dark:text-slate-100 flex items-center transform hover:scale-[1.01] transition duration-300 font-bold text-lg sm:text-xl"
>
  <img 
    src={logo} 
    alt="Sky Routes Logo" 
    className="h-40"
  />
</Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-sky-500 transition-colors duration-200 ${
                  isActive(link.path) ? "text-sky-500 dark:text-sky-400" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark((prev) => !prev)}
              className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-sky-400 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 flex items-center justify-center hover:scale-105 transition-transform duration-200"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-block bg-black dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white dark:text-black font-bold px-4 sm:px-6 py-2.5 rounded-full text-xs uppercase transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-pointer w-9 h-9 rounded-full bg-sky-400 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors duration-200 hover:scale-105"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/60 transition-all duration-300 ease-in-out ${
          isOpen ? "top-20 opacity-100 visible" : "top-16 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`block text-sm uppercase tracking-[0.15em] font-bold py-2 transition-colors duration-200 ${
                isActive(link.path)
                  ? "text-sky-500 dark:text-sky-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block w-full text-center bg-black dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white dark:text-black font-bold px-6 py-3 rounded-full text-xs uppercase transition-colors duration-200 mt-4"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[-1]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};