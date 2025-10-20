import React from "react";
import { Button } from "@/components/ui/button";
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

      <main className="flex-1 flex flex-col w-full">
        <MainContentSection />

        <section className="px-24 py-20 bg-[#f1f4f84c] flex flex-col items-center w-full">
          <div className="flex flex-col max-w-screen-xl items-start gap-8 w-full">
            <h2 className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-4xl tracking-[0] leading-10 text-center">
              Grapevine Core Platform – data in, intelligence out.
            </h2>

            <p className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-lg tracking-[0] leading-7 text-center">
              Grapevine brings together trip data, supplier content, and
              conversational AI to deliver truly personalised, in-policy
              traveller experiences - all within a secure
              <br />
              walled garden fully integrated with your TMC systems.
            </p>

            <div className="w-full max-w-[1248px] h-[717.03px] rounded-[10px] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] bg-[url(/figmaAssets/grapevine-core-platform-architecture.png)] bg-cover bg-[50%_50%]" />

            <MarketplaceSection />
          </div>
        </section>

        <section className="flex flex-col items-center px-24 py-20 w-full bg-white">
          <div className="flex flex-col max-w-screen-xl items-center gap-16 w-full">
            <h2 className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-4xl tracking-[0] leading-10 text-center">
              How Grapevine Works
            </h2>

            <IntegrationSection />

            <div className="flex w-full max-w-[1152px] items-start justify-center gap-12">
              <WhyUsSection />
              <OverlaySection />
            </div>

            <div className="flex w-full max-w-[1152px] items-start justify-center gap-12">
              <OverlayWrapperSection />
              <TestimonialsSection />
            </div>

            <div className="flex w-full max-w-[1152px] items-start justify-center gap-12">
              <ComponentNodeSection />
              <CallToActionSection />
            </div>
          </div>
        </section>

        <section className="pt-[74px] pb-20 px-24 bg-[#f1f4f84c] flex flex-col items-center w-full">
          <div className="flex flex-col max-w-screen-xl items-center gap-4 w-full">
            <h2 className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-4xl tracking-[0] leading-10 text-center">
              Seamless integration. Zero disruption.
            </h2>

            <p className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-xl tracking-[0] leading-7 text-center">
              Grapevine is designed to fit within your existing TMC environment
              - no rebuilds, no new tools, no change to how travellers book.
            </p>

            <div className="flex flex-col items-start pt-8 pb-0 px-0 w-full">
              <p className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-lg tracking-[0] leading-7 text-center">
                In just a few steps, we:
              </p>
            </div>

            <FeaturesSection />

            <div className="flex flex-col w-full max-w-[896px] items-center pt-8 pb-0 px-0">
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-lg text-center tracking-[0] leading-7">
                The entire process takes less than four hours of your team&#39;s
                time - simple, secure, and proven.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center px-24 py-20 w-full bg-white">
          <div className="flex flex-col max-w-screen-xl items-center gap-16 w-full">
            <h2 className="w-full [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-4xl tracking-[0] leading-10 text-center">
              The Grapevine Marketplace
            </h2>

            <div className="flex flex-col max-w-6xl w-full max-w-[1152px] items-start gap-12">
              <SupportSection />
              <InfoSection />
            </div>
          </div>
        </section>

        <SectionWrapper />
        <CorePlatformSection />
      </main>

      <footer className="flex flex-col items-center pt-20 pb-0 px-20 w-full bg-[#f1f4f84c] border-t border-solid border-[#0000001a]">
        <div className="w-full max-w-screen-xl">
          <div className="flex items-start justify-between gap-8 pb-12">
            <div className="flex flex-col items-start gap-4 w-80">
              <div className="w-[124.89px] h-8 bg-[url(/figmaAssets/grapevine.png)] bg-cover bg-[50%_50%]" />
              <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5">
                The AI-Native Personal Assistant for Business
                <br />
                Travel
              </p>
            </div>

            <nav className="flex flex-col items-start gap-4">
              <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-base tracking-[0] leading-6">
                Solutions
              </h3>
              <ul className="flex flex-col items-start gap-2">
                {footerSolutionsLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5 hover:text-neutral-950 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col items-start gap-4">
              <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-base tracking-[0] leading-6">
                Company
              </h3>
              <ul className="flex flex-col items-start gap-2">
                {footerCompanyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5 hover:text-neutral-950 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col items-start gap-4">
              <h3 className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-950 text-base tracking-[0] leading-6">
                Legal
              </h3>
              <ul className="flex flex-col items-start gap-[2.5px]">
                {footerLegalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5 hover:text-neutral-950 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center justify-between pt-[33px] pb-8 border-t border-solid border-[#0000001a]">
            <p className="[font-family:'Segoe_UI-Regular',Helvetica] font-normal text-slate-500 text-sm tracking-[0] leading-5">
              © 2025 grapevine. All rights reserved.
            </p>
            <img
              className="h-6"
              alt="Social media links"
              src="/figmaAssets/container-1.svg"
            />
          </div>
        </div>
      </footer>

      <div className="fixed bottom-8 left-6 z-50">
        <Button
          variant="outline"
          className="h-10 gap-2 px-[17px] py-px bg-white rounded-lg border border-solid border-[#0000001a] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]"
        >
          <img
            className="w-4 h-4"
            alt="Playground icon"
            src="/figmaAssets/svg-2.svg"
          />
          <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-neutral-950 text-sm tracking-[0] leading-5">
            Playground
          </span>
        </Button>
      </div>

      <div className="fixed bottom-8 right-[126px] z-50">
        <Button className="h-10 gap-2 px-4 py-0 bg-indigo-500 rounded-lg shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] hover:bg-indigo-600">
          <img
            className="w-4 h-4"
            alt="Default icon"
            src="/figmaAssets/svg-4.svg"
          />
          <span className="[font-family:'Segoe_UI-Semibold',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
            Default
          </span>
        </Button>
      </div>
    </div>
  );
};
