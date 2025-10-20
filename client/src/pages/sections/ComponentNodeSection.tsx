import React from "react";

const features = [
  {
    text: "Unified dashboards for attach rate, spend, compliance, and engagement",
    icon: "/figmaAssets/svg-margin-3.svg",
  },
  {
    text: "AI-generated insights on traveller behaviour and supplier performance",
    icon: "/figmaAssets/svg-margin-1.svg",
  },
  {
    text: "Exportable reports for duty of care, finance, and procurement",
    icon: "/figmaAssets/svg-margin.svg",
  },
];

export const ComponentNodeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-3">
      <header className="flex items-center gap-3 w-full">
        <img
          className="w-10 h-10"
          alt="Overlay"
          src="/figmaAssets/overlay.svg"
        />

        <div className="inline-flex items-start flex-col">
          <h2 className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8 whitespace-nowrap">
            Report
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start w-full">
        <p className="[font-family:'Segoe_UI-Italic',Helvetica] italic text-lg leading-7 flex items-center justify-center self-stretch mt-[-1.00px] font-normal text-slate-500 tracking-[0]">
          Real-time visibility that closes the loop for TMCs and corporates.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 pt-3 pb-0 px-0 w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 w-full">
            <img
              className="w-5 h-6 flex-shrink-0"
              alt="CheckIcon icon"
              src={feature.icon}
            />

            <span className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-base tracking-[0] leading-6 whitespace-nowrap">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
