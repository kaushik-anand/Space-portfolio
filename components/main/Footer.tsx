"use client";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get the current visitor count from local storage
    let count = parseInt(localStorage.getItem('visitorCount') || '0', 10);

    // Increment the count
    count += 1;

    // Update the visitor count in local storage
    localStorage.setItem('visitorCount', count.toString());

    // Update the state with the new count
    setVisitorCount(count);
  }, []);

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[45px]">
      <div className="mb-[20px] text-[20px] text-center">
        &copy; All rights reserved | Made with ❤️ by Kaushik Anand | 🇮🇳
      </div>
      <div className="flex justify-center items-center mt-5">
        <div className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold text-lg py-2 px-4 rounded-full shadow-xl transform transition-all duration-500 hover:scale-105 animate-bounce ">
          Visitors: {visitorCount}
        </div>
      </div>
    </div>
  );
};

export default Footer;
