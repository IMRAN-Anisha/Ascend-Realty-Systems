import { ArrowRight, CheckCircle, Package, TrendingUp, Bell, Plug, LayoutDashboard } from 'lucide-react';

export function ProductsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1.5 bg-blue-100 rounded-full text-sm text-blue-700 mb-4">
            <Package className="inline w-4 h-4 mr-1" />
            Product Overview
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            What It Takes Off Your Plate
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inventory, leads, and follow-ups, handled in the background. Connected to the tools you already use.
          </p>
        </div>

        {/* Products Grid - Restructured Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Row 1: Large card spanning 2 columns + 1 small card */}
          <div className="md:col-span-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div className="text-xs text-blue-600 mb-4">"Process my supplier invoices"</div>
            <h3 className="text-3xl mb-4 tracking-tight">
              Leads, Captured
              <br />
              Before They Go Cold
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              The system captures your leads, responds instantly, and routes clean entries to your CRM or database.
            </p>
            <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow">
            <div className="text-xs text-orange-200 mb-4">"What did we waste?"</div>
            <h3 className="text-3xl mb-4 tracking-tight">
              More Deals,
              <br />
              Higher Margins
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
              <div className="text-4xl mb-2">$840</div>
              <div className="text-xs text-orange-200 mb-4">In leads avoided by 2 agent actions</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Instant response (86%)</span>
                  <span>$350</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Follow-up sequence</span>
                  <span>$250</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Three equal cards */}
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow">
            <div className="text-xs text-blue-200 mb-4">"What's running low?"</div>
            <h3 className="text-3xl mb-4 tracking-tight">
              Never Miss
              <br />
              a Hot Lead
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 space-y-3 mb-6">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-400/30 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="text-white">Email Enquiry</div>
                    <div className="text-xs text-blue-200">Received</div>
                  </div>
                </div>
                <span className="text-xs bg-green-400/20 px-2 py-1 rounded">Captured 2:30 AM</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-400/30 rounded-lg flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <div className="text-white">Web Form</div>
                    <div className="text-xs text-blue-200">Submitted</div>
                  </div>
                </div>
                <span className="text-xs bg-green-400/20 px-2 py-1 rounded">In Progress</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition-shadow">
            <div className="text-xs text-gray-500 mb-4">MORNING BRIEF</div>
            <h3 className="text-3xl mb-4 tracking-tight text-gray-900">
              Your Daily
              <br />
              Briefing
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs">📊</span>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">8 leads processed</div>
                  <div className="text-xs text-gray-500">Logged to CRM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs">📈</span>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">3 items below par</div>
                  <div className="text-xs text-gray-500">Requires attention</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition-shadow">
            <h3 className="text-3xl mb-6 tracking-tight text-gray-900">
              Plugs Into
              <br />
              Your Tools
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📦</span>
                  </div>
                  <div className="text-sm text-gray-900">REA & Domain</div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm">✉️</span>
                  </div>
                  <div className="text-sm text-gray-900">Gmail & Outlook</div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">Connected</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </div>
                  <div className="text-sm text-gray-900">Your CRM</div>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Connect</span>
              </div>
            </div>
          </div>

          {/* Row 3: Full width card */}
          <div className="md:col-span-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow relative overflow-hidden min-h-[300px]">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-3xl tracking-tight">
                All Managed In One
                <br />
                Simple Dashboard.
              </h3>
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg transition-colors">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            {/* Mock Dashboard Preview */}
            <div className="absolute bottom-0 right-0 w-full h-32 bg-white/10 rounded-t-xl p-4">
              <div className="space-y-2">
                <div className="h-2 bg-white/20 rounded w-3/4"></div>
                <div className="h-2 bg-white/20 rounded w-1/2"></div>
                <div className="h-2 bg-white/20 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}