import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"

export const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/airlinesPage", label: "Airlines" },
    { path: "/umrah-packages", label: "Umrah Packages" },
    { path: "/hajj", label: "Hajj 2027" },
    { path: "/visa", label: "Visas" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-sky-300 via-blue-20 to-sky-100 dark:bg-[#05070f]/90 dark:from-slate-700 dark:via-slate-850 dark:to-slate-950 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/30 transition-colors duration-300 shadow-sm dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Exactly as before */}
          <Link
            to="/"
            className="dark:text-slate-100 flex items-center transform hover:scale-[1.02] transition duration-300 font-bold text-lg sm:text-xl"
          >
            <img 
              src={logo} 
              alt="Sky Routes Logo" 
              className="h-35"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[11px] uppercase tracking-[0.12em] font-semibold transition-colors duration-300 ${
                  isActive(link.path) 
                    ? "text-sky-600 dark:text-sky-400" 
                    : "text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-orange-400 to-sky-500 rounded-full transition-all duration-300 ${
                  isActive(link.path) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDark((prev) => !prev)}
              className="cursor-pointer w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 dark:from-slate-800 dark:to-slate-700 text-sky-700 dark:text-yellow-400 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Contact Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-block bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 dark:from-sky-500 dark:to-sky-600 dark:hover:from-sky-600 dark:hover:to-sky-700 text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-500/30 dark:hover:shadow-sky-500/20 transform hover:-translate-y-0.5"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden cursor-pointer w-9 h-9 rounded-full bg-gradient-to-br from-sky-200 to-sky-300 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 bg-gradient-to-b from-sky-100 via-blue-50 to-sky-100 dark:bg-[#05070f]/98 dark:from-[#05070f] dark:via-[#05070f] dark:to-[#05070f] backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/30 transition-all duration-300 ease-in-out ${
          isOpen ? "top-20 opacity-100 visible" : "top-16 opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={`relative block text-sm uppercase tracking-[0.12em] font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                isActive(link.path)
                  ? "text-sky-600 dark:text-sky-400 bg-white/50 dark:bg-sky-900/20"
                  : "text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-white/30 dark:hover:bg-sky-900/10"
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-sky-500 to-emerald-400 rounded-r-full"></span>
              )}
            </Link>
          ))}

          {/* Mobile Contact Button */}
          <Link
            to="/contact"
            onClick={handleLinkClick}
            className="block w-full text-center bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-500/30 mt-6"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm z-[-1] animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};