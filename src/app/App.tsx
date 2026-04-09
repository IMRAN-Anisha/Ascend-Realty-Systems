import { UpdatedLeadLossCalculator } from './components/UpdatedLeadLossCalculator';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { SystemsSolution } from './components/SystemsSolution';
import { FAQSection } from './components/FAQSection';
import { ToolsIntegration } from './components/ToolsIntegration';
import { AnimatedAudience } from './components/AnimatedAudience';
import { ProductsSection } from './components/ProductsSection';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import Booking from "./components/Booking";
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { 
  ArrowRight, 
  Clock, 
  PhoneOff, 
  Repeat, 
  TrendingDown, 
  Calendar, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';
import { motion } from 'motion/react';

function App() {
  const baseUrl = import.meta.env.BASE_URL;
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={`${baseUrl}logo.png`}
              alt="Ascend Realty Systems logo"
              className="w-8 h-8 object-contain"
            />
            <div className="text-2xl tracking-tight">
              Ascend Realty Systems
            </div>
          </div>
          <Button onClick={() => scrollToSection('booking')} size="sm">
            Book Free Audit
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl mb-6 tracking-tight leading-[1.1]">
              We help <AnimatedAudience />
              <br />
              capture every opportunity and convert deals
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Respond instantly, never miss a lead, and convert more enquiries into signed deals with automated systems that work 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('calculator')} className="text-lg px-8 py-6">
                Calculate Your Lost Revenue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('booking')} className="text-lg px-8 py-6">
                Book Free Audit
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 rounded-2xl overflow-hidden shadow-2xl max-w-5xl mx-auto relative group"
          >
            {/* Grid Overlay */}
            <div className="absolute inset-0 grid grid-cols-3 gap-0.5 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-white/20" />
              ))}
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
            
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764676003423-3b6635026c61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWFsJTIwZXN0YXRlJTIwb2ZmaWNlJTIwc3lkbmV5fGVufDF8fHx8MTc3NTY5NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern real estate office"
              className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight leading-tight">
              Most Agencies Don't Have a Lead Problem
              <br />
              <span className="text-gray-400">They Have a Follow Up Problem</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: Clock,
                title: 'Enquiries sit unanswered for hours',
                description: 'While you\'re in meetings or with clients, hot leads go cold waiting for a response.',
              },
              {
                icon: PhoneOff,
                title: 'Missed calls turn into lost listings',
                description: 'Every unanswered call is a potential seller talking to your competitor instead.',
              },
              {
                icon: Repeat,
                title: 'Repetitive low-ROI tasks drain resources',
                description: 'Sorting documents, updating spreadsheets, manual data entry – time that could be spent selling.',
              },
              {
                icon: TrendingDown,
                title: 'Hours lost to administrative busywork',
                description: 'Your team spends more time managing paperwork than building relationships and closing deals.',
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 lg:p-8 h-full hover:shadow-xl transition-all border-2 border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-xl shrink-0">
                      <problem.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl mb-2">{problem.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-2xl md:text-3xl text-red-600">
              Every delay costs you deals you'll never see
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl mb-4 tracking-tight">
              What Is This <span className="text-red-600">Costing You?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your monthly revenue loss from delayed follow-ups and poor response times
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <UpdatedLeadLossCalculator />
          </motion.div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
              Is Your Lead Flow Costing You Deals?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Most agencies don't realize how much revenue they're leaving on the table.
              Take our quick assessment to find out where you stand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section id="quiz" className="py-12 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm text-blue-700 mb-4">
              Free Assessment
            </div>
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
              Take the Lead Loss Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Answer 5 quick questions and get a personalized report showing exactly where you're losing deals
            </p>
          </motion.div>

          <InteractiveQuiz />
        </div>
      </section>

      {/* Systems & Solutions Section */}
      <SystemsSolution />

      {/* Products Section */}
      <ProductsSection />

      {/* Tools Integration Section */}
      <ToolsIntegration />

      {/* Calendly Booking Section */}
      <Booking />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-12">
            {/* Brand - Takes up more space */}
            <div className="md:col-span-4">
              <div className="text-2xl text-white mb-4 tracking-tight">Ascend Realty Systems</div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Systems-Driven Growth Partner
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Engineering real estate success through data-driven lead capture and optimised conversion systems.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-white text-sm mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors">
                    Our System
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('calculator')} className="hover:text-white transition-colors">
                    Pricing
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors">
                    Book a Call
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div className="md:col-span-3">
              <h4 className="text-white text-sm mb-4">Programs</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lead Response Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Follow-Up Automation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CRM Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Performance Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Agency Optimization
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-white text-sm mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                  <a href="mailto:" className="hover:text-white transition-colors">
                    ascendrealtysystems@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Based in Sydney, NSW</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-800 pt-8 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-blue-400 text-sm">✓</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Verified</div>
                  <div className="text-xs text-white">REA Partner</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-green-400 text-sm">🔒</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Data</div>
                  <div className="text-xs text-white">Privacy Compliant</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-3">
                <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-purple-400 text-sm">⚡</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">99.9%</div>
                  <div className="text-xs text-white">Uptime SLA</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-red-400 text-sm">🔐</span>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">ISO</div>
                  <div className="text-xs text-white">SSL Secured</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2026 Ascend Realty Systems . All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;