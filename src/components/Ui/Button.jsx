import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent 
    bg-dark-accent text-bg hover:bg-accent-glow hover:-translate-y-0.5 px-4 py-3 md:py-2 text-sm cursor-pointer  `}
    >
      {children}
    </button>
  );
};

export default Button;
