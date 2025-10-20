import { Bot, User, Check, CheckCheck } from "lucide-react";

interface Message {
  type: 'user' | 'agent';
  text: string;
  time?: string;
}

interface ChatMockupProps {
  messages: Message[];
  gradient: string;
}

export const ChatMockup = ({ messages, gradient }: ChatMockupProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
      <div className={`bg-gradient-to-r ${gradient} px-6 py-4 flex items-center gap-3`}>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-bold text-sm">Grapevine AI Assistant</h4>
          <p className="text-white/80 text-xs">Active now</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
      </div>

      <div className="bg-gray-50 p-6 space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`
              flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
              ${message.type === 'agent' 
                ? `bg-gradient-to-br ${gradient}` 
                : 'bg-gray-300'
              }
            `}>
              {message.type === 'agent' ? (
                <Bot className="w-5 h-5 text-white" />
              ) : (
                <User className="w-5 h-5 text-gray-700" />
              )}
            </div>

            <div className={`flex flex-col gap-1 max-w-[75%] ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`
                px-4 py-3 rounded-2xl
                ${message.type === 'agent' 
                  ? 'bg-white shadow-md border border-gray-200 rounded-tl-none' 
                  : `bg-gradient-to-br ${gradient} text-white shadow-md rounded-tr-none`
                }
              `}>
                <p className={`text-sm leading-relaxed ${message.type === 'agent' ? 'text-gray-800' : 'text-white'}`}>
                  {message.text}
                </p>
              </div>
              {message.time && (
                <div className="flex items-center gap-1 px-2">
                  <span className="text-xs text-gray-400">{message.time}</span>
                  {message.type === 'user' && (
                    <CheckCheck className="w-3 h-3 text-blue-500" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-t border-gray-200 px-6 py-4 flex items-center gap-3">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
          <p className="text-sm text-gray-400">Type a message...</p>
        </div>
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
