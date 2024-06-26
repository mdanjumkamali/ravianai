"use client";
import { Navigation } from "lucide-react";
import { useRouter } from "next/navigation";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="text-white  min-h-screen pt-36">
      <Spotlight
        className="-top-10 left-0 md:left-60 md:-top-20 h-screen"
        fill="white"
      />
      <div className="h-[100vh] md:h-screen w-full dark:bg-white bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.04] absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="mx-6 md:w-3/4 flex items-center justify-center flex-col md:mt-48">
          <TextGenerateEffect
            words="Turn Data into Decisions."
            className="text-4xl md:text-6xl font-bold relative z-20 text-center"
          />

          <p className="text-sm md:text-xl text-neutral-300 text-center mt-2 mb-6 md:mb-10">
            Insights, analytics, and solutions with Gen AI.
          </p>
          <HoverBorderGradient
            containerClassName="rounded-md"
            as="button"
            className="bg-transparent text-white flex items-center px-6 md:px-10 gap-2"
            onClick={() => router.push("http://20.106.224.149:8501")}
          >
            <span>TRY RAVIAN</span>
            <Navigation width={20} />
          </HoverBorderGradient>

          <div className="image bg-no-repeat bg-cover border border-white border-opacity-30 shadow-xl w-full h-[220px] md:h-[450px] z-20 rounded-xl mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
