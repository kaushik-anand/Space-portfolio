import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  certificateLink: string;
}

const CertificateCard = ({ src, title, description, certificateLink }: Props) => {
  return (
    <div className="certificate-card relative flex flex-col items-center p-4 rounded-lg shadow-lg border border-[#2A0E61] w-[100%] h-[100%] bg-cover bg-center">
      <div className="relative overflow-hidden rounded-lg w-full h-70">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative mt-4 text-center ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-white">{description}</p>
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white font-bold py-2 px-4 border border-[#2A0E61] rounded transition duration-300 hover:bg-violet-500"
            style={{ backgroundColor: 'transparent', zIndex: 30 }}
          >
            View Certificate!
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
