import React from "react";

const features = [
  {
    icon: "/figmaAssets/svg-margin-13.svg",
    text: "Send branded, personalised prompts across email, SMS, WhatsApp, Slack,\nTeams, and voice",
  },
  {
    icon: "/figmaAssets/svg-margin-9.svg",
    text: "Pair traveller context with historical and corporate data to surface\nrelevant hotel and transport options",
  },
  {
    icon: "/figmaAssets/svg-margin-6.svg",
    text: "Highlight hotels with negotiated rates and properties previously booked\nby the traveller or their colleagues",
  },
  {
    icon: "/figmaAssets/svg-margin-11.svg",
    text: "Log engagement behaviour to optimise future communications",
  },
];

export const WhyUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-3">
      <div className="flex items-center gap-3 w-full">
        <img
          className="w-10 h-10 flex-shrink-0"
          alt="Overlay"
          src="/figmaAssets/overlay-2.svg"
        />

        <div className="inline-flex items-start flex-col">
          <h2 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8">
            Engage
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-start w-full">
        <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-lg tracking-[0] leading-7">
          Right-time, right-channel messages that drive in-policy bookings
          <br />
          automatically.
        </p>
      </div>

      <div className="flex flex-col items-start gap-3 pt-3 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 w-full">
            <img
              className="w-5 h-6 flex-shrink-0"
              alt="Feature icon"
              src={feature.icon}
            />

            <div className="flex-1">
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-base tracking-[0] leading-6 whitespace-pre-line">
                {feature.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
