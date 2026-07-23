import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const AstraCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "astra");

  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default AstraCaseStudy;
