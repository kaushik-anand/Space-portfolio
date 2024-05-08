import React from "react";
import Experiencecard from "../sub/ Experiencecard";
import Experiencecard1 from "../sub/ Experiencecard";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Experience"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Experience
      </h1>
      {/* <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Experiencecard
          src="/CardImage.png"
          title="Career Essentials in Data Analysis by Microsoft and LinkedIn"
          description=""
        /> */}
        <Experiencecard
          src="/Experience.png"
          title="Front-End Developer Intern Amigo Models."
          description="Optimized rendering, enhanced performance by 30%. Utilized HTML5, CSS3, JavaScript. Engaged in debugging, responsive interface development."
          
        />
        {/* <Experiencecard
          src="/mlforall.png"
          title="Machine Learning for All By University Of London"
          description=""
        /> */}
      {/* </div> */}
    </div>
  );
};

export default Experience;