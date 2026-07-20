import React from "react";
import { ExperienceData, ExperienceCards } from "../../data";
import TechStack from "../Home/TechStack";

const Experience = () => {
  return (
    <div>
      <div className="">
        {/* hero section */}

        <section className="w-full py-20 px-6 bg-bg-dark">
          <div className="max-w-7xl mx-auto">
            <div>
              {/* Heading */}
              <div className="mb-12">
                <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase mb-3 block">
                  Background
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-surface font-display">
                  Background & Experience
                </h2>
                <p className="text-nav mt-3 text-sm">
                  The technical foundation behind the systems I build.
                </p>
              </div>

              {/* Experience cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ExperienceData.map((exp) => (
                  <div
                    key={exp.type}
                    className="flex flex-col gap-5 p-7  rounded-2xl
                             border border-border/10 hover:border-accent/30
                             hover:shadow-lg transition-all duration-300"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    {/* Role + company */}
                    <div>
                      <h3 className="text-xl font-bold text-surface font-display leading-snug">
                        {exp.role}
                      </h3>
                      <p
                        className={`text-sm font-semibold mt-0.5
                        ${exp.type === "self" ? "text-dark-accent" : "text-nav"}`}
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-xs text-text-dim mt-0.5"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {exp.period}
                      </p>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-nav"
                        >
                          <span className="mt-1.5 shrink w-1.5 h-1.5 rounded-full bg-dark-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Summary */}
                    <p className="text-xs text-text-dim leading-relaxed pt-2 border-t border-border/30">
                      {exp.summary}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-medium text-nav bg-surface-2
                                   border border-border/40 rounded-full px-2 py-0.5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/30"></div>

        {/* Exp Info Section */}

        <section className="w-full pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-5 max-w-3xl">
              {/* Eyebrow */}
              <span
                className="text-xs font-semibold tracking-widest text-dark-accent uppercase"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                BEYOND THE CODE
              </span>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold font-display text-surface leading-tight">
                Every Project Taught Me
                <br />
                <span className="text-dark-accent">Something.</span>
              </h1>

              {/* Tagline */}
              <p className="text-base font-semibold text-nav">
                I didn't learn development by collecting certificates—I learned
                by building, breaking, debugging, and rebuilding applications
                until they worked the way I imagined.
              </p>

              {/* Bio paragraphs */}
              <div className="flex flex-col gap-4 pt-2">
                <p className="text-base text-surface leading-relaxed font-medium">
                  I enjoy building modern web applications that combine clean
                  design with practical functionality. Whether it's creating
                  responsive user interfaces, integrating APIs, or developing
                  full-stack features,{" "}
                  <span className="text-dark-accent font-semibold">
                    I focus on building software that's simple, reliable, and
                    easy to maintain.
                  </span>
                </p>
                <p className="text-sm text-nav leading-relaxed">
                  From my first HTML page to full-stack React applications,
                  every project has been another step forward. Along the way
                  I've explored responsive UI development, state management,
                  REST API integration, backend fundamentals, and database
                  operations. My internship gave me the opportunity to work on a
                  real-world product, while personal projects continue to
                  challenge me to write cleaner code, solve practical problems,
                  and think like a software engineer.
                </p>
                <p className="text-sm text-nav leading-relaxed">
                  Most of my work revolves around React and the modern
                  JavaScript ecosystem, but I'm equally interested in
                  understanding what happens beyond the frontend. I'm
                  continuously exploring backend development, databases,
                  application architecture, and the tools that help build
                  scalable, maintainable software.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/30"></div>

        <section className="w-full py-20 px-6 bg-bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="pb-16">
              <p className="text-xs font-semibold tracking-widest text-dark-accent uppercase mb-3 block">
                Beyond the Resume
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-surface font-display">
                The Experience Behind <br />{" "}
                <span className="text-dark-accent"> the Code</span>
              </h2>
              <p className="text-nav mt-4 text-sm">
                Every project, internship, and milestone has shaped my growth as
                a developer and the way I build software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {ExperienceCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="bg-white/30 group glass rounded-2xl border border-border p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-dark-accent/50 hover:shadow-[0_0_35px_rgba(34,197,94,0.08)]"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>

                      <h3 className="text-xl font-display font-semibold text-surrounded">
                        {card.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-nav leading-7 text-sm lg:text-md flex-1">
                      {card.description}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-border/30 my-6" />

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {card.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full border border-border/30 bg-bg text-sm text-text-dim transition-colors duration-300 hover:border-accent hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/30 "></div>
        {/* tech stack section  */}
        <div className="pt-20">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default Experience;
