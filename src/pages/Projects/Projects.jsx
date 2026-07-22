import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import redux from "../../assets/redux.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/nodejs.png";
import git from "../../assets/git.png";
import Modal from "../../components/Ui/Modal";

const Projects = () => {
  const images = [
    {
      id: 1,
      source: react,
    },
    {
      id: 2,
      source: redux,
    },
    {
      id: 3,
      source: nodejs,
    },
    {
      id: 4,
      source: git,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(0);

  return (
    <div className=" w-full text-center text-2xl py-10 ">
      Hello there
      {isOpen ? (
        <Modal image={images[image].source} onClose={() => setIsOpen(false)} />
      ) : null}
      <div className="flex justify-center items-center pt-10 ">
        <div className="flex flex-row items-center border-2 border-[#1f1f1f]/10">
          <ChevronLeft
            className="w-10 h-10"
            onClick={() =>
              image > 0 ? setImage(image - 1) : setImage(images.length - 1)
            }
          />
          <img
            id={images[image].id}
            src={images[image].source}
            alt=""
            className="w-100 h-100"
            onClick={(e) => setIsOpen(true)}
          />
          <ChevronRight
            className="w-10 h-10"
            onClick={() =>
              image < images.length - 1 ? setImage(image + 1) : setImage(0)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
