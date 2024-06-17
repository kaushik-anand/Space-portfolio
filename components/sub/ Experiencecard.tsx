import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  certificateLink: string;
}

const ExperienceCard = ({ src, title, description, certificateLink }: Props) => {
  return (
    <div className="experience-card">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[110%] h-[110%]"> {/* Increased size by 10% */}
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white px-4 py-2 rounded-lg border border-[#7042f88b] hover:bg-violet-400"
            style={{ backgroundColor: 'transparent', zIndex: 21 }}
          >
            View Certificate!
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
