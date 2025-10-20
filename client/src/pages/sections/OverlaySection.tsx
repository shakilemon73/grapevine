import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Car, ParkingCircle, Award, Users, History } from "lucide-react";

const cardData = [
  {
    icon: Hotel,
    title: "Boutique Hotel Barcelona",
    subtitle: "€120/night",
    badges: [
      { text: "Negotiated rate", color: "bg-purple-600", icon: Award },
      { text: "5 colleagues stayed", color: "bg-blue-600", icon: Users },
    ],
  },
  {
    icon: Car,
    title: "Airport Transfer",
    subtitle: "€45 one-way",
    badges: [{ text: "Preferred supplier", color: "bg-purple-600", icon: Award }],
  },
  {
    icon: ParkingCircle,
    title: "Airport Parking",
    subtitle: "€12/day",
    badges: [{ text: "You used before", color: "bg-blue-600", icon: History }],
  },
];

export const OverlaySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-10 bg-white rounded-3xl border border-gray-200">
      <div className="flex flex-col max-w-md w-full items-start gap-4">
        {cardData.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="w-full border border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-300 hover:shadow-lg bg-white group"
            >
              <CardContent className="p-6 flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2 mb-3">
                    <h4 className="font-bold text-gray-900 text-base truncate">
                      {card.title}
                    </h4>
                    <span className="text-base font-black text-gray-900 flex-shrink-0">
                      {card.subtitle}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-start gap-2">
                    {card.badges.map((badge, badgeIndex) => {
                      const BadgeIcon = badge.icon;
                      return (
                        <Badge
                          key={badgeIndex}
                          className={`${badge.color} px-3 py-1.5 rounded-full font-semibold text-white text-xs tracking-wide h-auto border-0 flex items-center gap-1.5`}
                        >
                          <BadgeIcon className="w-3 h-3" />
                          {badge.text}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-center text-gray-600 max-w-md">
        Smart recommendations powered by corporate rates, colleague feedback, and personal history
      </p>
    </section>
  );
};
