import React from "react";
import { Blob, Dot, JJ } from "../../data/about";
import Button from "../../components/Ui/Button";
import { GraduationCap } from "lucide-react";
import { Tech } from "../../data";
import {
  aboutInfo,
  education,
  myTags,
  myJourneyCard,
  learningJourney,
  beyondCode,
  Skills,
} from "../../data/about";

const About = () => {
  return (
    <div className="w-full">
      <div className=" ">
        {/* Hero Section */}
        <section className="w-full pt-12 pb-20 px-6 bg-bg-dark ">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            {/* left section  */}
            <div className="order-2 lg:order-1">
              <h3 className="text-dark-accent text-lg font-body font-semibold">
                {aboutInfo.title}
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-display">
                Building Fast, Modern & Interactive
                <span className="text-dark-accent"> Web Experiences.</span>
              </h2>
              <p className="lg:mt-2 text-base sm:text-lg leading-7 text-nav ">
                {aboutInfo.aboutHeroDescription}
              </p>
              <div className="flex flex-col gap-6 pt-6">
                <div className="flex flex-wrap gap-4">
                  {myTags.map((tag) => {
                    let Icon = tag.icon;

                    return (
                      <div
                        key={tag.title}
                        className="flex items-center gap-2 px-4 py-3  border/10 rounded-xl shadow-sm text-sm transition-all duration-300 ease-out hover:-translate-y-1  hover:border-teal-600 hover:shadow-lg"
                      >
                        <Icon className="text-dark-accent" />
                        <span>{tag.title}</span>
                      </div>
                    );
                  })}
                </div>
                <a href="/resume/JJ_resume.pdf" download>
                  <Button children={"Download resume"} type={"primary"} />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="order-1 lg:order-2 relative w-full max-w-140 mx-auto h-87.5 sm:h-112.5 lg:h-155">
              {/* Dot img */}
              <img
                src={Dot}
                alt="dot-img"
                className="absolute top-6 right-2 w-24 opacity-40 sm:w-32 lg:w-44  z-0"
              />

              {/* Blob img */}
              <img
                src={Blob}
                alt="blob-img"
                className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-70 sm:w-90 md:w-107.5 lg:w-130 z-10"
              />

              {/* Owner img */}
              <img
                src={JJ}
                alt="owner-img"
                className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-60 sm:w-[320px] md:w-95 lg:w-107.5 z-20"
              />
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/20" />

        {/* My Journey Section */}
        <section className="w-full pt-12 pb-20 px-6 ">
          <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
            {/* Left Section */}
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-display">
                {aboutInfo.myJourneyTitle}
              </h3>

              <div className="w-16 h-1 rounded-full bg-accent"></div>

              <p className="text-nav leading-8 text-md">
                {aboutInfo.myJourneyDescription}
              </p>

              <div className="space-y-6 pt-4">
                {myJourneyCard.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.description}
                      className="flex items-center gap-5"
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-full border/30 border-border flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-6 h-6 text-dark-accent" />
                      </div>

                      {/* Text */}
                      <p className="text-nav text-md leading-7">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-3xl font-bold font-display">
                {aboutInfo.technologyTitle}
              </h3>

              <div className="w-16 h-1 rounded-full bg-accent mt-3 mb-8"></div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {Tech.map((tech) => (
                  <div
                    key={tech.name}
                    className="group h-40 rounded-2xl border/20 border-border bg-white shadow-sm flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
                  >
                    <img
                      src={tech.path}
                      alt={tech.name}
                      className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <p className="font-semibold text-nav">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/20" />

        {/* tools & skills section */}
        <section className="w-full pt-12 pb-20 px-6 bg-bg-dark">
          <div className=" py-20 px-6 bg-surface-2 ">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="mb-12 text-center">
                <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase mb-3 block">
                  Stack
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-surface font-display">
                  Tools & Skills
                </h2>
                <p className="text-text-nav mt-3 text-sm">
                  The platforms I use to build your lead and automation systems.
                </p>
              </div>
              {/* Skill categories */}
              <div className="flex flex-col gap-8">
                {Skills.map((group) => (
                  <div className="">
                    <p className="text-xs font-bold text-text-nav tracking-widest uppercase mb-3">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs font-medium text-surface bg-bg border border-border
                                   rounded-full px-3 py-1.5 hover:border-accent/40
                                   hover:text-accent transition-colors duration-200 "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-border/30" />

        {/* Beyond Code Section */}
        <section className="w-full pt-36 pb-20 px-6 pt- ">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold font-display">Beyond Code</h3>
              <div className="w-16 h-1 rounded-full bg-accent"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-12">
              {beyondCode.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="group flex items-start gap-4 rounded-3xl border border-border/10 bg-white p-5 lg:p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-lg"
                  >
                    {/* Icon */}

                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-accent/10 flex items-center justify-center transition-all duration-300 group-hover:bg-accent">
                      <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent transition-colors duration-300 group-hover:text-white" />
                    </div>

                    {/* Content */}

                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold font-display mb-2">
                        {card.title}
                      </h3>

                      <p className="text-nav text-sm lg:text-base leading-6 lg:leading-7">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
