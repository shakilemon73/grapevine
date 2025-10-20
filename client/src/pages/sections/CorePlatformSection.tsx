import { 
  Database, Zap, MessageSquare, MessageCircle, BarChart3, Brain, Shield, Building2, Plane,
  Hotel, Car, MapPin, CreditCard, Cloud, Clock, Users, TrendingUp, DollarSign, FileText,
  Wifi, Phone, Video, Bell, Globe, ArrowRight
} from "lucide-react";
import { 
  SiSlack, 
  SiGmail, 
  SiWhatsapp,
  SiExpedia,
  SiUber,
  SiSalesforce,
  SiOracle,
  SiSap,
  SiStripe,
  SiPaypal,
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiMarriott,
  SiHilton,
  SiLyft,
  SiTripadvisor,
  SiAirbnb,
  SiAccenture,
  SiAmazon,
  SiApple,
  SiGoogle,
  SiZoom
} from "react-icons/si";

interface IntegrationItemProps {
  name: string;
  icon?: any;
  count?: string;
  iconColor?: string;
}

interface IntegrationCardProps {
  title: string;
  items: IntegrationItemProps[];
  color: string;
}

const IntegrationCard = ({ title, items, color }: IntegrationCardProps) => (
  <div className="relative group">
    <div className={`absolute inset-0 ${color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
    <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-slate-400 tracking-wide uppercase">{title}</div>
        <div className="text-[10px] font-bold text-slate-500 bg-slate-900/50 px-2 py-0.5 rounded-full">
          {items.length} sources
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-900/50 rounded-lg px-2 py-1.5 flex items-center justify-center border border-slate-700/30 hover:border-slate-500/50 transition-all duration-200 hover:bg-slate-800/50 group/item"
            data-testid={`integration-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            title={item.name}
          >
            <div className="flex flex-col items-center gap-1">
              {item.icon && <item.icon className={`w-3 h-3 transition-all ${item.iconColor || 'text-slate-300 group-hover/item:text-white'}`} style={item.iconColor ? { color: item.iconColor } : {}} />}
              <span className="text-[9px] font-medium text-slate-300 text-center leading-tight group-hover/item:text-white transition-colors truncate w-full">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

interface NormalizationNodeProps {
  title: string;
  subtitle: string;
}

const NormalizationNode = ({ title, subtitle }: NormalizationNodeProps) => (
  <div className="relative group w-full max-w-md mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
    <div className="relative bg-slate-800/60 backdrop-blur-sm border border-purple-500/30 rounded-2xl px-6 py-4 hover:border-purple-500/50 transition-all duration-300 text-center">
      <div className="text-sm font-bold text-white mb-1">{title}</div>
      <div className="text-xs text-purple-300">{subtitle}</div>
    </div>
  </div>
);

interface ChannelCardProps {
  icon: any;
  name: string;
  color: string;
  detail?: string;
  iconColor?: string;
}

const ChannelCard = ({ icon: Icon, name, color, detail, iconColor }: ChannelCardProps) => (
  <div className="relative group">
    <div className={`absolute inset-0 ${color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
    <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-2.5 flex items-center gap-3 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]" data-testid={`channel-${name.toLowerCase()}`}>
      <Icon className="w-4 h-4 transition-colors" style={iconColor ? { color: iconColor } : {}} />
      <div className="flex-1">
        <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors block">{name}</span>
        {detail && <span className="text-[10px] text-slate-400">{detail}</span>}
      </div>
    </div>
  </div>
);

interface AnalyticsCardProps {
  title: string;
  icon?: any;
}

const AnalyticsCard = ({ title, icon: Icon }: AnalyticsCardProps) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
    <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-2.5 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2" data-testid={`analytics-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {Icon && <Icon className="w-4 h-4 text-blue-300" />}
      <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">{title}</span>
    </div>
  </div>
);

export const CorePlatformSection = (): JSX.Element => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24"
      aria-labelledby="platform-heading"
      role="region"
    >
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 60px rgba(59, 130, 246, 0.6); }
        }
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes dash {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .connection-line {
          stroke-dasharray: 6, 6;
          animation: dash 25s linear infinite;
        }
      `}</style>

      {/* Animated Background */}
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto max-w-[1800px] px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Enterprise-Grade Architecture</span>
          </div>
          <h2 id="platform-heading" className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 mb-4">
            Grapevine Core Platform
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Unified data integration hub connecting 65+ travel systems with AI-powered personalization 
            and omni-channel delivery for seamless, compliant travel experiences.
          </p>
        </div>

        {/* Main Architecture Diagram with SVG Connections */}
        <div className="relative">
          {/* SVG Connection Lines - Hidden on mobile, visible on desktop */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            {/* ========== LEFT TO CENTER: Customer Data → Customer Normalization ========== */}
            {/* GDS Booking Data */}
            <path d="M 24.5% 17% L 30% 17% Q 33% 17%, 35% 20% L 37% 27%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* OBT & TMC Systems */}
            <path d="M 24.5% 26% L 29% 26% Q 32% 26%, 34% 27% L 37% 29%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* Back-Office Systems */}
            <path d="M 24.5% 35% L 30% 35% Q 33% 35%, 35% 32% L 37% 31%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* ========== LEFT TO CENTER: Supplier Data → Content Normalization ========== */}
            {/* Hotel Inventory */}
            <path d="M 24.5% 49% L 29% 49% Q 32% 49%, 34% 55% L 36% 69%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* Ground Transport */}
            <path d="M 24.5% 58% L 28% 58% Q 31% 58%, 33% 63% L 36% 70%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* Activities & Tours */}
            <path d="M 24.5% 66% L 28% 66% Q 31% 66%, 33% 69% L 36% 71%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* Flight & Travel Data */}
            <path d="M 24.5% 74% L 29% 74% Q 32% 74%, 34% 73% L 36% 72%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            {/* Payment Systems */}
            <path d="M 24.5% 82% L 30% 82% Q 33% 82%, 35% 78% L 37% 73%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* ========== CENTER: Normalizations → Core Platform ========== */}
            {/* Customer Normalization to Core Platform */}
            <path d="M 63% 29% L 69% 29% Q 72% 29%, 72% 35% L 72% 46% Q 72% 49%, 69% 49% L 63% 49%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* Content Normalization to Core Platform */}
            <path d="M 63% 71% L 69% 71% Q 72% 71%, 72% 65% L 72% 55% Q 72% 52%, 69% 52% L 63% 52%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* ========== CENTER TO RIGHT: Core Platform → Delivery Channels ========== */}
            {/* To Omni-Channel Experience (top) */}
            <path d="M 63% 46% L 69% 46% Q 72% 46%, 72% 40% L 72% 33% Q 72% 30%, 75% 30% L 77% 30%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To Email */}
            <path d="M 63% 50% L 70% 50% Q 73% 50%, 73% 46% L 73% 40% Q 73% 37%, 76% 37% L 77% 37%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To SMS */}
            <path d="M 63% 51% L 70% 51% Q 73% 51%, 73% 47% L 73% 42% Q 73% 39%, 76% 39% L 77% 39%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To WhatsApp */}
            <path d="M 63% 52% L 70% 52% Q 73% 52%, 73% 48% L 73% 44% Q 73% 41%, 76% 41% L 77% 41%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To Push Notifications */}
            <path d="M 63% 53% L 70% 53% Q 73% 53%, 73% 49% L 73% 46% Q 73% 43%, 76% 43% L 77% 43%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To Video Chat */}
            <path d="M 63% 54% L 70% 54% Q 73% 54%, 73% 50% L 73% 48% Q 73% 45%, 76% 45% L 77% 45%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
            
            {/* To Reporting & Analytics (bottom) */}
            <path d="M 63% 55% L 69% 55% Q 72% 55%, 72% 60% L 72% 68% Q 72% 71%, 75% 71% L 77% 71%" 
              stroke="url(#lineGradient)" strokeWidth="2.5" fill="none" className="connection-line" />
          </svg>

          <div className="grid lg:grid-cols-12 gap-6 items-start relative" style={{ zIndex: 1 }}>
          
          {/* LEFT COLUMN - Data Sources */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}></div>
              <h3 className="text-base font-bold text-slate-200 uppercase tracking-wide">Data Sources</h3>
              <ArrowRight className="w-4 h-4 text-amber-400 ml-auto hidden lg:block" />
            </div>

            {/* Customer Data */}
            <div className="space-y-3" data-testid="customer-data-section">
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-2 mb-3">
                <Database className="w-4 h-4" />
                <span>CUSTOMER DATA</span>
              </div>
              
              <IntegrationCard
                title="GDS Booking Data"
                color="bg-emerald-500"
                items={[
                  { name: "Sabre", icon: Plane, iconColor: "#E31E24" },
                  { name: "Amadeus", icon: Plane, iconColor: "#1B69BC" },
                  { name: "Travelport", icon: Plane, iconColor: "#00A3E0" },
                  { name: "Apollo", icon: Plane, iconColor: "#0066CC" },
                  { name: "Worldspan", icon: Plane, iconColor: "#00529B" },
                  { name: "Galileo", icon: Plane, iconColor: "#003087" }
                ]}
              />

              <IntegrationCard
                title="OBT & TMC Systems"
                color="bg-emerald-500"
                items={[
                  { name: "Concur", icon: SiSap, iconColor: "#0FAAFF" },
                  { name: "Cytric", icon: Building2, iconColor: "#0066CC" },
                  { name: "Deem", icon: Building2, iconColor: "#00A3E0" },
                  { name: "Atriis", icon: Building2, iconColor: "#0099CC" },
                  { name: "TripActions", icon: Plane, iconColor: "#5B4FFF" },
                  { name: "Navan", icon: Plane, iconColor: "#6C5CE7" },
                  { name: "SAP", icon: SiSap, iconColor: "#0FAAFF" },
                  { name: "Egencia", icon: SiExpedia, iconColor: "#FFCB08" },
                  { name: "TravelPerk", icon: Plane, iconColor: "#3A86FF" }
                ]}
              />

              <IntegrationCard
                title="Back-Office Systems"
                color="bg-emerald-500"
                items={[
                  { name: "Salesforce", icon: SiSalesforce, iconColor: "#00A1E0" },
                  { name: "Microsoft Dynamics", icon: Database, iconColor: "#0078D4" },
                  { name: "Oracle", icon: SiOracle, iconColor: "#F80000" },
                  { name: "Sabre Red", icon: Database, iconColor: "#E31E24" },
                  { name: "Tramada", icon: Database, iconColor: "#00A3E0" },
                  { name: "ClientBase", icon: Database, iconColor: "#0066CC" }
                ]}
              />
            </div>

            {/* Supplier Data */}
            <div className="space-y-3 pt-6" data-testid="supplier-data-section">
              <div className="text-xs font-bold text-amber-400 flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4" />
                <span>SUPPLIER DATA</span>
              </div>
              
              <IntegrationCard
                title="Hotel Inventory"
                color="bg-amber-500"
                items={[
                  { name: "Expedia", icon: SiExpedia, iconColor: "#FFCB08" },
                  { name: "Booking.com", icon: Hotel, iconColor: "#003580" },
                  { name: "Hotels.com", icon: Hotel, iconColor: "#D32F2F" },
                  { name: "Marriott", icon: SiMarriott, iconColor: "#A4122D" },
                  { name: "Hilton", icon: SiHilton, iconColor: "#0057A0" },
                  { name: "IHG", icon: Hotel, iconColor: "#5D3277" },
                  { name: "Airbnb", icon: SiAirbnb, iconColor: "#FF5A5F" },
                  { name: "Sabre", icon: Plane, iconColor: "#E31E24" },
                  { name: "Amadeus", icon: Plane, iconColor: "#1B69BC" }
                ]}
              />

              <IntegrationCard
                title="Ground Transport"
                color="bg-amber-500"
                items={[
                  { name: "Uber", icon: SiUber, iconColor: "#000000" },
                  { name: "Lyft", icon: SiLyft, iconColor: "#FF00BF" },
                  { name: "Hertz", icon: Car, iconColor: "#FFCC00" },
                  { name: "Enterprise", icon: Car, iconColor: "#00A651" },
                  { name: "Avis", icon: Car, iconColor: "#D30000" },
                  { name: "Budget", icon: Car, iconColor: "#FF6600" }
                ]}
              />

              <IntegrationCard
                title="Activities & Tours"
                color="bg-amber-500"
                items={[
                  { name: "Viator", icon: MapPin, iconColor: "#00A680" },
                  { name: "GetYourGuide", icon: MapPin, iconColor: "#FF5000" },
                  { name: "Klook", icon: MapPin, iconColor: "#FF5722" },
                  { name: "Lonely Planet", icon: MapPin, iconColor: "#1D68A7" },
                  { name: "TripAdvisor", icon: SiTripadvisor, iconColor: "#00AF87" },
                  { name: "Getyourguide", icon: MapPin, iconColor: "#4A90E2" },
                  { name: "Musement", icon: MapPin, iconColor: "#FF6B6B" },
                  { name: "Headout", icon: MapPin, iconColor: "#FF4444" }
                ]}
              />

              <IntegrationCard
                title="Flight & Travel Data"
                color="bg-amber-500"
                items={[
                  { name: "FlightAware", icon: Plane, iconColor: "#004E8C" },
                  { name: "FlightStats", icon: Plane, iconColor: "#00A3E0" },
                  { name: "OAG", icon: Plane, iconColor: "#E30613" },
                  { name: "Cirium", icon: Clock, iconColor: "#00A3E0" },
                  { name: "IATA", icon: Globe, iconColor: "#003580" },
                  { name: "Weather API", icon: Cloud, iconColor: "#4A90E2" }
                ]}
              />

              <IntegrationCard
                title="Payment Systems"
                color="bg-amber-500"
                items={[
                  { name: "Stripe", icon: SiStripe, iconColor: "#635BFF" },
                  { name: "PayPal", icon: SiPaypal, iconColor: "#00457C" },
                  { name: "AirPlus", icon: CreditCard, iconColor: "#0066CC" },
                  { name: "Visa", icon: SiVisa, iconColor: "#1434CB" },
                  { name: "Mastercard", icon: SiMastercard, iconColor: "#EB001B" },
                  { name: "Amex", icon: SiAmericanexpress, iconColor: "#006FCF" }
                ]}
              />

              <IntegrationCard
                title="Travel Tech Platforms"
                color="bg-amber-500"
                items={[
                  { name: "Google Travel", icon: SiGoogle, iconColor: "#4285F4" },
                  { name: "Apple Maps", icon: SiApple, iconColor: "#000000" },
                  { name: "Bing Travel", icon: Globe, iconColor: "#008373" },
                  { name: "Amazon Travel", icon: SiAmazon, iconColor: "#FF9900" },
                  { name: "Accenture", icon: SiAccenture, iconColor: "#A100FF" },
                  { name: "Zoom Meetings", icon: SiZoom, iconColor: "#2D8CFF" }
                ]}
              />
            </div>
          </div>

          {/* MIDDLE COLUMN - Normalization & Core Platform */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Normalization Layer */}
            <div className="flex flex-col items-center gap-4">
              <NormalizationNode 
                title="Customer Data Normalization & Validation" 
                subtitle="Real-time data quality, deduplication & enrichment" 
              />
              
              {/* Flowing Connection Line */}
              <div className="relative h-12 w-1">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-blue-500/40 to-cyan-500/40"></div>
                <div 
                  className="absolute w-1 h-8 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
                  style={{ animation: 'flow 2s ease-in-out infinite' }}
                ></div>
              </div>
            </div>

            {/* Core Platform - The Heart */}
            <div className="relative" data-testid="core-platform">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" style={{ animation: 'shimmer 3s linear infinite', backgroundSize: '200% 100%' }}></div>
              
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-blue-500/50 rounded-3xl p-8 shadow-2xl" style={{ animation: 'glow 3s ease-in-out infinite' }}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-400/50 mb-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
                    <Zap className="w-10 h-10 text-blue-400" />
                  </div>
                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 mb-2" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }}>
                    Core Platform
                  </h3>
                  <div className="text-xs text-blue-200 mb-3">Real-Time Data Processing Engine</div>
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-[1.02]" data-testid="real-time-cdp">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-6 h-6 text-blue-200" />
                        <div className="text-xs font-bold text-blue-100 uppercase tracking-wide">Real-Time</div>
                      </div>
                      <div className="text-xl font-black text-white mb-2">Zero-Trust CDP</div>
                      <div className="text-xs text-blue-200">Secure customer data platform with enterprise-grade encryption</div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute inset-0 bg-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02]" data-testid="personalisation-layer">
                      <div className="flex items-center gap-2 mb-3">
                        <Brain className="w-6 h-6 text-cyan-200" />
                        <div className="text-xs font-bold text-cyan-100 uppercase tracking-wide">AI-Powered</div>
                      </div>
                      <div className="text-xl font-black text-white mb-2">Personalization</div>
                      <div className="text-xs text-cyan-200">ML-driven recommendations and policy compliance</div>
                    </div>
                  </div>
                </div>

                {/* Platform Features */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-slate-900/40 rounded-xl px-3 py-3 border border-slate-700/30">
                    <Users className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                    <div className="text-[10px] font-semibold text-slate-300">Traveler Profiles</div>
                  </div>
                  <div className="bg-slate-900/40 rounded-xl px-3 py-3 border border-slate-700/30">
                    <Shield className="w-5 h-5 text-emerald-300 mx-auto mb-1" />
                    <div className="text-[10px] font-semibold text-slate-300">Policy Engine</div>
                  </div>
                  <div className="bg-slate-900/40 rounded-xl px-3 py-3 border border-slate-700/30">
                    <TrendingUp className="w-5 h-5 text-purple-300 mx-auto mb-1" />
                    <div className="text-[10px] font-semibold text-slate-300">Analytics Core</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Normalization */}
            <div className="flex flex-col items-center gap-4">
              {/* Flowing Connection Line */}
              <div className="relative h-12 w-1">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-pink-500/40"></div>
                <div 
                  className="absolute w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full"
                  style={{ animation: 'flow 2s ease-in-out infinite', animationDelay: '1s' }}
                ></div>
              </div>
              
              <NormalizationNode 
                title="Content Normalization & Validation" 
                subtitle="Standardization, translation & quality assurance" 
              />
            </div>
          </div>

          {/* RIGHT COLUMN - Outputs */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-2 mb-4">
              <ArrowRight className="w-4 h-4 text-amber-400 mr-auto hidden lg:block" />
              <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}></div>
              <h3 className="text-base font-bold text-slate-200 uppercase tracking-wide">Delivery</h3>
            </div>

            {/* Omni-Channel Experience */}
            <div className="space-y-3" data-testid="omni-channel-section">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 hover:border-slate-600/50 transition-all duration-300">
                  <div className="text-xs font-bold text-blue-300 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>OMNI-CHANNEL EXPERIENCE</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-slate-900/50 rounded-xl p-2.5 border border-slate-700/30">
                      <div className="text-[10px] font-semibold text-slate-400 mb-2">Conversational AI</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-2 py-1.5 border border-slate-700/30" data-testid="channel-slack">
                          <SiSlack className="w-3 h-3" style={{ color: "#4A154B" }} />
                          <span className="text-[10px] font-medium text-slate-300">Slack</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg px-2 py-1.5 border border-slate-700/30" data-testid="channel-teams">
                          <MessageSquare className="w-3 h-3" style={{ color: "#6264A7" }} />
                          <span className="text-[10px] font-medium text-slate-300">Teams</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-2.5 border border-slate-700/30">
                      <div className="text-[10px] font-semibold text-slate-400 mb-2">Voice AI</div>
                      <div className="flex items-center justify-center gap-2 bg-slate-800/50 rounded-lg px-2 py-1.5 border border-slate-700/30">
                        <Phone className="w-3 h-3 text-slate-300" />
                        <span className="text-[10px] font-medium text-slate-300">Voice Assistant</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Communication Channels */}
            <div className="space-y-2">
              <ChannelCard icon={SiGmail} name="Email" detail="Transactional & Marketing" color="bg-red-500" iconColor="#EA4335" />
              <ChannelCard icon={MessageCircle} name="SMS" detail="Real-time Notifications" color="bg-blue-500" iconColor="#00A8E8" />
              <ChannelCard icon={SiWhatsapp} name="WhatsApp" detail="Conversational Support" color="bg-green-500" iconColor="#25D366" />
              <ChannelCard icon={Bell} name="Push Notifications" detail="Mobile Alerts" color="bg-orange-500" iconColor="#FF9500" />
              <ChannelCard icon={Video} name="Video Chat" detail="Live Support" color="bg-purple-500" iconColor="#7B68EE" />
            </div>

            {/* Reporting & Analytics */}
            <div className="space-y-3 pt-6" data-testid="reporting-section">
              <div className="text-xs font-bold text-cyan-400 flex items-center gap-2 mb-3">
                <BarChart3 className="w-4 h-4" />
                <span>INSIGHTS & REPORTING</span>
              </div>
              
              <div className="space-y-2">
                <AnalyticsCard title="Performance Dashboards" icon={TrendingUp} />
                <AnalyticsCard title="Travel Analytics" icon={Plane} />
                <AnalyticsCard title="Cost Intelligence" icon={DollarSign} />
                <AnalyticsCard title="Behavioral Insights" icon={Users} />
                <AnalyticsCard title="Predictive Models" icon={Brain} />
                <AnalyticsCard title="Compliance Reports" icon={FileText} />
                <AnalyticsCard title="Risk Assessment" icon={Shield} />
                <AnalyticsCard title="Carbon Tracking" icon={Globe} />
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-24 pt-12 border-t border-slate-800">
          <div className="text-center" data-testid="stat-integrations">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">65+</div>
            <div className="text-sm text-slate-400 font-medium">Integrations</div>
            <div className="text-xs text-slate-600 mt-1">Live Data Sources</div>
          </div>
          <div className="text-center" data-testid="stat-channels">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">8</div>
            <div className="text-sm text-slate-400 font-medium">Channels</div>
            <div className="text-xs text-slate-600 mt-1">Delivery Methods</div>
          </div>
          <div className="text-center" data-testid="stat-uptime">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400 mb-2">99.99%</div>
            <div className="text-sm text-slate-400 font-medium">Uptime SLA</div>
            <div className="text-xs text-slate-600 mt-1">High Availability</div>
          </div>
          <div className="text-center" data-testid="stat-response">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-2">&lt;50ms</div>
            <div className="text-sm text-slate-400 font-medium">Response Time</div>
            <div className="text-xs text-slate-600 mt-1">P95 Latency</div>
          </div>
          <div className="text-center" data-testid="stat-processing">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-400 mb-2">1M+</div>
            <div className="text-sm text-slate-400 font-medium">Requests/Day</div>
            <div className="text-xs text-slate-600 mt-1">Data Processing</div>
          </div>
        </div>
      </div>
    </section>
  );
};
