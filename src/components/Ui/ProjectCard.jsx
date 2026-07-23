import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCards } from "../../data/projectsData.js";
import Modal from "../../components/Ui/Modal";
import Button from "../../components/Ui/Button.jsx";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ card }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(0);

  return (
    <>
      <div
        key={card.projectTitle}
        className="group grid grid-cols-1 lg:grid-cols-12 gap-0 bg-bg-dark border border-border/20 rounded-3xl overflow-hidden
      hover:border-dark-accent/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
      >
        {/* card data */}
        <div
          className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col gap-6 transition-all duration-300 border-b lg:border-b-0 
        lg:border-r bg-white/90 border-border/20"
        >
          <div className="flex items-center gap-2 ">
            <span className="text-[10px] font-bold tracking-widest uppercase border rounded-full px-2.5 py-1 bg-accent/10 text-accent border-accent/25">
              {card.projectStatus}
            </span>
            <section className="text-sm text-nav font-medium">
              {card.projectCategory}
            </section>
          </div>
          <div className="">
            <h2 className="text-3xl font-display font-bold text-surface leading-snug mb-2 group-hover:text-dark-accent transition-colors duration-300">
              {card.projectTitle}
            </h2>
            <p className="text-sm text-nav leading-relaxed">
              {card.projectDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {card.projectTags.map((tag) => (
              <span
                key={tag}
                className="text-xs lg:text-sm font-medium text-dark-accent bg-accent/10 border border-accent/20 rounded-full px-2.5 lg:px-3 py-0.5 lg:py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto inline-flex items-center gap-2 px-1 lg:px-5 py-2.5">
            <a href="" className="">
              <Button type={"primary"} children={card.projectPrimaryButton} />
            </a>
            <NavLink>
              <Button
                type={"secondary"}
                children={card.projectSecondaryButton}
              />
            </NavLink>
          </div>
        </div>
        {/* card Images */}
        <div
          className="lg:col-span-6  p-5 md:p-8 flex flex-col items-center justify-center gap-6
        bg-surface-2"
        >
          {/* <div className="lg:col-span-6 p-8 "> */}
          <div className="flex justify-center items-center  ">
            <div
              className="relative w-full h-full min-h-50 rounded-2xl overflow-hidden border border-white/70 shadow-lg bg-surface grow 
            flex items-center justify-center group"
            >
              <button
                onClick={() =>
                  image > 0
                    ? setImage(image - 1)
                    : setImage(card.projectImages.length - 1)
                }
                className="absolute left-3 md:left-4 z-10 p-2 rounded-full bg-white/90 shadow hover:bg-white cursor-pointer opacity-100 xl:opacity-0 group-hover:opacity-100  transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 text-surface" />
              </button>
              <img
                id={card.projectImages[image].id}
                src={card.projectImages[image].source}
                alt=""
                className="transition-all duration-500 group-hover:scale-[1.02]"
                onClick={(e) => setIsOpen(true)}
              />
              <button
                onClick={() =>
                  image < card.projectImages.length - 1
                    ? setImage(image + 1)
                    : setImage(0)
                }
                className="absolute right-3 md:right-4 z-10 p-2 rounded-full bg-white/90 shadow hover:bg-white cursor-pointer opacity-100 xl:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 text-surface" />
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      {isOpen && (
        <Modal
          image={card.projectImages[image].source}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
