import React from "react";

const serviceItems = [
  {
    icon: "/figmaAssets/svg-8.svg",
    label: "Hotel",
  },
  {
    icon: "/figmaAssets/svg-13.svg",
    label: "Transfer",
  },
  {
    icon: "/figmaAssets/svg-11.svg",
    label: "Parking",
  },
  {
    icon: "/figmaAssets/svg-10.svg",
    label: "Lounge",
  },
  {
    icon: "/figmaAssets/svg-14.svg",
    label: "Fast Track",
  },
  {
    icon: "/figmaAssets/svg-16.svg",
    label: "Restaurant",
  },
  {
    icon: "/figmaAssets/svg-17.svg",
    label: "Activities",
  },
  {
    icon: "/figmaAssets/svg.svg",
    label: "Destination Advice",
  },
  {
    icon: "/figmaAssets/svg-12.svg",
    label: "Travel Risk",
  },
];

export const InfoSection = (): JSX.Element => {
  return (
    <nav className="flex items-start justify-center gap-8 px-0 py-[25px] w-full border-t border-b border-[#0000001a]">
      {serviceItems.map((item, index) => (
        <button
          key={index}
          className="inline-flex flex-col min-w-[60px] items-center gap-2 px-2 py-0 hover:opacity-80 transition-opacity"
        >
          <img className="w-6 h-6" alt={item.label} src={item.icon} />
          <span className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};
