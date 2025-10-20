import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Bot, Star } from "lucide-react";

const messages = [
  {
    sender: "Sarah",
    content: "Add taxi to my trip?",
    isUser: true,
    time: "2:34 PM",
  },
  {
    sender: "Sophie AI",
    content: "Booked! Your driver will meet you at arrivals. Confirmation sent to your email.",
    isUser: false,
    time: "2:34 PM",
  },
  {
    sender: "Sarah",
    content: "Where can I get good sushi nearby?",
    isUser: true,
    time: "2:35 PM",
  },
  {
    sender: "Sophie AI",
    content:
      "Try Sushi Moments, just 200m from your hotel. 5 of your colleagues rated it 4.8 stars. Would you like a reservation?",
    isUser: false,
    time: "2:35 PM",
    hasRating: true,
  },
];

export const OverlayWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center p-10 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100">
      <div className="flex flex-col max-w-md w-full gap-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            {!message.isUser && (
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center border-2 border-white shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            
            <Card
              className={`max-w-[80%] ${
                message.isUser
                  ? "bg-white border border-gray-200"
                  : "bg-gradient-to-br from-blue-50 to-white border border-blue-100"
              } rounded-2xl shadow-sm`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${message.isUser ? "text-gray-600" : "text-blue-600"}`}>
                    {message.sender}
                  </span>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-900 leading-relaxed">
                  {message.content}
                </p>
                {message.hasRating && (
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-blue-100">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-xs font-semibold text-gray-600">4.8 rating</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {message.isUser && (
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center border-2 border-white shadow-md">
                <User className="w-5 h-5 text-gray-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm text-center text-gray-600 max-w-md">
        Natural conversation with instant booking confirmations and personalized recommendations
      </p>
    </section>
  );
};
