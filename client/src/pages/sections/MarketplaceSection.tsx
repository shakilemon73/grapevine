import { ArrowRight, Sparkles, MoveRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Database, User, Bot, ShoppingBag, BarChart3 } from "lucide-react";

const layersData = [
  {
    icon: Database,
    title: "Data Layer",
    description: "Real-time ingestion from GDS, OBT, and back-office feeds",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    iconBg: "from-blue-500 to-cyan-600",
    glowColor: "blue-500",
    step: 1,
    gridArea: "lg:col-span-1 lg:row-span-2",
  },
  {
    icon: User,
    title: "Personalization Layer",
    description: "Traveler context, preferences, and historical booking data",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    bgGradient: "from-purple-500/10 via-pink-500/10 to-purple-500/10",
    iconBg: "from-purple-500 to-pink-600",
    glowColor: "purple-500",
    step: 2,
    gridArea: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: Bot,
    title: "AI Layer",
    description: "Secure, multi-channel and multi-modal assistant powering intelligent recommendations and natural language interactions",
    gradient: "from-cyan-500 via-teal-600 to-emerald-600",
    bgGradient: "from-cyan-500/10 via-teal-500/10 to-emerald-500/10",
    iconBg: "from-cyan-500 to-emerald-600",
    glowColor: "cyan-500",
    step: 3,
    gridArea: "lg:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: ShoppingBag,
    title: "Marketplace Layer",
    description: "Hotels plus full ancillary inventory",
    gradient: "from-green-500 via-emerald-600 to-teal-600",
    bgGradient: "from-green-500/10 via-emerald-500/10 to-green-500/10",
    iconBg: "from-green-500 to-emerald-600",
    glowColor: "green-500",
    step: 4,
    gridArea: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: BarChart3,
    title: "Insight Layer",
    description: "Dashboards, spend, compliance, and engagement",
    gradient: "from-orange-500 via-amber-600 to-yellow-600",
    bgGradient: "from-orange-500/10 via-amber-500/10 to-orange-500/10",
    iconBg: "from-orange-500 to-amber-600",
    glowColor: "orange-500",
    step: 5,
    gridArea: "lg:col-span-2 lg:row-span-2",
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 w-full relative">
        {layersData.map((layer, index) => {
          const Icon = layer.icon;
          const isHovered = hoveredIndex === index;
          const isFeatured = layer.featured;
          
          return (
            <article 
              key={index}
              className={`${layer.gridArea} group relative`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`layer-card-${index}`}
            >
              <Card className={`
                relative h-full overflow-hidden border-0 
                bg-white/80 backdrop-blur-xl
                transition-all duration-700 ease-out
                ${isHovered ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}
                ${isFeatured ? 'shadow-xl' : ''}
                rounded-3xl
              `}>
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${layer.bgGradient}
                  transition-opacity duration-700
                  ${isHovered ? 'opacity-100' : 'opacity-60'}
                `}></div>

                <div className={`
                  absolute -top-32 -right-32 w-64 h-64 
                  bg-gradient-to-br ${layer.iconBg} 
                  rounded-full blur-3xl 
                  transition-all duration-700
                  ${isHovered ? 'opacity-30 scale-150' : 'opacity-10'}
                `}></div>

                {isHovered && (
                  <>
                    <div className="absolute inset-0 shimmer-effect"></div>
                    <div className={`
                      absolute inset-0 
                      bg-gradient-to-br ${layer.gradient}
                      opacity-5
                      gradient-animate
                    `}></div>
                  </>
                )}

                <CardContent className={`
                  relative flex flex-col h-full
                  ${isFeatured ? 'p-8 lg:p-10' : 'p-6 lg:p-8'}
                  gap-6
                `}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="relative">
                      {isHovered && (
                        <div className={`
                          absolute inset-0 rounded-2xl
                          bg-gradient-to-br ${layer.iconBg}
                          opacity-30 blur-xl animate-pulse-ring
                        `}></div>
                      )}
                      
                      <div className={`
                        relative flex items-center justify-center 
                        ${isFeatured ? 'w-20 h-20 lg:w-24 lg:h-24' : 'w-16 h-16 lg:w-20 lg:h-20'}
                        rounded-2xl lg:rounded-3xl
                        bg-gradient-to-br ${layer.iconBg}
                        shadow-lg
                        transition-all duration-700
                        ${isHovered ? `scale-110 rotate-6 shadow-${layer.glowColor}/50 shadow-2xl` : ''}
                        ${isHovered ? 'animate-float' : ''}
                      `}>
                        <Icon 
                          className={`
                            ${isFeatured ? 'w-10 h-10 lg:w-12 lg:h-12' : 'w-8 h-8 lg:w-10 lg:h-10'}
                            text-white
                            transition-transform duration-500
                          `}
                          aria-hidden="true" 
                        />
                      </div>
                    </div>

                    <div className={`
                      flex items-center justify-center
                      w-10 h-10 lg:w-12 lg:h-12
                      rounded-xl lg:rounded-2xl
                      bg-gradient-to-br ${layer.iconBg}
                      text-white font-black
                      ${isFeatured ? 'text-lg lg:text-xl' : 'text-sm lg:text-base'}
                      shadow-lg
                      transition-all duration-500
                      ${isHovered ? 'scale-125 rotate-12 shadow-2xl' : ''}
                    `}>
                      {layer.step}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <div className="relative">
                      <h3 className={`
                        font-black text-gray-900
                        ${isFeatured ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'}
                        transition-all duration-300
                        ${isHovered ? 'scale-[1.02]' : ''}
                      `}>
                        {layer.title}
                      </h3>
                      
                      {isHovered && (
                        <div className={`
                          absolute -bottom-1 left-0 h-1 
                          bg-gradient-to-r ${layer.iconBg}
                          rounded-full
                          transition-all duration-500
                        `} style={{ width: isHovered ? '100%' : '0%' }}></div>
                      )}
                    </div>

                    <p className={`
                      text-gray-600 leading-relaxed
                      ${isFeatured ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}
                      transition-all duration-300
                      ${isHovered ? 'text-gray-800' : ''}
                    `}>
                      {layer.description}
                    </p>

                    {isFeatured && (
                      <div className="mt-auto pt-4 space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                          <CheckCircle2 className={`w-5 h-5 text-${layer.glowColor}`} />
                          <span>Multi-channel support</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                          <CheckCircle2 className={`w-5 h-5 text-${layer.glowColor}`} />
                          <span>Natural language processing</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {isHovered && (
                    <div className={`
                      flex items-center gap-2 
                      ${isFeatured ? 'text-base' : 'text-sm'}
                      font-bold
                      transition-all duration-300
                      mt-auto
                    `}>
                      <span className={`bg-gradient-to-r ${layer.iconBg} bg-clip-text text-transparent`}>
                        Explore Layer
                      </span>
                      <ArrowRight className={`w-5 h-5 text-${layer.glowColor} animate-pulse`} />
                    </div>
                  )}
                </CardContent>
              </Card>

              {index < layersData.length - 1 && (
                <div className={`
                  hidden lg:flex absolute 
                  ${index === 0 || index === 3 ? '-bottom-3 left-1/2 -translate-x-1/2' : '-right-3 top-1/2 -translate-y-1/2'}
                  z-20
                  transition-all duration-500
                  ${hoveredIndex === index || hoveredIndex === index + 1 ? 'scale-125' : ''}
                `}>
                  <div className="relative">
                    <div className={`
                      absolute inset-0 blur-lg
                      bg-gradient-to-r ${layer.iconBg}
                      opacity-50 rounded-full
                      transition-opacity duration-500
                      ${hoveredIndex === index || hoveredIndex === index + 1 ? 'opacity-80' : ''}
                    `}></div>
                    
                    <div className={`
                      relative w-8 h-8 rounded-full 
                      bg-gradient-to-r ${layer.iconBg}
                      flex items-center justify-center
                      shadow-xl
                      transition-all duration-500
                      ${hoveredIndex === index || hoveredIndex === index + 1 ? 'rotate-90' : ''}
                    `}>
                      <MoveRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col items-center gap-6">
        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-50 via-white to-gray-50 border-2 border-gray-200/50 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-2">
            {layersData.map((layer, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="relative">
                  {hoveredIndex === index && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${layer.iconBg} rounded-full blur-md opacity-60 animate-pulse`}></div>
                  )}
                  <div 
                    className={`
                      relative w-3 h-3 rounded-full 
                      bg-gradient-to-r ${layer.iconBg}
                      transition-all duration-500
                      ${hoveredIndex === index ? 'scale-[2] shadow-2xl' : 'scale-100'}
                    `}
                  ></div>
                </div>
                {index < layersData.length - 1 && (
                  <div className={`
                    w-12 h-1 rounded-full
                    bg-gradient-to-r ${layer.iconBg}
                    opacity-30
                    transition-all duration-500
                    ${hoveredIndex === index || hoveredIndex === index + 1 ? 'opacity-60 scale-110' : ''}
                  `}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-3 pl-3 border-l-2 border-gray-300">
            <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-gray-800">
              5-Step Platform Architecture
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center max-w-2xl">
          Our modular platform layers work seamlessly together to deliver intelligent, 
          personalized travel experiences at enterprise scale
        </p>
      </div>
    </section>
  );
};
