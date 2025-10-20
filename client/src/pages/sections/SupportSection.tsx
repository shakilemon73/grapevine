import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    text: "Pulls live, bookable content from trusted suppliers into the assistant",
  },
  {
    text: "Presents options aligned with traveller preferences and company policy",
  },
  {
    text: "Routes every ancillary booking back through TMC systems for full visibility and control",
  },
];

export const SupportSection = (): JSX.Element => {
  return (
    <section className="flex items-start justify-center gap-12 w-full">
      <Card className="w-[552px] min-h-[500px] bg-slate-100 rounded-[10px] border-0">
        <CardContent className="flex items-center justify-center px-12 py-[108px] h-full">
          <div className="relative w-full max-w-[456px] h-[284px]">
            <img
              className="absolute w-full top-0 left-0 h-48"
              alt="Container"
              src="/figmaAssets/container.svg"
            />

            <div className="flex flex-col w-full items-center absolute top-[216px] left-0">
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                [Image Placeholder]
              </p>
            </div>

            <div className="flex flex-col w-full items-center absolute top-[244px] left-0">
              <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-sm text-center tracking-[0] leading-5">
                Visual mosaic of ancillary tiles funneling into a chat
                interface, then flowing
                <br />
                back out to TMC and corporate systems - forming a closed data
                loop.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col w-[552px] items-start gap-6">
        <div className="flex items-start self-stretch w-full flex-col">
          <h2 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8">
            Everything a traveller needs, connected through
            <br />
            one secure ecosystem.
          </h2>
        </div>

        <div className="flex flex-col items-start gap-4 self-stretch w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 self-stretch w-full"
            >
              <img
                className="w-5 h-6 flex-shrink-0"
                alt="Checkmark"
                src="/figmaAssets/svg-margin-12.svg"
              />
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-base tracking-[0] leading-6 flex-1">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
