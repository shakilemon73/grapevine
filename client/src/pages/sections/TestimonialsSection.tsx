import React from "react";
import { MessageSquare, Shield, Zap, Brain, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    text: "Multi-channel and multi-modal: chat or voice on SMS, WhatsApp, Slack, Teams, and email",
  },
  {
    icon: Shield,
    text: "Delivers all the functionality of public LLMs within a secure walled garden, preventing data leakage",
    boldWords: ["secure walled garden"],
  },
  {
    icon: Zap,
    text: "Fully integrated with booking and expense systems for seamless updates and cost savings",
  },
  {
    icon: Brain,
    text: 'Learns traveler preferences (e.g., "likes sushi restaurants") to provide smarter recommendations over time',
  },
];

const renderTextWithBold = (text: string, boldWords?: string[]) => {
  if (!boldWords || boldWords.length === 0) {
    return text;
  }

  const parts = [];
  let remainingText = text;
  let key = 0;

  boldWords.forEach((boldWord) => {
    const index = remainingText.indexOf(boldWord);
    if (index !== -1) {
      if (index > 0) {
        parts.push(
          <span key={key++}>{remainingText.substring(0, index)}</span>,
        );
      }
      parts.push(
        <span key={key++} className="font-bold text-gray-900">
          {boldWord}
        </span>,
      );
      remainingText = remainingText.substring(index + boldWord.length);
    }
  });

  if (remainingText) {
    parts.push(<span key={key++}>{remainingText}</span>);
  }

  return parts;
};

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section 
      className="flex flex-col w-full max-w-[552px] items-start gap-6 p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
      aria-labelledby="ai-support-heading"
      role="region"
    >
      <header className="flex items-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100">
          <MessageSquare className="w-7 h-7 text-blue-600" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <h2 id="ai-support-heading" className="text-3xl font-black text-gray-900">
            24/7 AI Support
          </h2>
          <p className="text-sm text-gray-600">
            Conversational assistance, available on any channel
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
                {renderTextWithBold(feature.text, feature.boldWords)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
