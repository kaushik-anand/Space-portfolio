import React from "react";
import ExperienceCard from "../sub/ Experiencecard";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 z-[30] min-h-screen" id="Experience">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 ">
        My Experience
      </h1>
      <div className="max-w-4xl w-full px-4 flex flex-col items-center justify-center space-y-8">
        <ExperienceCard
          src="/Experience.png"
          title="Front-End Developer Intern at Amigo Models"
          description="Optimized rendering, enhanced performance by 30%. Utilized HTML5, CSS3, JavaScript. Engaged in debugging, responsive interface development."
          certificateLink="https://drive.google.com/file/d/19SLip8XyDohASQKC5FUiPzp9_tzxAD_k/view?usp=sharing"
        />
      
      
      </div>
      <div className="h-20"></div> {/* Adjust this height as needed for spacing */}
    </div>
  );
};

export default Experience;
