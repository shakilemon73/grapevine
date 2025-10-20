import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, CheckCircle2, ArrowRightLeft, Building2 } from "lucide-react";

const features = [
  {
    text: "Pulls live, bookable content from trusted suppliers into the assistant",
  },
  {
    text: "Presents options aligned with traveler preferences and company policy",
  },
  {
    text: "Routes every ancillary booking back through TMC systems for full visibility and control",
  },
];

export const SupportSection = (): JSX.Element => {
  return (
    <section 
      className="grid lg:grid-cols-2 gap-12 w-full items-center"
      aria-labelledby="marketplace-heading"
      role="region"
    >
      <Card className="min-h-[400px] bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <CardContent className="flex items-center justify-center p-12 h-full">
          <div className="relative flex flex-col items-center gap-8">
            <div className="grid grid-cols-3 gap-4">
              {[ShoppingBag, Building2, ArrowRightLeft].map((Icon, i) => (
                <div
                  key={i}
                  className="w-20 h-20 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon className="w-10 h-10 text-blue-600" />
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center">
                <ArrowRightLeft className="w-6 h-6 text-blue-600" />
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-blue-300 via-transparent to-transparent"></div>
            </div>

            <p className="text-sm text-center text-gray-600 max-w-md">
              Visual representation of ancillary services flowing through the chat interface, 
              then seamlessly syncing back to TMC and corporate systems
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-6">
        <h2 id="marketplace-heading" className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
          Everything a Traveler Needs, Connected Through One Secure Ecosystem
        </h2>

        <ul className="flex flex-col gap-4" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group">
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
