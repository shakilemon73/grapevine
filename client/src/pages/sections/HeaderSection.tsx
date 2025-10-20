import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const navigationItems = [
  { label: "TMCs", active: false },
  { label: "Corporates", active: false },
  { label: "Product", active: true },
  { label: "About", active: false },
  { label: "Resources", active: false },
  { label: "Contact", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm"
      role="banner"
      aria-label="Main navigation"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 -m-1"
            aria-label="Grapevine home"
          >
            <div className="flex items-center gap-2 font-bold text-2xl">
              <Sparkles className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Grapevine
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Primary">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.label.toLowerCase()}`}
                className={`font-semibold text-sm transition-all hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-3 py-2 ${
                  item.active ? "text-gray-900" : "text-gray-500"
                }`}
                aria-current={item.active ? "page" : undefined}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button 
            className="h-12 px-8 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
            aria-label="Schedule a demo with our team"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};
