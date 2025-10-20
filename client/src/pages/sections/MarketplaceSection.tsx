import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const layersData = [
  {
    icon: "/figmaAssets/margin-1.svg",
    title: "Data Layer",
    description:
      "Real-time ingestion from\nGDS, OBT, mid- and\nback-office feeds",
  },
  {
    icon: "/figmaAssets/margin-3.svg",
    title: "Personalisation Layer",
    description: "Traveller context,\npreferences, historical\nbooking data",
  },
  {
    icon: "/figmaAssets/margin-4.svg",
    title: "AI Layer",
    description: "Secure, multi-channel\nand multi-modal\nassistant",
  },
  {
    icon: "/figmaAssets/margin.svg",
    title: "Marketplace Layer",
    description: "Hotels plus full ancillary\ninventory",
  },
  {
    icon: "/figmaAssets/margin-2.svg",
    title: "Insight Layer",
    description: "Dashboards, spend,\ncompliance, engagement",
  },
];

export const MarketplaceSection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center gap-3 pt-8 pb-0 px-0 w-full">
      {layersData.map((layer, index) => (
        <React.Fragment key={index}>
          <Card className="flex-1 bg-white rounded-[10px] border-2 border-[#0000001a]">
            <CardContent className="flex flex-col items-start p-[26px]">
              <img
                className="w-[159.19px] h-16"
                alt={layer.title}
                src={layer.icon}
              />

              <div className="pt-0 pb-2 px-0 w-full flex flex-col items-start">
                <div className="flex items-center w-full flex-col">
                  <h3 className="flex items-center justify-center w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-base text-center tracking-[0] leading-6">
                    {layer.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <p className="[font-family:'Segoe_UI-Regular',Helvetica] text-sm text-center leading-5 flex items-center justify-center w-full font-normal text-slate-500 tracking-[0] whitespace-pre-line">
                  {layer.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {index < layersData.length - 1 && (
            <ChevronRightIcon className="w-6 h-6 text-slate-400" />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};
