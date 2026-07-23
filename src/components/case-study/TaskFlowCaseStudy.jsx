import React from "react";
import CaseStudy from "../Layout/CaseStudy";
import { ProjectCards } from "../../data/projectsData";

const TaskFlowCaseStudy = () => {
  const cardDetails = ProjectCards.find((card) => card.id === "taskflow");

  return (
    <div>
      <CaseStudy card={cardDetails} />
    </div>
  );
};

export default TaskFlowCaseStudy;
