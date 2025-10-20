import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const cardData = [
  {
    title: "Hotel",
    badges: [
      { text: "Negotiated rate", color: "bg-[#8a5bf533]" },
      { text: "Colleagues stayed here", color: "bg-[#06b5d333]" },
    ],
  },
  {
    title: "Taxi",
    badges: [{ text: "Preferred supplier", color: "bg-[#8a5bf533]" }],
  },
  {
    title: "Parking",
    badges: [{ text: "You've used before", color: "bg-[#06b5d333]" }],
  },
];

export const OverlaySection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center px-8 py-[37px] bg-[#f1f4f880] rounded-[10px]">
      <div className="flex flex-col max-w-md w-full items-start pt-0 pb-6 px-0">
        <div className="flex flex-col max-w-md items-start gap-3 w-full">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="w-full border-[#0000001a] rounded-[10px]"
            >
              <CardContent className="p-[17px] flex flex-col gap-2">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-sm tracking-[0] leading-5">
                    {card.title}
                  </div>
                </div>

                <div className="flex flex-wrap items-start gap-2 w-full">
                  {card.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      className={`${badge.color} px-2 py-1 rounded [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-4 whitespace-nowrap h-auto`}
                    >
                      {badge.text}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="inline-flex flex-col items-center">
        <p className="flex items-center justify-center w-fit [font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          Message cards with &quot;Negotiated rate&quot; and &quot;Colleagues
          stayed here&quot; tags.
        </p>
      </div>
    </section>
  );
};
