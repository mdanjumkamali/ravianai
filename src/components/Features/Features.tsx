import React from "react";
import { WobbleCard } from "../ui/WobbleCard";
import Image from "next/image";

const Features = () => {
  return (
    <div className="py-20 md:py-24" id="features">
      <div className="mb-10">
        <h1 className="text-white text-4xl md:text-6xl font-semibold text-center">
          Why Choose <span className="text-blue-500"> Ravian AI?</span>
        </h1>
        <p className="text-white text-center text-sm md:text-lg my-4">
          we transform complex data into actionable insights
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Data Interpretation and Visualization
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Advanced capabilities for interpreting and visualizing data.
              Interactive charts, graphs, and dashboards to help users explore
              and understand their data effectively.
            </p>
          </div>
          <Image
            src="/img.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Predictive Analytics and ML Model Building
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Integration of powerful predictive analytics and machine learning
            (ML) algorithms. Tools to uncover patterns, trends, and predictive
            insights from data, enabling data-driven decision-making.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Customizable Solutions and Integrations
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              ailored solutions and integrations to meet the specific needs and
              requirements of users. Ability to integrate with existing data
              sources and deploy custom ML models.
            </p>
          </div>
          <Image
            src="/img1.jpg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
};

export default Features;
