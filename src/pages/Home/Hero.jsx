import React from "react";
import Scene from "../../components/3d/Scene";
import { motion } from "framer-motion";
import { siteConfig } from "../../data";
import Button from "../../components/Ui/Button";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden w-full bg-bg-dark">
      <section className="max-w-7xl mx-auto">
        <div className=" px-6 lg:px-8">
          <div className="grid min-h-screen items-center gap-12 py-4 md:py-24 lg:grid-cols-2">
            {/* left section */}
            <div className="flex flex-col gap-8">
              {/* --- Hero Headline --- */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="max-w-4xl font-display text-4xl font-bold leading-tight text-text-dark sm:text-5xl lg:text-5xl xl:text-6xl"
              >
                {siteConfig.heroHeading}
              </motion.h1>

              {/* --- Hero Description --- */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="max-w-2xl text-base leading-relaxed text-nav sm:text-lg"
              >
                {siteConfig.heroDescription}
              </motion.p>
              <div className="flex px-2 gap-5">
                <NavLink key={"/projects"} to={"/projects"}>
                  <Button children={"View Projects"} type={"primary"} />
                </NavLink>
                <NavLink key={"/contact"} to={"/contact"}>
                  <Button children={"Let's Talk"} type={"secondary"} />
                </NavLink>
              </div>
            </div>

            {/* right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative h-[450px] xl:h-[600px] w-full"
            >
              <Scene />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-border/30"></div>
    </div>
  );
};

export default Hero;
