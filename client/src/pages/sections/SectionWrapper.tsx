import { AlertCircle, Shield, TrendingUp } from "lucide-react";
import React from "react";

const bulletPoints = [
  {
    icon: AlertCircle,
    title: "The Challenge",
    text: "Policy adherence is harder than ever as public AI tools and consumer channels multiply outside your control.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
  },
  {
    icon: Shield,
    title: "The Solution",
    text: "Grapevine gives travelers the convenience they expect within a secure, compliant, fully integrated ecosystem.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    icon: TrendingUp,
    title: "The Results",
    text: "Corporates save time and reduce costs, while TMCs increase attach revenue and strengthen client loyalty.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
];

export const SectionWrapper = (): JSX.Element => {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The travel landscape is changing. Your solution needs to keep pace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bulletPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <article
                key={index}
                className={`group relative p-10 rounded-3xl bg-white border ${point.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
                role="article"
                aria-label={point.title}
              >
                <div className={`w-16 h-16 rounded-2xl ${point.bgColor} border ${point.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${point.color}`} aria-hidden="true" />
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  {point.title}
                </h3>
                
                <p className="text-base text-gray-600 leading-relaxed">
                  {point.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
