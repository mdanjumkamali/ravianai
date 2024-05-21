import React from "react";
import { Check } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type PricingCardProps = {
  plan: {
    name: string;
    price: string;
    features: string[];
  };
};

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const isProfessional = plan.name === "Professional Plan";

  return (
    <div
      className={`rounded-md w-[95%] md:w-[350px] px-10  flex flex-col space-y-4 border-opacity-15 bg-white bg-opacity-5 shadow-md backdrop-blur-lg text-white  ${
        isProfessional ? "py-20 " : "py-8 "
      }`}
    >
      <p className="text-md">{plan.name}</p>
      <div>
        <span className="text-4xl font-semibold text-blue-500">
          {plan.price}
        </span>
      </div>
      {plan.features.map((feature, index) => (
        <div key={index} className="flex gap-1 text-sm">
          <Check className="text-md" />
          {feature}
        </div>
      ))}

      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className="bg-transparent text-white flex items-center px-6 gap-2"
        onClick={() => console.log("")}
      >
        <span>Get Started</span>
      </HoverBorderGradient>
    </div>
  );
};

export default PricingCard;
