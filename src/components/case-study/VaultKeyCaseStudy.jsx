import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const VaultKeyCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "vaultkey");

  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default VaultKeyCaseStudy;
