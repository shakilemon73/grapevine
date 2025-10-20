import { ArrowRight, MoveRight } from "lucide-react";
import { Database, User, Bot, ShoppingBag, BarChart3 } from "lucide-react";

const layersData = [
  {
    icon: Database,
    label: "Foundation",
    title: "Data Layer",
    description: "Real-time ingestion from GDS, OBT, and back-office feeds",
    step: "01",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: User,
    label: "Intelligence",
    title: "Personalization Layer",
    description: "Traveler context, preferences, and historical booking data",
    step: "02",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Bot,
    label: "Automation",
    title: "AI Layer",
    description: "Secure, multi-channel and multi-modal assistant",
    step: "03",
    color: "cyan",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: ShoppingBag,
    label: "Commerce",
    title: "Marketplace Layer",
    description: "Hotels plus full ancillary inventory",
    step: "04",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    title: "Insight Layer",
    description: "Dashboards, spend, compliance, and engagement",
    step: "05",
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
  },
];

export const MarketplaceSection = (): JSX.Element => {
  return (
    <section 
      className="w-full"
      aria-label="Platform architecture layers"
      role="region"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 w-full relative">
        {layersData.map((layer, index) => {
          const Icon = layer.icon;
          
          return (
            <article 
              key={index}
              className="group flex flex-col relative"
              data-testid={`layer-card-${index}`}
            >
              {index < layersData.length - 1 && (
                <div className="hidden lg:block absolute -right-8 top-24 z-10">
                  <MoveRight className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </div>
              )}

              <div className="mb-6">
                <span className={`inline-block text-xs font-bold text-${layer.color}-600 uppercase tracking-widest`}>
                  {layer.label}
                </span>
              </div>

              <div className="flex items-start gap-5 mb-8">
                <div className={`
                  flex items-center justify-center 
                  w-20 h-20 rounded-2xl 
                  bg-gradient-to-br ${layer.gradient}
                  shadow-lg group-hover:shadow-xl group-hover:scale-110
                  transition-all duration-300
                `}>
                  <Icon className="w-10 h-10 text-white" aria-hidden="true" />
                </div>
                <span className="text-6xl font-black text-gray-100 leading-none mt-2">
                  {layer.step}
                </span>
              </div>

              <h3 className={`
                text-3xl font-black text-gray-900 mb-5
                group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${layer.gradient}
                transition-all duration-300
              `}>
                {layer.title}
              </h3>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 flex-1">
                {layer.description}
              </p>

              <a 
                href="#"
                className={`
                  inline-flex items-center gap-2 
                  text-base font-bold text-${layer.color}-600
                  group/link
                `}
                data-testid={`link-learn-more-${index}`}
              >
                Learn more
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>

              <div className={`
                absolute bottom-0 left-0 w-0 h-1 
                bg-gradient-to-r ${layer.gradient}
                group-hover:w-full
                transition-all duration-500 ease-out
                rounded-full
              `}></div>
            </article>
          );
        })}
      </div>

      <div className="mt-16 pt-12 border-t border-gray-200">
        <div className="flex items-center justify-center gap-3">
          {layersData.map((layer, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`
                w-3 h-3 rounded-full 
                bg-gradient-to-r ${layer.gradient}
                shadow-sm
              `}></div>
              {index < layersData.length - 1 && (
                <div className="w-16 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">
          5-step platform architecture for intelligent travel management
        </p>
      </div>
    </section>
  );
};
