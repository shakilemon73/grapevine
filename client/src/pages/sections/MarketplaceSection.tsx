import { ChevronRight } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, User, Bot, ShoppingBag, BarChart3 } from "lucide-react";

const layersData = [
  {
    icon: Database,
    title: "Data Layer",
    description: "Real-time ingestion from GDS, OBT, and back-office feeds",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    icon: User,
    title: "Personalization Layer",
    description: "Traveler context, preferences, and historical booking data",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-100",
  },
  {
    icon: Bot,
    title: "AI Layer",
    description: "Secure, multi-channel and multi-modal assistant",
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-100",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace Layer",
    description: "Hotels plus full ancillary inventory",
    color: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "border-green-100",
  },
  {
    icon: BarChart3,
    title: "Insight Layer",
    description: "Dashboards, spend, compliance, and engagement",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-100",
  },
];

export const MarketplaceSection = (): JSX.Element => {
  return (
    <section 
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full pt-8"
      aria-label="Platform architecture layers"
      role="region"
    >
      {layersData.map((layer, index) => {
        const Icon = layer.icon;
        return (
          <article key={index} className="flex items-stretch">
            <Card className={`flex-1 group hover:shadow-lg transition-all duration-300 rounded-3xl border ${layer.borderColor} bg-white`}>
              <CardContent className="flex flex-col items-center text-center p-6 h-full gap-4">
                <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${layer.color} border ${layer.borderColor} group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${layer.iconColor}`} aria-hidden="true" />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-gray-900">
                    {layer.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {layer.description}
                  </p>
                </div>

                {index < layersData.length - 1 && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden xl:block">
                    <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-gray-600" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </article>
        );
      })}
    </section>
  );
};
