import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 60);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  useEffect(() => {
    const timeout = setTimeout(() => onComplete(false), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      {/* Logo */}
      <div className=" p-8 ">
        <div className="text-center font-stretch-expanded font-bold text-4xl tracking-tight">
          JA<span style={{ color: "var(--color-dark-accent)" }}>.</span>
        </div>

        {/* Progress bar */}
        <div className="w-48  h-px bg-border relative overflow-hidden mt-4">
          <motion.div
            className="absolute left-0 top-0 h-full bg-accent"
            style={{
              width: `${Math.min(count, 100)}%`,
              backgroundColor: "var(--color-accent)",
            }}
            transition={{ ease: "easeOut" }}
          />
        </div>
        {/* Counter */}
        <div className="text-center mt-4">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center font-mono text-xs text-muted mt-4 tabular-nums"
          >
            {Math.min(count, 100)}%
          </motion.span>
        </div>

        {/* tagline */}
        <div
          className="font-body text-center  text-xs text-muted mt-4 tracking-widest uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Front End Developer
        </div>
      </div>
    </div>
  );
}
