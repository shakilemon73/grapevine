import React from "react";
import { Brain, Sparkles, Shield, Zap, Globe2, Layers, TrendingUp } from "lucide-react";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-bold text-purple-700 tracking-wide">PLATFORM FEATURES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Revolutionize Travel
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            AI-driven intelligence meets enterprise-grade security to deliver the most advanced travel management platform on the market.
          </p>
        </div>

        {/* BENTO GRID - Unique Feature Layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* LARGE FEATURE 1 - AI Personalization */}
          <div className="lg:col-span-2 lg:row-span-2 group">
            <div className="relative h-full min-h-[500px] p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-20 h-20 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Brain className="w-10 h-10 text-purple-600" />
                </div>
                
                <h3 className="text-4xl font-black text-gray-900 mb-4 leading-tight">
                  AI-Powered
                  <br />
                  Personalization
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed flex-grow">
                  Machine learning algorithms analyze travel patterns, preferences, and company policies to deliver perfectly matched travel options in seconds.
                </p>
                
                <div className="space-y-3">
                  {['Smart recommendations', 'Policy compliance', 'Real-time optimization'].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM FEATURE - Security */}
          <div className="lg:col-span-1 group">
            <div className="relative h-full min-h-[240px] p-8 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-2xl bg-green-100 border border-green-200 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-sm text-gray-600">
                    Bank-level encryption & SOC 2 compliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM FEATURE - Speed */}
          <div className="lg:col-span-1 group">
            <div className="relative h-full min-h-[240px] p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 border border-cyan-200 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-cyan-600" />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-sm text-gray-600">
                    Search millions of options in under 2 seconds
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LARGE FEATURE 2 - Global Coverage */}
          <div className="lg:col-span-2 lg:row-span-1 group">
            <div className="relative h-full min-h-[240px] p-10 rounded-3xl bg-gradient-to-r from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 h-full">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center">
                      <Globe2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">Global Coverage</h3>
                      <p className="text-gray-600">180+ countries, 800+ airlines</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">2M+</div>
                    <div className="text-xs text-gray-600 font-semibold">Hotels</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">50K+</div>
                    <div className="text-xs text-gray-600 font-semibold">Routes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM FEATURE - Integration */}
          <div className="lg:col-span-1 group">
            <div className="relative h-full min-h-[240px] p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-2xl bg-orange-100 border border-orange-200 flex items-center justify-center">
                  <Layers className="w-8 h-8 text-orange-600" />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Easy Integration
                  </h3>
                  <p className="text-sm text-gray-600">
                    Connect with your existing tools
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MEDIUM FEATURE - Analytics */}
          <div className="lg:col-span-1 group">
            <div className="relative h-full min-h-[240px] p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-white border border-pink-100 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-16 h-16 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-pink-600" />
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Smart Analytics
                  </h3>
                  <p className="text-sm text-gray-600">
                    Data-driven insights & reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
