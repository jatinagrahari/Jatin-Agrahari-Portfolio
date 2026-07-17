import React from "react";
import { motion } from "framer-motion";
import { Tech } from "../../data";

const TechStack = () => {
  return (
    <section className="w-full py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-semibold font-display text-dark-text">
            Tech Stack & Tools
          </h2>
          <p className="text-sm text-nav mt-2 font-block">
            I use modern frontend technologies, development tools, and workflows
            to build fast, responsive, and scalable web applications with clean,
            maintainable code.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Marquee Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {[...Tech, ...Tech].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex flex-col items-center gap-2 group pr-10 md:pr-14"
              >
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-bg border border-border/10
                             flex items-center justify-center p-3
                             group-hover:border-accent/40 group-hover:shadow-md
                             transition-all duration-200"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                <span
                  className="text-xs font-medium text-nav
                             group-hover:text-dark-accent transition-colors duration-200"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
