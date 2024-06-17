import React from "react";
import CertificateCard from "../sub/CertificateCard";

const Certificates: React.FC = () => {
  const certificates = [
    {
      src: "/carrer.png",
      title: "Career Essentials in Cybersecurity ",
      description: "Learned key cybersecurity concepts and practices.",
      certificateLink: "https://www.linkedin.com/learning/certificates/4113ba979d5d90a9bc1506ef9be1f102971ab56dfdae6bf79bfdc2d005745ef0",
    },
    {
      src: "/problem.png",
      title: "Problem Solving (Intermediate) Certificate",
      description: "Demonstrated problem-solving skills with algorithms.",
      certificateLink: "https://www.hackerrank.com/certificates/3ec64d558dc4",
    },
    {
      src: "/machine.png",
      title: "Machine Learning for All By University Of London",
      description: "Explored the fundamentals of machine learning.",
      certificateLink: "https://coursera.org/share/4497f79029dd78075b78c48c68e1c1e9",
    },
    {
      src: "/data.jpeg",
      title: "Career Essentials in Data Analysis",
      description: "Basic skills in data visualization ,statistical analysis and decsion making.",
      certificateLink: "https://www.linkedin.com/learning/certificates/1b26d984e8c0f001c5fda04e17acee457893c61eb875370d10438dbb1f73ed96",
    },
    {
      src: "/software.png",
      title: "Career Essentials in Software Development ",
      description: "Fundamental programming and software engineering principles.",
      certificateLink: "https://www.linkedin.com/learning/certificates/476742044a48ea1843a74ec2c5db6408fb6b1aed289fbc3e0f712c1dbe3cb886",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="Certificates">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certifications
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 z-[20]">
        {certificates.slice(0, 3).map((certificate, index) => (
          <div key={index} className="flex justify-center px-5">
            <CertificateCard
              src={certificate.src}
              title={certificate.title}
              description={certificate.description}
              certificateLink={certificate.certificateLink}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-10 mt-10 px-10 z-[20]">
        {certificates.slice(3).map((certificate, index) => (
          <div key={index} className="flex justify-center px-5 w-1/2">
            <CertificateCard
              src={certificate.src}
              title={certificate.title}
              description={certificate.description}
              certificateLink={certificate.certificateLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
