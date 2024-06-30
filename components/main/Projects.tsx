import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center py-20 z-[30]" id="myProjects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-4 md:px-10 justify-center">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4">
          <a href="https://huggingface.co/spaces/kaushik-anand/Chatbot-legal-advice" className="w-full">
            <ProjectCard
              src="/legalchat.png"
              title="Legal Advisory ChatBot"
              description="Deployed RAG with LLaMA2 LLM for legal advice in India, enhancing efficiency by 30% and resource use by 15%."
            />
          </a>
          <a href="https://huggingface.co/spaces/kaushik-anand/Chatbot-legal-advice">
            <button className="mt-4 text-white font-bold py-[8px] px-[7px] bg-black-500 border border-[#7042f88b] opacity-[1] rounded hover:bg-violet-400">
              Explore!
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4">
          <a href="https://github.com/kaushik-anand/Sentimental-analysis" className="w-full">
            <ProjectCard
              src="/sentiment2.png"
              title="Sentimental Analysis"
              description="Analyzed 10k+ customer reviews, achieving 85% accuracy, lifting satisfaction by 15% with Decision Trees and Random Forest."
            />
          </a>
          <a href="https://github.com/kaushik-anand/Sentimental-analysis">
            <button className="mt-4 text-white font-bold py-[8px] px-[7px] bg-black-500 border border-[#7042f88b] opacity-[1] rounded hover:bg-violet-400">
              Explore!
            </button>
          </a>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4">
          <a href="https://fyle-internship-challenge-23-kaushik.vercel.app/" className="w-full">
            <ProjectCard
              src="/gitgoogle.png"
              title="GitGoogle"
              description="GitGoogle makes GitHub navigation easy, with user-friendly design and detailed insights. Explore profiles and repositories effortlessly."
            />
          </a>
          <a href="https://fyle-internship-challenge-23-kaushik.vercel.app/">
            <button className="mt-4 text-white font-bold py-[8px] px-[7px] bg-black-500 border border-[#7042f88b] opacity-[1] rounded hover:bg-violet-400">
              Explore!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
