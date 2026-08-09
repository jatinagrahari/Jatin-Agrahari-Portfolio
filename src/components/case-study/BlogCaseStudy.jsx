import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const BlogCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "blog");
  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default BlogCaseStudy;
