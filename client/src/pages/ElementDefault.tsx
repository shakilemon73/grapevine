import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { CorePlatformSection } from "./sections/CorePlatformSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeaderSection } from "./sections/HeaderSection";
import { InfoSection } from "./sections/InfoSection";
import { IntegrationSection } from "./sections/IntegrationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MarketplaceSection } from "./sections/MarketplaceSection";
import { OverlaySection } from "./sections/OverlaySection";
import { OverlayWrapperSection } from "./sections/OverlayWrapperSection";
import { SectionWrapper } from "./sections/SectionWrapper";
import { SupportSection } from "./sections/SupportSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyUsSection } from "./sections/WhyUsSection";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";

const footerSolutionsLinks = [
  { label: "Product", href: "#" },
  { label: "Corporates", href: "#" },
  { label: "TMCs", href: "#" },
];

const footerCompanyLinks = [
  { label: "About", href: "#" },
  { label: "Resources", href: "#" },
  { label: "Contact", href: "#" },
];

const footerLegalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <HeaderSection />

      <main className="flex-1 flex flex-col w-full" role="main" aria-label="Main content">
        <MainContentSection />

        <CorePlatformSection />

        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12">
              <MarketplaceSection />
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section className="bg-white py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-20">
              <div className="text-center space-y-4 max-w-3xl">
                <h2 className="text-5xl lg:text-6xl font-black text-gray-900">
                  How Grapevine Works
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Three powerful steps to transform your travel management
                </p>
              </div>

              <IntegrationSection />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-16">
              <div className="grid lg:grid-cols-2 gap-8 w-full">
                <WhyUsSection />
                <TestimonialsSection />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 lg:py-28">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12">
              <div className="text-center space-y-4 max-w-3xl">
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                  The Grapevine Marketplace
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Everything your travelers need, seamlessly integrated
                </p>
              </div>

              <div className="flex flex-col w-full gap-16">
                <SupportSection />
                <InfoSection />
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper />
      </main>

      <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden" role="contentinfo" aria-label="Footer">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 to-teal-600/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <a 
                href="#" 
                className="flex items-center gap-2 font-bold text-3xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg p-1 -m-1"
                aria-label="Grapevine home"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-full"></div>
                  <Sparkles className="relative w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" aria-hidden="true" />
                </div>
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Grapevine
                </span>
              </a>
              <p className="text-base text-gray-400 leading-relaxed max-w-md">
                The AI-Native Personal Assistant for Business Travel. Transform your corporate travel with intelligent automation and personalized experiences.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 hover:border-white/20">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 hover:border-white/20">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10 hover:border-white/20">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-solutions">
              <h3 id="footer-solutions" className="text-sm font-black text-white uppercase tracking-wider">
                Solutions
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerSolutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                      aria-label={`View ${link.label} solutions`}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-company">
              <h3 id="footer-company" className="text-sm font-black text-white uppercase tracking-wider">
                Company
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerCompanyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                      aria-label={`Go to ${link.label}`}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-legal">
              <h3 id="footer-legal" className="text-sm font-black text-white uppercase tracking-wider">
                Legal
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerLegalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                      aria-label={`Read our ${link.label}`}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/10 gap-6">
            <p className="text-sm text-gray-400">
              © 2025 Grapevine. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Status</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Security</a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">API</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
