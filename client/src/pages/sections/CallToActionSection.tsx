import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const metricCards = [
  {
    icon: "/figmaAssets/svg-15.svg",
    label: "Attach rate",
    trend: "↑",
    width: "w-[216px]",
    position: "col-start-1 row-start-1",
  },
  {
    icon: "/figmaAssets/svg-6.svg",
    label: "In-policy %",
    trend: "↑",
    width: "w-[216px]",
    position: "col-start-2 row-start-1",
  },
  {
    icon: "/figmaAssets/svg-7.svg",
    label: "Expense admin",
    trend: "↓",
    width: "w-full",
    position: "col-span-2 row-start-2",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center pt-11 pb-[50px] px-8 bg-[#f1f4f880] rounded-[10px]">
      <div className="flex flex-col max-w-md w-full items-start pt-0 pb-6 px-0">
        <div className="grid grid-cols-2 gap-4 w-full">
          {metricCards.map((card, index) => (
            <Card
              key={index}
              className={`${card.position} ${card.width} h-[126px] rounded-[10px] bg-white border border-solid border-[#0000001a]`}
            >
              <CardContent className="flex flex-col p-[17px] h-full">
                <img
                  className="w-8 h-8"
                  alt={`${card.label} icon`}
                  src={card.icon}
                />
                <div className="flex flex-1 max-h-5 mt-2">
                  <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-sm tracking-[0] leading-5 whitespace-nowrap">
                    {card.label}
                  </p>
                </div>
                <div className="flex flex-1 max-h-8">
                  <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8 whitespace-nowrap">
                    {card.trend}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="inline-flex flex-col items-center -mt-1.5">
        <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          Dashboard tiles showing key metrics.
        </p>
      </div>
    </section>
  );
};
