import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, CheckCircle2, ArrowRight, Building2, Hotel, Plane, Car, Sparkles } from "lucide-react";

const features = [
  {
    text: "Pulls live, bookable content from trusted suppliers into the assistant",
  },
  {
    text: "Presents options aligned with traveler preferences and company policy",
  },
  {
    text: "Routes every ancillary booking back through TMC systems for full visibility and control",
  },
];

export const SupportSection = (): JSX.Element => {
  return (
    <section 
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full items-center"
      aria-labelledby="marketplace-heading"
      role="region"
    >
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-3xl blur-2xl"></div>
        
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
          
          <div className="relative space-y-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-bold text-gray-400">MARKETPLACE</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white">Hotels</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white">Flights</span>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-bold text-white">Transfer</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 py-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-black text-sm text-gray-900 mb-2">TMC System Sync</h4>
                  <div className="flex items-center gap-2">
                    <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-green-600">75%</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-center text-gray-500 pt-4">
              Seamless integration with your existing travel management systems
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="inline-block">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Marketplace</span>
        </div>

        <h2 id="marketplace-heading" className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
          Everything a Traveler Needs, Connected Through One Secure Ecosystem
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          From flights to hotels, transfers to dining - all ancillary services flow through one intelligent interface and sync back to your systems.
        </p>

        <ul className="flex flex-col gap-4 mt-4" role="list">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-4 group/item">
              <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover/item:scale-125 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.text}
              </p>
            </li>
          ))}
        </ul>

        <a 
          href="#"
          className="inline-flex items-center gap-2 text-base font-bold text-blue-600 mt-4 group/link"
        >
          Explore the marketplace
          <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};
