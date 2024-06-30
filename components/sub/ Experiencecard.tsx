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
    <div className="experience-card w-full max-w-[80%] md:max-w-[60%] lg:max-w-[50%]">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt={title}
          layout="responsive"
          width={800}  // Adjusted width to decrease size by 20%
          height={800} // Adjusted height to decrease size by 20%
          className="object-cover"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm md:text-base lg:text-lg">{description}</p>
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white px-4 py-2 rounded-lg border border-[#7042f88b] hover:bg-violet-400 text-sm md:text-base lg:text-lg"
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
