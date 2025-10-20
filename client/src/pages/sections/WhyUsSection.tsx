import { Mail, TrendingUp, Award, LineChart, Send, CheckCircle, Clock } from "lucide-react";
import { SiSlack, SiWhatsapp } from "react-icons/si";

const features = [
  {
    icon: Mail,
    text: "Send branded, personalized prompts across email, SMS, WhatsApp, Slack, Teams, and voice",
  },
  {
    icon: TrendingUp,
    text: "Pair traveler context with historical and corporate data to surface relevant hotel and transport options",
  },
  {
    icon: Award,
    text: "Highlight hotels with negotiated rates and properties previously booked by the traveler or their colleagues",
  },
  {
    icon: LineChart,
    text: "Log engagement behavior to optimize future communications",
  },
];

export const WhyUsSection = (): JSX.Element => {
  return (
    <section 
      className="flex flex-col w-full max-w-[552px] items-start gap-8 p-10 rounded-3xl bg-white border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      aria-labelledby="engage-heading"
      role="region"
    >
      <header className="flex items-center gap-4 w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" aria-hidden="true" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h2 id="engage-heading" className="text-3xl font-black text-gray-900">
            Engage
          </h2>
          <p className="text-sm text-gray-600">
            Right-time, right-channel messages that drive in-policy bookings
          </p>
        </div>
      </header>

      <div className="w-full bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-black text-gray-400 uppercase tracking-wider">Personalized Outreach</span>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-green-600" />
            <span className="text-xs font-bold text-green-600">Sent 2m ago</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl p-4 border-2 border-green-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-black text-gray-900">Email to Sarah Chen</p>
                <p className="text-xs text-gray-600">sarah.chen@company.com</p>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-3 border border-green-100">
              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                <span className="font-bold text-gray-900">Hi Sarah,</span> We noticed you have a trip to NYC next week.
              </p>
              <p className="text-xs text-gray-700 leading-relaxed">
                The <span className="font-bold text-green-700">Courtyard Marriott</span> near Times Square has your preferred amenities and is within company policy. Your colleague Michael stayed there last month!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <SiSlack className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-gray-900">Slack</p>
                  <p className="text-xs text-gray-500">Michael K.</p>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <SiWhatsapp className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-gray-900">WhatsApp</p>
                  <p className="text-xs text-gray-500">Anna L.</p>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-green-500 to-green-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
            <Award className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-gray-900">In-Policy</p>
            <p className="text-xs text-gray-600">94% compliance</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
            <LineChart className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-black text-gray-900">Optimized</p>
            <p className="text-xs text-gray-600">Behavior tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
};
