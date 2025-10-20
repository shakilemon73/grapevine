import { CheckIcon } from "lucide-react";
import React from "react";

const bulletPoints = [
  {
    text: "Policy adherence is harder than ever as public AI tools and consumer channels multiply.",
  },
  {
    text: "Grapevine gives travellers the convenience they expect within a secure, compliant, fully integrated ecosystem.",
  },
  {
    text: "Corporates save time and reduce cost, while TMCs increase attach revenue and strengthen loyalty.",
  },
];

export const SectionWrapper = (): JSX.Element => {
  return (
    <section className="pl-24 pr-[448px] py-20 bg-white flex flex-col items-start w-full">
      <div className="flex flex-col max-w-4xl items-start gap-8 w-full">
        <header className="flex flex-col items-start w-full">
          <h2 className="flex items-center justify-center w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-4xl tracking-[0] leading-10">
            Why It Matters
          </h2>
        </header>

        <div className="flex flex-col items-start gap-4 w-full">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3 w-full">
              <CheckIcon className="w-5 h-6 text-neutral-950 flex-shrink-0" />
              <p className="flex items-center justify-center [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-lg tracking-[0] leading-7">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
