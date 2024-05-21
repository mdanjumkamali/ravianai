"use client";

import React from "react";
import { BackgroundBeams } from "../ui/BackgroundBeams";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Contact = () => {
  return (
    <div
      className="h-[20rem] max-w-screen-xl mx-auto rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased mt-12 md:mt-24"
      id="contact"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Ready To Join The Future
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <HoverBorderGradient
          containerClassName="rounded-md"
          className="bg-transparent text-white flex items-center px-6 gap-2 "
        >
          <input
            type="text"
            placeholder="Email Address.."
            className="bg-transparent outline-none"
          />
        </HoverBorderGradient>
        <HoverBorderGradient
          containerClassName="rounded-md"
          as="button"
          className="bg-transparent text-white flex items-center px-6 gap-2 "
          onClick={() => console.log("")}
        >
          <span>Join Waiting List</span>
        </HoverBorderGradient>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Contact;
