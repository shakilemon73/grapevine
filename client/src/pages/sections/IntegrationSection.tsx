import { CheckIcon } from "lucide-react";
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
    text: "Detect traveller and corporate context (who they work for, where they're going, policy tier)",
  },
];

export const IntegrationSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-start justify-center gap-12 relative">
      <Card className="flex flex-col w-full max-w-[552px] min-h-[400px] items-center justify-center px-8 py-[136px] bg-[#f1f4f880] rounded-[10px] border-0">
        <CardContent className="flex flex-col items-center gap-2 p-0">
          <img
            className="w-16 h-20"
            alt="Svg margin"
            src="/figmaAssets/svg-margin-5.svg"
          />

          <div className="flex flex-col items-center gap-2">
            <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              [Image Placeholder]
            </p>

            <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              Itinerary view with missing items flagged in red alert icons.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col w-full max-w-[552px] items-start gap-3">
        <header className="flex items-center gap-3 w-full">
          <img
            className="w-10 h-10"
            alt="Overlay"
            src="/figmaAssets/overlay-3.svg"
          />

          <h2 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8 whitespace-nowrap">
            Detect
          </h2>
        </header>

        <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-lg tracking-[0] leading-7 w-full">
          Spot what&#39;s missing the moment a trip is booked.
        </p>

        <ul className="flex flex-col items-start gap-3 pt-3 w-full">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start gap-3 w-full">
              <CheckIcon className="w-5 h-6 text-slate-500 flex-shrink-0" />
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-base tracking-[0] leading-6 flex-1">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
