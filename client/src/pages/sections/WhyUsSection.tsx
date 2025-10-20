import React from "react";
import { Mail, TrendingUp, Award, LineChart, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Mail,
    text: "Send branded, personalized prompts across email, SMS, WhatsApp, Slack, Teams, and voice",
  },
  {
    icon: TrendingUp,
    text: "Pair traveler context with historical and corporate data to surface relevant hotel and transport options",
  },
  {
    icon: Award,
    text: "Highlight hotels with negotiated rates and properties previously booked by the traveler or their colleagues",
  },
  {
    icon: LineChart,
    text: "Log engagement behavior to optimize future communications",
  },
];

export const WhyUsSection = (): JSX.Element => {
  return (
    <section 
      className="flex flex-col w-full max-w-[552px] items-start gap-6 p-10 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
      aria-labelledby="engage-heading"
      role="region"
    >
      <header className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-green-100 border border-green-200">
          <TrendingUp className="w-7 h-7 text-green-600" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <h2 id="engage-heading" className="text-3xl font-black text-gray-900">
            Engage
          </h2>
          <p className="text-sm text-gray-600">
            Right-time, right-channel messages that drive in-policy bookings
          </p>
        </div>
      </header>

      <ul className="flex flex-col items-start gap-4 w-full" role="list">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <li key={index} className="flex items-start gap-3 w-full group">
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <CheckCircle2 className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
              </div>
              <p className="flex-1 text-base text-gray-600 leading-relaxed">
                {feature.text}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
