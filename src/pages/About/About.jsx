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
} from "../../data/about";

const About = () => {
  return (
    <div className="container mx-auto px-6 pt-4">
      <div className="">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* left section  */}
          <div className="order-2 lg:order-1">
            <h3 className="text-dark-accent text-xl font-display font-semibold">
              {aboutInfo.title}
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">
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
              <a href="/resume.pdf" download>
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

        {/* My Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold font-display">
              {aboutInfo.myJourneyTitle}
            </h3>

            <div className="w-16 h-1 rounded-full bg-accent"></div>

            <p className="text-nav leading-8 text-lg">
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
                    <p className="text-nav text-lg leading-7">
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

        {/* Education & Learning Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-16 lg:gap-12 py-16 lg:py-24">
          {/* Left Section — Education (35%) */}
          <div>
            <div className="mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                Education
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full mt-3"></div>
            </div>

            <div className="space-y-5">
              {education.map((edu) => {
                const Icon = GraduationCap;
                return (
                  <div
                    key={edu.degree}
                    className="rounded-2xl border border-border/10 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-border/5 bg-accent/5 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-dark-accent" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-nav text-sm sm:text-base mt-1.5">
                      {edu.schoolName}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section — Learning Journey (65%) */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              Learning Journey
            </h2>
            <div className="w-16 h-1 bg-accent rounded-full mt-3 mb-8 lg:mb-10"></div>

            {/* Mobile: vertical stacked timeline */}
            <div className=" flex flex-col gap-8 sm:hidden ">
              {learningJourney.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-center gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-full border border-border/10 bg-white shadow-sm flex items-center justify-center">
                      <Icon className="w-6 h-6 text-muted" />
                    </div>
                    <div>
                      <p className="text-dark-accent font-semibold text-base">
                        {value.year}
                      </p>
                      <p className="text-nav text-sm leading-6">
                        {value.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* sm and up: horizontal timeline */}
            <div className="hidden sm:block relative mt-8 lg:mt-12">
              <div
                className="absolute top-10 lg:top-12 h-0.5 bg-accent/50"
                style={{
                  left: `${100 / (2 * learningJourney.length)}%`,
                  right: `${100 / (2 * learningJourney.length)}%`,
                }}
              ></div>

              <div className=" flex justify-between">
                {learningJourney.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className=" relative z-10 flex flex-col items-center flex-1 text-center"
                    >
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-border/10 bg-white shadow-sm flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
                        <Icon className="w-7 h-7 lg:w-9 lg:h-9 text-muted" />
                      </div>
                      <p className="mt-2 lg:mt-6 text-dark-accent font-semibold text-base lg:text-lg">
                        {value.year}
                      </p>
                      <p className="mt-2 text-nav text-sm lg:text-base leading-6 max-w-25 lg:max-w-30">
                        {value.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Beyond Code Section */}
        <div className="">
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
      </div>
    </div>
  );
};

export default About;
