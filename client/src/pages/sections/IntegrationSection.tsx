import { Search, CheckCircle2, ArrowRight, Network, Cpu } from "lucide-react";
import { ProcessVisualization } from "@/components/ProcessVisualization";

const steps = [
  {
    number: "01",
    label: "Detect",
    title: "Spot what's missing the moment a trip is booked",
    icon: Search,
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
    visualType: 'detect' as const,
    features: [
      "Identify gaps such as hotel, transfer, parking, lounge, or fast track",
      "Flag incomplete itineraries to trigger right-time follow-up",
      "Detect traveler and corporate context (who they work for, where they're going, policy tier)",
    ],
  },
  {
    number: "02",
    label: "Engage",
    title: "Right-time, right-channel messages that drive in-policy bookings",
    icon: Network,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    visualType: 'engage' as const,
    features: [
      "Send branded, personalized prompts across email, SMS, WhatsApp, Slack, Teams, and voice",
      "Pair traveler context with historical and corporate data to surface relevant hotel and transport options",
      "Highlight hotels with negotiated rates and properties previously booked by the traveler or their colleagues",
      "Log engagement behavior to optimize future communications",
    ],
  },
  {
    number: "03",
    label: "Optimize",
    title: "Continuous learning from every interaction",
    icon: Cpu,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    visualType: 'optimize' as const,
    features: [
      "Track booking patterns and preferences across your organization",
      "Optimize recommendation algorithms based on acceptance rates",
      "Measure ROI and compliance improvements in real-time",
    ],
  },
];

export const IntegrationSection = (): JSX.Element => {
  return (
    <section className="w-full space-y-24">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isEven = index % 2 === 0;
        
        return (
          <article 
            key={index}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 w-full items-center`}
            data-testid={`workflow-step-${index}`}
          >
            <div className={`${!isEven ? 'lg:order-2' : ''}`}>
              <ProcessVisualization type={step.visualType} gradient={step.gradient} />
            </div>

            <div className={`flex flex-col gap-6 ${!isEven ? 'lg:order-1' : ''}`}>
              <div className="inline-block">
                <span className={`text-xs font-bold text-${step.color}-600 uppercase tracking-widest`}>
                  Step {step.number}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className={`
                  flex items-center justify-center 
                  w-16 h-16 rounded-2xl 
                  bg-gradient-to-br ${step.gradient}
                  shadow-lg
                `}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  {step.label}
                </h2>
              </div>

              <p className="text-xl text-gray-600 leading-relaxed">
                {step.title}
              </p>

              <ul className="flex flex-col gap-4 mt-4" role="list">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-4 group/item">
                    <div className={`
                      flex-shrink-0 w-6 h-6 mt-1 rounded-full 
                      bg-gradient-to-br ${step.gradient}
                      flex items-center justify-center
                      group-hover/item:scale-125 transition-transform duration-300
                    `}>
                      <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <a 
                href="#"
                className={`
                  inline-flex items-center gap-2 
                  text-base font-bold text-${step.color}-600
                  mt-4 group/link
                `}
                data-testid={`link-learn-more-${index}`}
              >
                Learn more about {step.label}
                <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
              </a>
            </div>

            {index < steps.length - 1 && (
              <div className="lg:col-span-2 flex justify-center py-8">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.gradient} shadow-lg`}></div>
                  <div className={`w-24 h-0.5 bg-gradient-to-r ${step.gradient} opacity-30`}></div>
                  <ArrowRight className={`w-6 h-6 text-${step.color}-600`} />
                  <div className={`w-24 h-0.5 bg-gradient-to-r ${steps[index + 1].gradient} opacity-30`}></div>
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${steps[index + 1].gradient} shadow-lg`}></div>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
};
