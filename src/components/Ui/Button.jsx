import React from "react";

const Button = ({ children, type }) => {
  const primaryButton =
    "inline-flex items-center justify-center rounded-xl bg-dark-accent px-8 py-3.5 text-sm font-display font-semibold text-bg transition-all duration-300 hover:bg-accent-glow hover:-translate-y-0.5 hover:shadow-lg cursor-pointer";
  const secondaryButton =
    "inline-flex items-center justify-center rounded-xl border border-border bg-bg px-6 py-3 text-sm font-medium text-text-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-dark-accent hover:text-dark-accent hover:shadow-md focus:outline-none focus:ring-2 focus:ring-dark-accent focus:ring-offset-2 cursor-pointer";

  return (
    <button className={type == "primary" ? primaryButton : secondaryButton}>
      {children}
    </button>
  );
};

export default Button;
