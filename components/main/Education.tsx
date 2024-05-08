import React from "react";
import ExperienceCard from "../sub/ Experiencecard";

const Education = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="Education">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Education
      </h1>
      <div className="flex justify-end">
        <ExperienceCard
          src="/Experience2.png"
          title="Front-End Developer Intern at Amigo Models"
          description=""
        />
      </div>
    </div>
  );
};

export default Education;
