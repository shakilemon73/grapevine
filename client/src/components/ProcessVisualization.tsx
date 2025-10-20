import { ArrowRight, CheckCircle2, AlertCircle, Database, Mail, TrendingUp, Users, Building2, Plane, Sparkles, Zap } from "lucide-react";

interface ProcessVisualizationProps {
  type: 'detect' | 'engage' | 'optimize';
  gradient: string;
}

export const ProcessVisualization = ({ type, gradient }: ProcessVisualizationProps) => {
  if (type === 'detect') {
    return (
      <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative space-y-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-xl blur-lg opacity-50"></div>
                <div className="relative w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <Plane className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-gray-900">Flight Booked</p>
                <p className="text-xs text-gray-600 mt-2 font-semibold">NYC → London</p>
                <p className="text-xs text-gray-500">June 15-17</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} blur-md opacity-30 rounded-full`}></div>
                <ArrowRight className={`relative w-10 h-10 text-orange-500 animate-pulse`} />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-2xl border-2 border-orange-300 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-xl blur-xl opacity-60 animate-pulse`}></div>
                <div className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl`}>
                  <Database className="w-10 h-10 text-white animate-pulse" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-500 animate-bounce" />
              </div>
              <div className="text-center">
                <p className="text-sm font-black text-gray-900">AI Analysis</p>
                <div className="flex items-center gap-1 justify-center mt-2">
                  <Zap className="w-3 h-3 text-orange-600" />
                  <p className="text-xs text-orange-600 font-bold">Scanning itinerary...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className={`w-1 h-16 bg-gradient-to-b ${gradient} rounded-full shadow-lg`}></div>
          </div>

          <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-red-300 shadow-2xl">
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                  Missing Items Detected
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">3 Issues</span>
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✕</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">No hotel booked</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✕</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">No airport transfer</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✕</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">Policy check needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'engage') {
    return (
      <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>
        
        <div className="relative space-y-6">
          <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-green-300 shadow-xl">
            <div className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="font-black text-lg text-gray-900">Traveler Context</h4>
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-xs font-bold text-gray-900">Senior Manager</p>
                    <p className="text-xs text-gray-600">Finance Dept</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    <p className="text-xs font-bold text-gray-900">Preferences</p>
                    <p className="text-xs text-gray-600">4-star, Morning flights</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl shadow-sm col-span-2">
                    <p className="text-xs font-bold text-gray-900">Policy Tier: Executive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className={`h-12 w-1 bg-gradient-to-b ${gradient} rounded-full`}></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-black text-white">Email</p>
                <div className="w-full h-2 bg-white/30 rounded-full mt-3">
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <p className="text-sm font-black text-white">Slack</p>
                <div className="w-full h-2 bg-white/30 rounded-full mt-3">
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <p className="text-sm font-black text-white">WhatsApp</p>
                <div className="w-full h-2 bg-white/30 rounded-full mt-3">
                  <div className="w-full h-full bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <div className={`h-12 w-1 bg-gradient-to-b ${gradient} rounded-full`}></div>
          </div>

          <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-green-300 shadow-2xl">
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex items-start gap-5">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-xl text-gray-900 mb-4">Personalized Recommendations Sent</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Hilton Canary Wharf</p>
                      <p className="text-xs text-gray-600">£149/night • Save 25%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Premium Airport Transfer</p>
                      <p className="text-xs text-gray-600">Included with booking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">Within Company Policy</p>
                      <p className="text-xs text-gray-600">100% compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Optimize
  return (
    <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-black text-white">Booking Pattern</h4>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>London trips: 8x this year</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Prefers Canary Wharf area</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Books 2-3 days in advance</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-black text-white">Team Insights</h4>
            </div>
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>73% choose Hilton</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Avg stay: 2.4 nights</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>94% in-policy rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center py-2">
          <div className={`h-12 w-1 bg-gradient-to-b ${gradient} rounded-full`}></div>
        </div>

        <div className={`relative bg-gradient-to-br ${gradient} rounded-2xl p-8 text-white shadow-2xl overflow-hidden`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-black text-2xl text-white mb-4 flex items-center gap-2">
                AI Learning Applied
                <Sparkles className="w-6 h-6 animate-pulse" />
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Future trips auto-suggest Canary Wharf hotels</p>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Transfer options included by default</p>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">Booking window optimized to 2-3 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-6">
          <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="text-4xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">94%</div>
            <div className="text-xs font-bold text-gray-700">Policy Compliance</div>
          </div>
          <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">60%</div>
            <div className="text-xs font-bold text-gray-700">Time Saved</div>
          </div>
          <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">25%</div>
            <div className="text-xs font-bold text-gray-700">Cost Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
