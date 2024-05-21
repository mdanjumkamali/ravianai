interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

export const testimonials = [
  {
    quote:
      "Working with Ravian AI has transformed our data analytics capabilities. The platform's insights are incredibly accurate, and the analytics provided have been invaluable in guiding our business decisions. The user interface is intuitive, and the support from the Ravian AI team has been outstanding. I highly recommend Ravian AI for anyone looking to turn data into actionable insights.",
    name: "Alex Johnson",
    title: "Chief Data Officer",
  },
  {
    quote:
      "Working with Ravian AI has transformed our data analytics capabilities. The platform's insights are incredibly accurate, and the analytics provided have been invaluable in guiding our business decisions. The user interface is intuitive, and the support from the Ravian AI team has been outstanding. I highly recommend Ravian AI for anyone looking to turn data into actionable insights.",
    name: "Alex Johnson",
    title: "Chief Data Officer",
  },
  {
    quote:
      "Working with Ravian AI has transformed our data analytics capabilities. The platform's insights are incredibly accurate, and the analytics provided have been invaluable in guiding our business decisions. The user interface is intuitive, and the support from the Ravian AI team has been outstanding. I highly recommend Ravian AI for anyone looking to turn data into actionable insights.",
    name: "Alex Johnson",
    title: "Chief Data Officer",
  },
  {
    quote:
      "Working with Ravian AI has transformed our data analytics capabilities. The platform's insights are incredibly accurate, and the analytics provided have been invaluable in guiding our business decisions. The user interface is intuitive, and the support from the Ravian AI team has been outstanding. I highly recommend Ravian AI for anyone looking to turn data into actionable insights.",
    name: "Alex Johnson",
    title: "Chief Data Officer",
  },
  {
    quote:
      "Working with Ravian AI has transformed our data analytics capabilities. The platform's insights are incredibly accurate, and the analytics provided have been invaluable in guiding our business decisions. The user interface is intuitive, and the support from the Ravian AI team has been outstanding. I highly recommend Ravian AI for anyone looking to turn data into actionable insights.",
    name: "Alex Johnson",
    title: "Chief Data Officer",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Plan",
    price: "$29/month",
    features: [
      "Basic data analysis tools",
      "Unlimited projects",
      "Up to 10,000 data rows per project",
      "Email support",
      "Access to advanced AI models",
      "Customizable dashboards and reports",
      "Basic data visualization tools",
      "Collaboration features (up to 3 users)",
      "Access to public datasets",
      "Basic AI insights and recommendations",
    ],
  },
  {
    name: "Professional Plan",
    price: "$99/month",
    features: [
      "All features of the Starter Plan",
      "Up to 100,000 data rows per project",
      "Priority email support",
      "Advanced data visualization tools",
      "Integration with third-party apps (e.g., Google Analytics, Salesforce)",
      "Advanced AI insights and custom model training",
      "Collaboration features (up to 10 users)",
      "Dedicated onboarding session",
      "API access for custom integrations",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "Custom pricing",
    features: [
      "All features of the Professional Plan",
      "Unlimited data rows per project",
      "24/7 dedicated support",
      "Personalized AI model development",
      "Advanced security and compliance features",
      "Custom integrations with enterprise systems",
      "On-premise deployment options",
      "Collaboration features (unlimited users)",
      "Dedicated account manager",
      "Custom training and workshops for your team",
    ],
  },
];
