import React from "react";
import ExperienceCard from "../sub/ Experiencecard";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[30]"
      id="Experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        My Experience
      </h1>
      <ExperienceCard
        src="/Experience.png"
        title="Front-End Developer Intern Amigo Models."
        description="Optimized rendering, enhanced performance by 30%. Utilized HTML5, CSS3, JavaScript. Engaged in debugging, responsive interface development."
        certificateLink="https://drive.google.com/file/d/19SLip8XyDohASQKC5FUiPzp9_tzxAD_k/view?usp=sharing"
      />
    </div>
  );
};

export default Experience;
