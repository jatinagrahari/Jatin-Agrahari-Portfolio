import React from "react";
import { NavLink } from "react-router-dom";
import { ProjectCards } from "../../data/projectsData";
import Button from "../Ui/Button";

const CaseStudy = ({ card }) => {
  return (
    <main className="w-full">
      {/* 
          Hero section
      */}
      <section className="w-full pt-20 pb-28 px-6 bg-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="opacity-0 translate-y-5 transition-all duration-500 animate-fade-up">
            {/* Back link */}
            <div className="mb-8">
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 text-xs font-semibold
                           text-nav hover:text-dark-accent transition-colors duration-200"
              >
                ← Back to Projects
              </NavLink>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left — content */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                {/* Badge */}
                <span
                  className="inline-flex w-fit text-[10px] font-bold tracking-widest
                             uppercase bg-accent/10 text-dark-accent border border-accent/25
                             rounded-full px-3 py-1"
                >
                  {card.projectStatus}
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-surface/80 leading-tight font-display">
                  {card.projectTitle}
                </h1>

                {/* Tagline */}
                <p className="text-base text-nav leading-relaxed">
                  {card.projectDescription}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {card.projectTags.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-medium text-dark-accent bg-accent/8
                                 border border-accent/20 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a href={card.projectPrimaryLink} target="_blank">
                    <Button type={"primary"} children={"See Live"} />
                  </a>
                  <NavLink
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold
                               text-nav hover:text-dark-accent transition-colors duration-200"
                  >
                    ← Back to Projects
                  </NavLink>
                </div>
              </div>

              {/* Right — Video / Loom thumbnail */}
              <div className="lg:col-span-6">
                <div
                  className="w-full aspect-video rounded-2xl overflow-hidden border border-border/10"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
                >
                  <img
                    className="w-full h-full"
                    src={card.projectThumbnail}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-border/30 "></div>

      {/*  card section */}

      <section className="w-full py-10 px-6 bg-surface-2">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-14 opacity-0 translate-y-5 transition-all duration-500 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase mb-3 block">
              {card.caseStudySectionHeroBadge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-surface/80 font-display">
              {card.caseStudySectionHeroTitle}
            </h2>
            <p className="text-sm text-nav mt-3 max-w-4xl mx-auto leading-relaxed">
              {card.caseStudySectionHeroDescription}
            </p>
          </div>

          {/* Architecture rows */}
          <div className="flex flex-col gap-16">
            {card.caseStudySection.map((sec) => (
              <div
                key={sec.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                            ${sec.reverse ? "lg:flex lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <div
                  className="rounded-2xl overflow-hidden border border-border/20
                             hover:border-dark-accent/80 hover:shadow-lg
                             transition-all duration-300"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
                >
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-surface/90 leading-snug font-display">
                    {sec.title}
                  </h3>
                  <p className="text-sm text-nav leading-relaxed">
                    {sec.description}
                  </p>
                  <ul className="flex flex-col gap-2.5 mt-1">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 w-4 h-4 rounded-full bg-accent/15
                                     flex items-center justify-center mt-0.5"
                        >
                          <svg
                            className="w-2.5 h-2.5 text-dark-accent"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span
                          className="text-sm text-nav leading-relaxed"
                          style={{ fontFamily: "DM Sans, sans-serif" }}
                        >
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;
