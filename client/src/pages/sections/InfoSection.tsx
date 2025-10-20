import { Hotel, Car, ParkingCircle, Coffee, Zap, UtensilsCrossed, Map, Shield, Info } from "lucide-react";

const serviceItems = [
  { icon: Hotel, label: "Hotels", iconColor: "text-blue-600", gradient: "from-blue-500 to-blue-600" },
  { icon: Car, label: "Transfers", iconColor: "text-green-600", gradient: "from-green-500 to-green-600" },
  { icon: ParkingCircle, label: "Parking", iconColor: "text-purple-600", gradient: "from-purple-500 to-purple-600" },
  { icon: Coffee, label: "Lounges", iconColor: "text-orange-600", gradient: "from-orange-500 to-orange-600" },
  { icon: Zap, label: "Fast Track", iconColor: "text-yellow-600", gradient: "from-yellow-500 to-yellow-600" },
  { icon: UtensilsCrossed, label: "Dining", iconColor: "text-red-600", gradient: "from-red-500 to-red-600" },
  { icon: Map, label: "Activities", iconColor: "text-teal-600", gradient: "from-teal-500 to-teal-600" },
  { icon: Info, label: "Travel Tips", iconColor: "text-indigo-600", gradient: "from-indigo-500 to-indigo-600" },
  { icon: Shield, label: "Travel Risk", iconColor: "text-pink-600", gradient: "from-pink-500 to-pink-600" },
];

export const InfoSection = (): JSX.Element => {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">Complete Travel Marketplace</h3>
        <p className="text-lg text-gray-600">9 essential services, one seamless experience</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 lg:gap-6">
        {serviceItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
              </div>
              <span className="text-sm font-black text-gray-900 text-center leading-tight">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          All services integrated with your company's travel policy and preferred suppliers
        </p>
      </div>
    </section>
  );
};
