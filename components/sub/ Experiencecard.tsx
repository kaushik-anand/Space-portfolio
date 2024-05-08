import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ExperienceCard = ({ src, title, description }: Props) => {
  return (
    <div className="experience-card">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full h-full">
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
      </div>
    </div>
  );
};

export default ExperienceCard;
