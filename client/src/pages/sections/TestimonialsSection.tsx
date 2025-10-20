import React from "react";

const features = [
  {
    icon: "/figmaAssets/svg-margin-19.svg",
    text: "Multi-channel and multi-modal: chat or voice on SMS, WhatsApp, Slack, Teams, and email",
  },
  {
    icon: "/figmaAssets/svg-margin-10.svg",
    text: "Delivers all the functionality of public LLMs within a secure walled garden, preventing data leakage",
    boldWords: ["secure walled garden"],
  },
  {
    icon: "/figmaAssets/svg-margin-4.svg",
    text: "Fully integrated with booking and expense systems for seamless updates and cost savings",
  },
  {
    icon: "/figmaAssets/svg-margin-2.svg",
    text: 'Learns traveller preferences (e.g., "likes sushi restaurants") to provide smarter recommendations over time',
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
        <span key={key++} className="font-bold">
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
    <section className="flex flex-col w-full max-w-[552px] items-start gap-3">
      <header className="flex items-center gap-3 w-full">
        <img
          className="w-10 h-10"
          alt="Support icon"
          src="/figmaAssets/overlay-1.svg"
        />
        <div className="inline-flex items-start flex-col">
          <h2 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-2xl tracking-[0] leading-8 whitespace-nowrap">
            Support
          </h2>
        </div>
      </header>

      <div className="flex flex-col items-start w-full">
        <p className="[font-family:'Segoe_UI-Italic',Helvetica] font-normal italic text-slate-500 text-lg tracking-[0] leading-7">
          24-hour conversational AI assistance, available on any channel.
        </p>
      </div>

      <ul className="flex flex-col items-start gap-3 pt-3 w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 w-full">
            <img
              className="w-5 h-6 flex-shrink-0"
              alt="CheckIcon icon"
              src={feature.icon}
            />
            <p className="flex-1 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-base tracking-[0] leading-6">
              {renderTextWithBold(feature.text, feature.boldWords)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
