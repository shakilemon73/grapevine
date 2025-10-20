import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, User, Bot, ShoppingBag, BarChart3 } from "lucide-react";

const layersData = [
  {
    icon: Database,
    title: "Data Layer",
    description: "Real-time ingestion from GDS, OBT, and back-office feeds",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
    glowColor: "shadow-blue-500/50",
    step: 1,
  },
  {
    icon: User,
    title: "Personalization Layer",
    description: "Traveler context, preferences, and historical booking data",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    glowColor: "shadow-purple-500/50",
    step: 2,
  },
  {
    icon: Bot,
    title: "AI Layer",
    description: "Secure, multi-channel and multi-modal assistant",
    gradient: "from-cyan-500 to-teal-500",
    bgGradient: "from-cyan-50 to-teal-50",
    iconColor: "text-cyan-600",
    glowColor: "shadow-cyan-500/50",
    step: 3,
  },
  {
    icon: ShoppingBag,
    title: "Marketplace Layer",
    description: "Hotels plus full ancillary inventory",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
    glowColor: "shadow-green-500/50",
    step: 4,
  },
  {
    icon: BarChart3,
    title: "Insight Layer",
    description: "Dashboards, spend, compliance, and engagement",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    iconColor: "text-orange-600",
    glowColor: "shadow-orange-500/50",
    step: 5,
  },
];

export const MarketplaceSection = (): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section 
      className="w-full pt-8"
      aria-label="Platform architecture layers"
      role="region"
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full relative">
        {layersData.map((layer, index) => {
          const Icon = layer.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <div key={index} className="relative flex flex-col items-center">
              <article 
                className="w-full group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-testid={`layer-card-${index}`}
              >
                <Card className={`
                  relative overflow-hidden border-0 bg-white
                  transition-all duration-500 ease-out
                  ${isHovered ? 'shadow-2xl scale-105 -translate-y-2' : 'shadow-lg hover:shadow-xl'}
                  rounded-3xl
                `}>
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${layer.bgGradient} opacity-40
                    transition-opacity duration-500
                    ${isHovered ? 'opacity-60' : ''}
                  `}></div>
                  
                  {isHovered && (
                    <div className="absolute inset-0 shimmer-effect"></div>
                  )}

                  <div className={`
                    absolute -top-20 -right-20 w-40 h-40 
                    bg-gradient-to-br ${layer.gradient} 
                    rounded-full blur-3xl opacity-20
                    ${isHovered ? 'opacity-30 animate-pulse-glow' : ''}
                    transition-opacity duration-500
                  `}></div>

                  <CardContent className="relative flex flex-col items-center text-center p-8 h-full gap-6">
                    <div className="relative">
                      <div className={`
                        absolute inset-0 bg-gradient-to-br ${layer.gradient} 
                        rounded-2xl blur-xl opacity-40
                        ${isHovered ? 'opacity-60 scale-110' : ''}
                        transition-all duration-500
                      `}></div>
                      
                      <div className={`
                        relative flex items-center justify-center 
                        w-20 h-20 rounded-2xl 
                        bg-gradient-to-br ${layer.gradient}
                        shadow-lg ${isHovered ? layer.glowColor : ''}
                        transition-all duration-500
                        ${isHovered ? 'scale-110 rotate-6 shadow-2xl' : 'hover:scale-105'}
                      `}>
                        <Icon 
                          className={`w-10 h-10 text-white transition-transform duration-500 ${isHovered ? 'animate-float' : ''}`} 
                          aria-hidden="true" 
                        />
                      </div>

                      <div className={`
                        absolute -top-2 -right-2 
                        w-8 h-8 rounded-full 
                        bg-gradient-to-br ${layer.gradient}
                        flex items-center justify-center
                        text-white text-xs font-bold
                        shadow-lg
                        transition-all duration-500
                        ${isHovered ? 'scale-125 rotate-12' : ''}
                      `}>
                        {layer.step}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                      <div className="relative inline-block">
                        <h3 className={`
                          text-lg font-black text-gray-900
                          transition-all duration-300
                          ${isHovered ? 'scale-105' : ''}
                        `}>
                          {layer.title}
                        </h3>
                        {isHovered && (
                          <div className={`
                            absolute -bottom-1 left-0 right-0 h-0.5 
                            bg-gradient-to-r ${layer.gradient}
                            transform origin-left animate-pulse
                          `}></div>
                        )}
                      </div>

                      <p className={`
                        text-sm text-gray-600 leading-relaxed
                        transition-all duration-300
                        ${isHovered ? 'text-gray-800' : ''}
                      `}>
                        {layer.description}
                      </p>
                    </div>

                    {isHovered && (
                      <div className="flex items-center gap-2 text-xs font-semibold">
                        <span className={`bg-gradient-to-r ${layer.gradient} bg-clip-text text-transparent`}>
                          Learn More
                        </span>
                        <Sparkles className={`w-4 h-4 ${layer.iconColor} animate-pulse`} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </article>

              {index < layersData.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className={`
                      absolute inset-0 blur-md
                      bg-gradient-to-r ${layer.gradient}
                      opacity-50
                      ${hoveredIndex === index || hoveredIndex === index + 1 ? 'opacity-70 scale-110' : ''}
                      transition-all duration-500
                    `}></div>
                    
                    <div className={`
                      relative w-6 h-6 rounded-full 
                      bg-white
                      flex items-center justify-center
                      shadow-lg border-2
                      bg-gradient-to-r ${layer.gradient}
                      ${hoveredIndex === index || hoveredIndex === index + 1 ? 'scale-125 rotate-90' : ''}
                      transition-all duration-500
                    `}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-1.5">
            {layersData.map((layer, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div 
                  className={`
                    w-2 h-2 rounded-full 
                    bg-gradient-to-r ${layer.gradient}
                    ${hoveredIndex === index ? 'scale-150 shadow-lg' : ''}
                    transition-all duration-300
                  `}
                ></div>
                {index < layersData.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-gray-600 ml-2">
            5-Step Process Flow
          </span>
        </div>
      </div>
    </section>
  );
};
