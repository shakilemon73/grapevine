import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featuresData = [
  {
    number: "1",
    title: "Map to your data",
    description:
      "Connect securely to your booking, mid- and back-office systems.",
  },
  {
    number: "2",
    title: "Integrate your suppliers",
    description:
      "Sync hotel and ancillary content from your preferred partners.",
  },
  {
    number: "3",
    title: "White-label, test, and launch",
    description:
      "We brand Grapevine to your agency, run end-to-end testing, and go live.",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex max-w-6xl w-full items-start justify-center gap-8 pt-4 pb-0 px-0">
      {featuresData.map((feature, index) => (
        <Card key={index} className="flex-1 rounded-[14px] border-[#0000001a]">
          <CardContent className="p-6 h-[180px] flex flex-col">
            <div className="flex w-10 h-10 items-center justify-center bg-[#6365f01a] rounded-[10px] mb-4">
              <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-indigo-500 text-lg leading-7">
                {feature.number}
              </span>
            </div>

            <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-base leading-6 mb-3">
              {feature.title}
            </h3>

            <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm leading-5">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
