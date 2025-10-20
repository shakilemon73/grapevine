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

        <WorkflowDiagram />

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
            <div className="flex flex-col items-center gap-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center">
                How Grapevine Works
              </h2>

              <IntegrationSection />

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

      <footer className="bg-white border-t border-gray-200" role="contentinfo" aria-label="Footer">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
            <div className="flex flex-col gap-4">
              <a 
                href="#" 
                className="flex items-center gap-2 font-bold text-2xl group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded-lg p-1 -m-1"
                aria-label="Grapevine home"
              >
                <Sparkles className="w-7 h-7 text-blue-600 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Grapevine
                </span>
              </a>
              <p className="text-sm text-gray-600 leading-relaxed">
                The AI-Native Personal Assistant for Business Travel
              </p>
            </div>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-solutions">
              <h3 id="footer-solutions" className="text-sm font-bold text-gray-900">
                Solutions
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerSolutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
                      aria-label={`View ${link.label} solutions`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-company">
              <h3 id="footer-company" className="text-sm font-bold text-gray-900">
                Company
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerCompanyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 rounded"
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4" aria-labelledby="footer-legal">
              <h3 id="footer-legal" className="text-sm font-bold text-gray-900">
                Legal
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {footerLegalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-within:ring-gray-900 rounded"
                      aria-label={`Read our ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-gray-200 gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Grapevine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
