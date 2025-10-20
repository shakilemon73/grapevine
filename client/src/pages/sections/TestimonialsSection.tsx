import { MessageSquare, Shield, Zap, Brain, Mail, MessageCircle, Send } from "lucide-react";
import { SiSlack, SiWhatsapp } from "react-icons/si";

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
      className="flex flex-col w-full max-w-[552px] items-start gap-8 p-10 rounded-3xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      aria-labelledby="ai-support-heading"
      role="region"
    >
      <header className="flex items-center gap-4 w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
            <MessageSquare className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h2 id="ai-support-heading" className="text-3xl font-black text-gray-900">
            24/7 AI Support
          </h2>
          <p className="text-sm text-gray-600">
            Conversational assistance, available on any channel
          </p>
        </div>
      </header>

      <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black text-gray-400 uppercase tracking-wider">Multi-Channel</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-bold text-green-600">Online</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-700">Email</span>
          </div>

          <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <SiWhatsapp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-700">WhatsApp</span>
          </div>

          <div className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <SiSlack className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-700">Slack</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
              U
            </div>
            <div className="flex-1 bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
              <p className="text-sm text-gray-700">Need a hotel near JFK tonight</p>
            </div>
          </div>

          <div className="flex items-start gap-3 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 shadow-md">
              <p className="text-sm text-white">I found 3 in-policy hotels near JFK Airport. The Courtyard Marriott has your preferred sushi restaurant nearby 🍣</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-gray-900">Secure</p>
            <p className="text-xs text-gray-600">Walled garden</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-gray-900">Smart</p>
            <p className="text-xs text-gray-600">Learns preferences</p>
          </div>
        </div>
      </div>
    </section>
  );
};
