"use client";

import { Separator } from "@/components/ui/separator";
import { faqData } from "@/Data";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="max-w-screen-md mx-auto py-20" id="faqs">
      <h1 className="text-4xl font-semibold mb-6 text-center text-blue-500">
        FAQs
      </h1>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="text-md md:text-2xl font-semibold">
              {faq.question}
            </h2>
            <div
              onClick={() => toggleQuestion(index)}
              className="cursor-pointer transition-transform transform"
            >
              {openQuestion === index ? <CircleMinus /> : <CirclePlus />}
            </div>
          </div>
          {openQuestion === index && (
            <p className="text-sm md:text-lg mt-2">{faq.answer}</p>
          )}
          {index !== faqData.length - 1 && <Separator className="mt-3" />}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
