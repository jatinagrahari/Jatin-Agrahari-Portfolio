import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const TheFadeCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "thefadestore");

  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default TheFadeCaseStudy;
