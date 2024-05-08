import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center py-20 z-[30] " id="myProjects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://huggingface.co/spaces/kaushik-anand/Chatbot-legal-advice" style={{ width: "550px", height: "400px" }}>
          <div>
            <ProjectCard
              src="/legalchat.png"
              title="Legal Advisory ChatBot"
              description="Deployed RAG with LLaMA2 LLM for legal advice in India, enhancing efficiency by 30% and resource use by 15%."
            />
            <button className="mt-4 text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              Explore!
            </button>
          </div>
        </a>
        <a href="https://github.com/kaushik-anand/Sentimental-analysis" style={{ width: "550px", height: "400px" }}>
          <div>
            <ProjectCard
              src="/sentiment2.png"
              title="Sentimental Analysis"
              description="Analyzed 10k+ customer reviews , achieving 85% accuracy, lifting satisfaction by 15% with Decision Trees and Random Forest."
            />
            <button className="mt-8 text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              Explore!
            </button>
          </div>
        </a>
        <a href="link_to_project_3" style={{ width: "550px", height: "400px" }}>
          <div>
            <ProjectCard
              src="/E-commerce2.png"
              title="E-Commerce Website"
              description="Developed & launched innovative online clothes shopping app, enhancing user experience & accessibility to diverse fashion products."
            />
            <button className="mt-8 text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              Explore!
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
