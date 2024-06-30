"use client";

import { Socials } from "@/constants/index";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/kaushiklogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin md:w-[100px] md:h-[100px]"
          />
          <span className="font-bold ml-2 md:ml-[10px] hidden md:block text-gray-300">
            {/* Add text here if needed */}
          </span>
        </a>

        <div className="hidden md:flex w-[800px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">About me</a>
            <a href="#skills" className="cursor-pointer">Skills</a>
            <a href="#Experience" className="cursor-pointer">My Experience</a>
            <a href="#Certificates" className="cursor-pointer">Certifications</a>
            <a href="#myProjects" className="cursor-pointer">Projects</a>
            <a href="#contact" className="cursor-pointer">Contact Me 📞</a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.URL}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-row items-center">
          <button
            id="menu-button"
            className="text-gray-300 focus:outline-none z-[30]"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed top-[65px] left-0 w-full bg-transparent p-4 rounded-lg shadow-lg text-white flex flex-col items-center"
        >
          <a href="#about-me" className="cursor-pointer py-2">About me</a>
          <a href="#skills" className="cursor-pointer py-2">Skills</a>
          <a href="#Experience" className="cursor-pointer py-2">My Experience</a>
          <a href="#Certificates" className="cursor-pointer py-2">Certifications</a>
          <a href="#myProjects" className="cursor-pointer py-2">Projects</a>
          <a href="#contact" className="cursor-pointer py-2">Contact Me 📞</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
