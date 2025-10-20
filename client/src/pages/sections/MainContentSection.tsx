import React from "react";
import { Button } from "@/components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="pl-24 pr-[576px] py-40 bg-white flex flex-col items-start w-full">
      <div className="flex flex-col max-w-screen-md items-start gap-6 w-full">
        <header className="w-full flex flex-col items-start">
          <h1 className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-6xl tracking-[0] leading-[60px]">
            Powered by the Grapevine
            <br />
            Core Platform
          </h1>
        </header>

        <div className="flex flex-col items-start pt-0 pb-2 px-0 w-full">
          <p className="self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-2xl tracking-[0] leading-8">
            A real-time, zero-trust Customer Data Platform with a
            personalisation
            <br />
            layer and an ancillary content marketplace.
          </p>
        </div>

        <Button className="h-10 pt-[9.5px] pb-[10.5px] px-6 bg-indigo-500 hover:bg-indigo-600 rounded-lg">
          <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Book a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};
