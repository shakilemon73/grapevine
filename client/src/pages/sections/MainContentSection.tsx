import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Shield, Sparkles, TrendingUp, Users, Award } from "lucide-react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* MAIN HERO - Large Bento Block */}
          <div className="lg:col-span-7 lg:row-span-2 group">
            <div className="relative h-full p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 w-fit mb-8">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                  <span className="text-sm font-semibold text-blue-700 tracking-wide">AI-POWERED PLATFORM</span>
                </div>

                {/* Headline */}
                <div className="space-y-6 mb-8">
                  <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-gray-900">
                    <span>Boost Travel</span>
                    <br />
                    <span>Compliance by</span>
                    <br />
                    <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      45%
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                    AI-powered personalization that delivers <span className="text-gray-900 font-semibold">in-policy travel options</span> while reducing booking time by 60%.
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="group/btn h-16 px-10 bg-gray-900 hover:bg-gray-800 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-0"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="h-16 px-10 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-900 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Play className="mr-2 w-5 h-5" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* STAT CARD 1 - Medium Bento */}
          <div className="lg:col-span-5 group">
            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-xl font-bold text-gray-900">Companies Trust Us</div>
                  <div className="text-sm text-gray-600">Enterprise clients worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* STAT CARD 2 - Medium Bento */}
          <div className="lg:col-span-3 group">
            <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm font-semibold text-gray-900">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* FEATURE CARD - Medium Bento */}
          <div className="lg:col-span-2 group">
            <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center justify-center text-center">
              <Shield className="w-10 h-10 text-green-600 mb-3" />
              <div className="text-sm font-bold text-gray-900">Enterprise</div>
              <div className="text-xs text-gray-600">Security</div>
            </div>
          </div>

          {/* TRUSTED BY LOGOS - Wide Bento */}
          <div className="lg:col-span-12">
            <div className="relative p-8 rounded-3xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="text-sm font-semibold text-gray-500 tracking-widest uppercase">Trusted By Industry Leaders</div>
                
                <div className="flex items-center gap-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-24 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
