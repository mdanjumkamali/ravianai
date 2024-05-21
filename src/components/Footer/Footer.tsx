import { socialMedia } from "@/Data";
import React from "react";

const Footer = () => {
  return (
    <div className="relative pt-6 md:pt-32 overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>
      <div className="relative z-10 md:px-20 flex flex-col md:flex-row space-y-2 justify-between items-center py-8">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ravian AI
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
