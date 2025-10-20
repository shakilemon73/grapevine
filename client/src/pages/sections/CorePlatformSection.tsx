import React from "react";
import { Button } from "@/components/ui/button";

export const CorePlatformSection = (): JSX.Element => {
  return (
    <section className="pl-24 pr-[576px] py-20 bg-indigo-500 flex flex-col items-start w-full">
      <div className="flex flex-col max-w-screen-md items-start gap-6 w-full">
        <header className="flex flex-col items-start self-stretch w-full">
          <h2 className="flex items-center justify-center self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-4xl tracking-[0] leading-10">
            Ready to see Grapevine in action?
          </h2>
        </header>

        <div className="flex flex-col items-start pt-0 pb-2 px-0 self-stretch w-full opacity-90">
          <p className="flex items-center justify-center self-stretch [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-7">
            Book a demo today and discover how Grapevine transforms business
            travel.
          </p>
        </div>

        <Button className="h-10 pt-[9.5px] pb-[10.5px] px-6 bg-violet-500 rounded-lg hover:bg-violet-600">
          <span className="flex items-center justify-center [font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
            Book a Demo
          </span>
        </Button>
      </div>
    </section>
  );
};
