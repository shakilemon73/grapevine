import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown, ShieldCheck, DollarSign, Target } from "lucide-react";

const metricCards = [
  {
    icon: Target,
    label: "Attach Rate",
    value: "47%",
    change: "+12%",
    trend: "up",
    color: "bg-green-50",
    iconColor: "text-green-600",
    position: "col-start-1 row-start-1",
  },
  {
    icon: ShieldCheck,
    label: "In-Policy %",
    value: "94%",
    change: "+8%",
    trend: "up",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    position: "col-start-2 row-start-1",
  },
  {
    icon: DollarSign,
    label: "Expense Admin Time",
    value: "2.3h",
    change: "-35%",
    trend: "down",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    position: "col-span-2 row-start-2",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-10 bg-white rounded-3xl border border-gray-200">
      <div className="flex flex-col max-w-md w-full gap-5">
        <div className="grid grid-cols-2 gap-5 w-full">
          {metricCards.map((card, index) => {
            const Icon = card.icon;
            const TrendIcon = card.trend === "up" ? TrendingUp : TrendingDown;
            const trendColor = card.trend === "up" ? "text-green-600" : "text-red-600";
            const trendBg = card.trend === "up" ? "bg-green-50" : "bg-red-50";
            
            return (
              <Card
                key={index}
                className={`${card.position} rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg group`}
              >
                <CardContent className="flex flex-col p-6 h-full gap-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${card.color} border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-6 h-6 ${card.iconColor}`} />
                    </div>
                    <div className={`px-3 py-1.5 rounded-full ${trendBg} flex items-center gap-1.5 border border-gray-200`}>
                      <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                      <span className={`text-xs font-bold ${trendColor}`}>{card.change}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-gray-600">
                      {card.label}
                    </p>
                    <p className="text-4xl font-black text-gray-900">
                      {card.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm text-center text-gray-600 max-w-md">
        Real-time dashboards tracking key performance indicators across your travel program
      </p>
    </section>
  );
};
