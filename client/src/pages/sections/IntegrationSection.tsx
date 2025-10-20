import { Search, CheckCircle2, AlertTriangle } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const bulletPoints = [
  {
    text: "Identify gaps such as hotel, transfer, parking, lounge, or fast track",
  },
  {
    text: "Flag incomplete itineraries to trigger right-time follow-up",
  },
  {
    text: "Detect traveler and corporate context (who they work for, where they're going, policy tier)",
  },
];

export const IntegrationSection = (): JSX.Element => {
  return (
    <section 
      className="grid lg:grid-cols-2 gap-12 w-full items-center"
      aria-labelledby="detect-heading"
      role="region"
    >
      <Card className="min-h-[400px] bg-gradient-to-br from-orange-50 to-white rounded-3xl border border-orange-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex items-center justify-center p-12 h-full">
          <div className="relative flex flex-col items-center gap-8">
            <div className="w-32 h-32 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center relative">
              <Search className="w-16 h-16 text-orange-600" />
              <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="text-base font-bold text-gray-900">
                Itinerary Analysis
              </p>
              <p className="text-sm text-center text-gray-600 max-w-sm">
                Intelligent detection of missing items flagged with real-time alerts
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        <header className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-100 border border-orange-200">
            <Search className="w-7 h-7 text-orange-600" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <h2 id="detect-heading" className="text-3xl font-black text-gray-900">
              Detect
            </h2>
            <p className="text-sm text-gray-600">
              Spot what's missing the moment a trip is booked
            </p>
          </div>
        </header>

        <ul className="flex flex-col gap-4" role="list">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
