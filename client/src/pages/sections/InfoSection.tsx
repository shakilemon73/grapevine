import React from "react";
import { Hotel, Car, ParkingCircle, Coffee, Zap, UtensilsCrossed, Map, Shield, Info } from "lucide-react";

const serviceItems = [
  { icon: Hotel, label: "Hotels", iconColor: "text-blue-600", bgColor: "bg-blue-50" },
  { icon: Car, label: "Transfers", iconColor: "text-green-600", bgColor: "bg-green-50" },
  { icon: ParkingCircle, label: "Parking", iconColor: "text-purple-600", bgColor: "bg-purple-50" },
  { icon: Coffee, label: "Lounges", iconColor: "text-orange-600", bgColor: "bg-orange-50" },
  { icon: Zap, label: "Fast Track", iconColor: "text-yellow-600", bgColor: "bg-yellow-50" },
  { icon: UtensilsCrossed, label: "Dining", iconColor: "text-red-600", bgColor: "bg-red-50" },
  { icon: Map, label: "Activities", iconColor: "text-teal-600", bgColor: "bg-teal-50" },
  { icon: Info, label: "Travel Tips", iconColor: "text-indigo-600", bgColor: "bg-indigo-50" },
  { icon: Shield, label: "Travel Risk", iconColor: "text-pink-600", bgColor: "bg-pink-50" },
];

export const InfoSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-gray-900 mb-3">Complete Marketplace</h3>
          <p className="text-gray-600">Everything your travelers need, in one place</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
                aria-label={`View ${item.label} options`}
                tabIndex={0}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-gray-900 transition-colors text-center">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
