import React, { useState } from "react";
import ProjectCard from "../../components/Ui/ProjectCard";
import { ProjectCards } from "../../data/projectsData.js";
import Modal from "../../components/Ui/Modal";
import Button from "../../components/Ui/Button.jsx";

const Projects = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [image, setImage] = useState(0);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 px-6 text-center bg-bg-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-5 transition-all duration-500 animate-fade-up">
            <span className="text-xs font-semibold tracking-widest text-dark-accent uppercase">
              Projects
            </span>

            <h1
              className="text-5xl md:text-6xl font-bold text-surface leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Projects I've
              <br />
              <span className="text-dark-accent">Built</span>
            </h1>

            <p className="text-base text-nav leading-relaxed max-w-5xl">
              Every project represents an opportunity to explore new
              technologies, strengthen problem-solving skills, and create fast,
              accessible, and user-focused web experiences.
            </p>
          </div>
        </div>
      </section>
      <div className="w-full h-px bg-border/30" />
      {/* card section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            {ProjectCards.map((card) => (
              <ProjectCard card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
