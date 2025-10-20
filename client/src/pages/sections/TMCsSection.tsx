import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const tmcBenefits = [
  {
    title: "Seamless Integration",
    description: "Connect directly with your existing TMC systems and workflows"
  },
  {
    title: "Enhanced Control",
    description: "Maintain policy compliance while improving traveler satisfaction"
  },
  {
    title: "Real-time Insights",
    description: "Access comprehensive analytics and reporting for better decision-making"
  },
  {
    title: "Scalable Solution",
    description: "Grow with your business needs without additional complexity"
  }
];

export const TMCsSection = (): JSX.Element => {
  return (
    <section 
      id="tmcs" 
      className="bg-white py-20 lg:py-28"
      aria-labelledby="tmcs-heading"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h2 
                id="tmcs-heading" 
                className="text-4xl lg:text-5xl font-black text-gray-900"
              >
                Built for Travel Management Companies
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Grapevine empowers TMCs to deliver exceptional service while maintaining 
                control, compliance, and visibility across all business travel.
              </p>
            </div>

            <div className="space-y-4">
              {tmcBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button 
                className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-50 to-gray-50 border border-gray-200 shadow-xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🚀</div>
                  <p className="text-gray-600 font-medium">
                    TMC Platform Integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
