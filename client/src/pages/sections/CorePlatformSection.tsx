import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export const CorePlatformSection = (): JSX.Element => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] " aria-hidden="true"></div>
      
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 w-fit">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">Get Started Today</span>
            </div>

            <h2 id="cta-heading" className="text-5xl lg:text-6xl font-black text-white leading-tight">
              Ready to Transform Your Business Travel?
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Book a demo today and discover how Grapevine delivers personalized, 
              in-policy travel experiences that your travelers and TMC will love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Call to action buttons">
              <Button 
                className="h-16 px-10 bg-white text-gray-900 hover:bg-gray-100 rounded-2xl font-bold shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-95 group"
                aria-label="Schedule a product demonstration"
              >
                <Calendar className="mr-2 w-5 h-5" aria-hidden="true" />
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                className="h-16 px-10 rounded-2xl font-bold border-2 border-white text-white hover:bg-white/10 hover:scale-105 active:scale-95"
                aria-label="View customer success stories"
              >
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4" role="complementary" aria-label="Social proof">
              <div className="flex -space-x-2" aria-label="Customer avatars">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-2 border-white backdrop-blur-sm" aria-label={`Company ${i}`}></div>
                ))}
              </div>
              <p className="text-white text-sm">
                <span className="font-bold">500+ companies</span> already using Grapevine
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-40 h-40 text-white/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
