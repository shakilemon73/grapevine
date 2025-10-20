import React from "react";
import { BarChart3, CheckCircle2, Brain, FileText } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    text: "Unified dashboards tracking attach rate, spend, compliance, and engagement metrics in real-time",
  },
  {
    icon: Brain,
    text: "AI-generated insights revealing traveler behavior patterns and supplier performance trends",
  },
  {
    icon: FileText,
    text: "Exportable reports for duty of care, finance, and procurement with full audit trails",
  },
];

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[552px] items-start gap-6 p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <header className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 border border-purple-200">
          <BarChart3 className="w-7 h-7 text-purple-600" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl font-black text-gray-900">
            Analytics & Reporting
          </h2>
          <p className="text-sm text-gray-600">
            Real-time visibility that closes the loop
          </p>
        </div>
      </header>

      <ul className="flex flex-col items-start gap-4 w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <li key={index} className="flex items-start gap-3 w-full group">
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
              </div>
              <p className="flex-1 text-base text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
