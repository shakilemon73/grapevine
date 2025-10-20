import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "TMCs", active: false },
  { label: "Corporates", active: false },
  { label: "Product", active: true },
  { label: "About", active: false },
  { label: "Resources", active: false },
  { label: "Contact", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex flex-col w-full items-start pt-4 pb-[17px] px-24 bg-white border-b border-[#0000001a]">
      <div className="flex items-center justify-between max-w-screen-xl w-full h-9">
        <div className="flex items-center pt-[3px] pb-0 px-0">
          <div className="w-[124.89px] h-8 bg-[url(/figmaAssets/grapevine-1.png)] bg-cover bg-[50%_50%]" />
        </div>

        <nav className="flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap ${
                item.active ? "text-indigo-500" : "text-slate-500"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button className="h-9 pt-[7.5px] pb-[8.5px] px-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg">
          <span className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Book a Demo
          </span>
        </Button>
      </div>
    </header>
  );
};
