import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const messages = [
  {
    sender: "Traveller",
    content: '"Add taxi to my trip?"',
    isUser: true,
  },
  {
    sender: "Sophie",
    content: '"Booked. Your driver will meet you at arrivals."',
    isUser: false,
  },
  {
    sender: "Traveller",
    content: '"Where can I get good sushi nearby?"',
    isUser: true,
  },
  {
    sender: "Sophie",
    content:
      '"Try Sushi Place, 200m from your hotel. Colleagues rated it 4.8\nstars."',
    isUser: false,
  },
];

export const OverlayWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-8 bg-[#f1f4f880] rounded-[10px]">
      <div className="flex flex-col max-w-md w-full items-start pt-0 pb-6 px-0">
        <div className="flex flex-col max-w-md items-start gap-3 w-full">
          {messages.map((message, index) => (
            <Card
              key={index}
              className={`w-full ${
                message.isUser
                  ? "bg-white border border-solid border-[#0000001a]"
                  : "bg-[#6365f01a] border-0"
              } rounded-[10px]`}
            >
              <CardContent className="flex flex-col items-start gap-1 p-4">
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5">
                    {message.sender}
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div className="flex items-center justify-center w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-sm tracking-[0] leading-5 whitespace-pre-line">
                    {message.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="inline-flex flex-col items-center">
        <p className="flex items-center justify-center w-fit [font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
          AI confirms, updates itinerary, and suggests a nearby sushi
          restaurant.
        </p>
      </div>
    </section>
  );
};
