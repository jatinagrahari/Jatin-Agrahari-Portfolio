import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data";
import Button from "../Ui/Button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "../../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className="hidden md:flex">
          <Button children={siteConfig.ctaLabel} type={"primary"} />
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

            <Button children={siteConfig.ctaLabel} />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
