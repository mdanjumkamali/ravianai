"use client";

import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/Data";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const monthlyPlans = pricingPlans.map((plan) => {
    switch (plan.name) {
      case "Starter Plan":
        return { ...plan, price: "$29/month" };
      case "Professional Plan":
        return { ...plan, price: "$99/month" };
      case "Enterprise Plan":
        return { ...plan, price: "Custom pricing" };
      default:
        return plan;
    }
  });

  const yearlyPlans = pricingPlans.map((plan) => {
    switch (plan.name) {
      case "Starter Plan":
        return { ...plan, price: "$290/year" };
      case "Professional Plan":
        return { ...plan, price: "$990/year" };
      case "Enterprise Plan":
        return { ...plan, price: "Custom pricing" };
      default:
        return plan;
    }
  });

  const plansToShow = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <div className="flex flex-col items-center py-20" id="pricing">
      <h2 className="text-4xl md:text-6xl font-semibold text-center">
        Discover Your <span className="text-blue-500"> Ideal Plan</span>
      </h2>
      <div className="flex gap-4 my-8 rounded-full  bg-white bg-opacity-5 shadow-md backdrop-blur-lg text-white border border-white border-opacity-30">
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === "monthly" ? "bg-blue-500 " : ""
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            billingCycle === "yearly" ? "bg-blue-500 " : ""
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="flex gap-4 items-center justify-center flex-col md:flex-row">
        {plansToShow.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
