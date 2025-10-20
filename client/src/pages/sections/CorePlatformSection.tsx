import { useState } from "react";
import { 
  Database, Zap, MessageSquare, ArrowRight, Filter, Cloud, Shield,
  Plane, Hotel, Car, MapPin, CreditCard, Clock, Users, BarChart3, 
  Mail, Phone, Video, Bell, Globe, Building2, Brain, TrendingUp
} from "lucide-react";
import { 
  SiSlack, SiGmail, SiWhatsapp, SiExpedia, SiUber, SiSalesforce,
  SiOracle, SiSap, SiStripe, SiPaypal, SiVisa, SiMastercard,
  SiAmericanexpress, SiMarriott, SiHilton, SiLyft, SiTripadvisor,
  SiAirbnb, SiAccenture, SiAmazon, SiApple, SiGoogle, SiZoom
} from "react-icons/si";

interface WorkflowNodeProps {
  icon: any;
  title: string;
  subtitle?: string;
  color: string;
  iconColor?: string;
  delay?: number;
  brandIcon?: boolean;
}

const WorkflowNode = ({ icon: Icon, title, subtitle, color, iconColor, delay = 0, brandIcon = false }: WorkflowNodeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`workflow-node-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div 
        className={`absolute inset-0 ${color} rounded-2xl blur-xl transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-20'}`}
      ></div>
      <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:border-slate-500/70 transition-all duration-300 hover:scale-105 min-h-[130px] flex flex-col items-center justify-center text-center">
        <div className={`w-12 h-12 rounded-xl ${color.replace('bg-', 'bg-')}/10 border border-${color.split('-')[1]}-500/30 flex items-center justify-center mb-2.5 transition-transform duration-300 ${isHovered ? 'scale-110 rotate-3' : ''}`}>
          {brandIcon ? (
            <Icon className="w-6 h-6" style={iconColor ? { color: iconColor } : {}} />
          ) : (
            <Icon className={`w-6 h-6 ${iconColor || 'text-slate-300'}`} />
          )}
        </div>
        <h4 className="text-xs font-bold text-white mb-1">{title}</h4>
        {subtitle && <p className="text-[10px] text-slate-400">{subtitle}</p>}
      </div>
    </div>
  );
};

interface ConnectionLineProps {
  direction?: 'horizontal' | 'vertical';
  animated?: boolean;
}

const ConnectionLine = ({ direction = 'horizontal', animated = true }: ConnectionLineProps) => {
  if (direction === 'vertical') {
    return (
      <div className="flex justify-center items-center py-3">
        <div className="relative h-12 w-1">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/40 via-blue-500/40 to-cyan-500/40 rounded-full"></div>
          {animated && (
            <div 
              className="absolute w-1 h-6 bg-gradient-to-b from-amber-400 to-blue-400 rounded-full"
              style={{ animation: 'flowVertical 2s ease-in-out infinite' }}
            ></div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex items-center justify-center px-3">
      <div className="relative w-12 h-1">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/40 via-blue-500/40 to-cyan-500/40 rounded-full"></div>
        {animated && (
          <div 
            className="absolute h-1 w-6 bg-gradient-to-r from-amber-400 to-blue-400 rounded-full"
            style={{ animation: 'flowHorizontal 2s ease-in-out infinite' }}
          ></div>
        )}
      </div>
      <ArrowRight className="w-4 h-4 text-amber-400 ml-1.5" />
    </div>
  );
};

export const CorePlatformSection = (): JSX.Element => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20"
      aria-labelledby="platform-heading"
      role="region"
    >
      <style>{`
        @keyframes flowHorizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes flowVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Enterprise-Grade Architecture</span>
          </div>
          <h2 id="platform-heading" className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-4">
            Grapevine Core Platform
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Unified data integration hub connecting 65+ travel systems with AI-powered personalization 
            and omni-channel delivery for seamless, compliant travel experiences.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-6">
          {/* Step 1: Data Sources */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }} data-testid="customer-data-section">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-bold text-white">1</span>
                <span className="text-sm font-semibold text-emerald-300">Data Sources</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              <WorkflowNode icon={Plane} title="Sabre" subtitle="GDS Data" color="bg-emerald-500" delay={50} />
              <WorkflowNode icon={Plane} title="Amadeus" subtitle="GDS Data" color="bg-emerald-500" delay={100} />
              <WorkflowNode icon={SiSalesforce} title="Salesforce" subtitle="CRM" color="bg-emerald-500" iconColor="#00A1E0" delay={150} brandIcon />
              <WorkflowNode icon={SiSap} title="SAP Concur" subtitle="OBT" color="bg-emerald-500" iconColor="#0FAAFF" delay={200} brandIcon />
              <WorkflowNode icon={SiExpedia} title="Expedia" subtitle="Hotels" color="bg-emerald-500" iconColor="#FFCB08" delay={250} brandIcon />
              <WorkflowNode icon={SiMarriott} title="Marriott" subtitle="Hotels" color="bg-emerald-500" iconColor="#A4122D" delay={300} brandIcon />
              <WorkflowNode icon={SiStripe} title="Stripe" subtitle="Payments" color="bg-emerald-500" iconColor="#635BFF" delay={350} brandIcon />
              <WorkflowNode icon={SiUber} title="Uber" subtitle="Transport" color="bg-emerald-500" iconColor="#000000" delay={400} brandIcon />
            </div>
          </div>

          <ConnectionLine direction="vertical" />

          {/* Step 2: Normalization */}
          <div className="animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
                <span className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold text-white">2</span>
                <span className="text-sm font-semibold text-purple-300">Data Normalization & Validation</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <WorkflowNode 
                icon={Filter} 
                title="Customer Data Normalization" 
                subtitle="Real-time validation & enrichment" 
                color="bg-purple-500" 
                delay={500}
              />
              <WorkflowNode 
                icon={Database} 
                title="Content Normalization" 
                subtitle="Unified schema mapping" 
                color="bg-purple-500" 
                delay={550}
              />
            </div>
          </div>

          <ConnectionLine direction="vertical" />

          {/* Step 3: Core Platform */}
          <div className="animate-fade-in-up" style={{ animationDelay: '600ms' }} data-testid="core-platform">
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
                <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white">3</span>
                <span className="text-sm font-semibold text-blue-300">Core Platform Engine</span>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-blue-500/50 rounded-3xl p-8 hover:border-blue-400/70 transition-all duration-300" data-testid="real-time-cdp">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border-2 border-blue-400/50 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Grapevine Core Platform</h3>
                      <p className="text-sm text-blue-200">Real-Time AI Processing Engine</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-blue-500/30 hover:border-blue-500/50 transition-all">
                      <Cloud className="w-6 h-6 text-blue-400 mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">Real-Time CDP</h4>
                      <p className="text-xs text-slate-400">Customer profiles</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-purple-500/30 hover:border-purple-500/50 transition-all">
                      <Brain className="w-6 h-6 text-purple-400 mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">AI Personalization</h4>
                      <p className="text-xs text-slate-400">Smart recommendations</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
                      <Shield className="w-6 h-6 text-cyan-400 mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">Policy Engine</h4>
                      <p className="text-xs text-slate-400">Compliance rules</p>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/30 hover:border-emerald-500/50 transition-all">
                      <BarChart3 className="w-6 h-6 text-emerald-400 mb-2" />
                      <h4 className="text-sm font-bold text-white mb-1">Analytics</h4>
                      <p className="text-xs text-slate-400">Insights & trends</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ConnectionLine direction="vertical" />

          {/* Step 4: Delivery Channels */}
          <div className="animate-fade-in-up" style={{ animationDelay: '750ms' }}>
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                <span className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-xs font-bold text-white">4</span>
                <span className="text-sm font-semibold text-cyan-300">Omni-Channel Delivery</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <WorkflowNode icon={Globe} title="Web Portal" subtitle="Desktop & Mobile" color="bg-cyan-500" delay={800} data-testid="channel-web portal" />
              <WorkflowNode icon={SiGmail} title="Email" subtitle="Gmail, Outlook" color="bg-cyan-500" iconColor="#EA4335" delay={850} brandIcon />
              <WorkflowNode icon={Phone} title="SMS" subtitle="Text Messages" color="bg-cyan-500" delay={900} data-testid="channel-sms" />
              <WorkflowNode icon={SiWhatsapp} title="WhatsApp" subtitle="Messaging" color="bg-cyan-500" iconColor="#25D366" delay={950} brandIcon />
              <WorkflowNode icon={Bell} title="Push Notify" subtitle="Alerts" color="bg-cyan-500" delay={1000} />
              <WorkflowNode icon={SiSlack} title="Slack" subtitle="Team Chat" color="bg-cyan-500" iconColor="#4A154B" delay={1050} brandIcon data-testid="channel-slack" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
          <button 
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
            data-testid="button-explore-platform"
          >
            Explore the Platform
            <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
