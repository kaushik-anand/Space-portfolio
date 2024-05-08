import React from "react";
import CertificateCard from "../sub/CertificateCard";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/components/sub/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const Certificates: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Certificates"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificates
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[20]">
        <a href="https://www.linkedin.com/learning/certificates/4113ba979d5d90a9bc1506ef9be1f102971ab56dfdae6bf79bfdc2d005745ef0" className="flex-grow flex flex-col justify-between">
          <div>
            <CertificateCard
              src="/carrer.png"
              title="Career Essentials in Cybersecurity by Microsoft and LinkedIn"
              description=""
            />
          </div>
          <div>
            <button className="mt-24  text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              View Certificate !
            </button>
          </div>
        </a>
        <a href="https://www.hackerrank.com/certificates/3ec64d558dc4" className="flex-grow flex flex-col justify-between">
          <div>
            <CertificateCard
              src="/problem.png"
              title="Problem Solving (Intermediate) Certificate"
              description=""
            />
          </div>
          <div>
            <button className="mt-24  text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              View Certificate !
            </button>
          </div>
        </a>
        <a href=" https://coursera.org/share/4497f79029dd78075b78c48c68e1c1e9" className="flex-grow flex flex-col justify-between">
          <div>
            <CertificateCard
              src="/machine.png"
              title="Machine Learning for All "
              description=""
            />
          </div>
          <div>
            <button className="mt-24  text-white font-bold py-[8px] px-[7px]  bg-black-500 border border-[#7042f88b] opacity-[1] rounded">
              View Certificate !
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Certificates;
