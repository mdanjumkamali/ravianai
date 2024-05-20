import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteCards";
import { testimonials } from "@/Data";

const Clients = () => {
  return (
    <div>
      <h1 className="text-center text-4xl md:text-6xl font-semibold">
        What Our <span className="text-blue-500">Customers Say</span>
      </h1>
      <div className="flex flex-col items-center  max-lg:mt-10">
        <div className="h-[70vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
