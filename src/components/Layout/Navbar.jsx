import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import Button from "../Ui/Button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../../data";
// import useTheme from "../../contexts/Theme.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { themeMode, lightTheme, darkTheme } = useTheme();

  return (
    <div className="sticky top-0 z-50  py-4 md:py-0 glass">
      {/* Desktop nav */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 ">
        <div className="">
          <div className="font-display font-bold text-2xl md:text-4xl tracking-tight text-">
            JA<span className="text-dark-accent">.</span>
          </div>
        </div>
        <div className="hidden md:flex gap-10 py-6 ">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-sm transition-colors duration-200 ${
                  isActive ? "text-dark-accent" : "text-nav hover:text-bg-soft"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        {/* theme switcher */}
        <div className="flex items-center gap-3">
          {/* <button
            onClick={themeMode === "light" ? darkTheme : lightTheme}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/10 cursor-pointer bg-bg-dark 
            text-surface transition-all duration-300 hover:border-dark-accent/30 hover:text-dark-accent active:scale-95"
          >
            <Sun
              className={`absolute h-4 w-4 transition-all duration-300 ${
                themeMode === "dark"
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />

            <Moon
              className={`absolute h-4 w-4 transition-all duration-300 ${
                themeMode === "dark"
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button> */}

          <div className="hidden md:block">
            <Button type="primary">{siteConfig.ctaLabel}</Button>
          </div>
        </div>

        {/* Mobile nav  */}

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          <motion.div
            key={isMenuOpen ? "close" : "menu"}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>

        {isMenuOpen ? (
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="absolute top-full left-0 w-full bg-bg shadow-xl py-6 px-6 flex flex-col gap-6 z-40 "
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body text-md transition-colors duration-200 ${
                    isActive
                      ? "text-dark-accent"
                      : "text-border hover:text-bg-soft"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              key={"/contact"}
              to={"/contact"}
              onClick={() => setIsMenuOpen(false)}
            >
              <Button children={siteConfig.ctaLabel} type={"primary"} />
            </NavLink>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
