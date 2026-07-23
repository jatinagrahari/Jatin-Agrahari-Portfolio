import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const ExchangexCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "exchangex");
  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default ExchangexCaseStudy;
