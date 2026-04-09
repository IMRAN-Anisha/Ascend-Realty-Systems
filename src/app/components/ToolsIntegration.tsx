import { motion } from 'motion/react';
import { ArrowRight, Plug } from 'lucide-react';
import { Button } from './ui/button';

export function ToolsIntegration() {
  const allTools = [
    { name: 'Dropbox', icon: '📦', color: 'bg-blue-100' },
    { name: 'Gmail', icon: '✉️', color: 'bg-red-100' },
    { name: 'Slack', icon: '💬', color: 'bg-purple-100' },
    { name: 'Facebook', icon: '👥', color: 'bg-blue-100' },
    { name: 'Excel', icon: '📊', color: 'bg-green-100' },
    { name: 'WhatsApp', icon: '💚', color: 'bg-green-100' },
    { name: 'Shopify', icon: '🛍️', color: 'bg-green-100' },
    { name: 'TikTok', icon: '🎵', color: 'bg-pink-100' },
    { name: 'Calendar', icon: '📅', color: 'bg-yellow-100' },
    { name: 'Discord', icon: '🎮', color: 'bg-indigo-100' },
    { name: 'Target', icon: '🎯', color: 'bg-red-100' },
    { name: 'Drive', icon: '☁️', color: 'bg-blue-100' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-3 py-1.5 bg-blue-100 rounded-full text-sm text-blue-700 mb-4">
              <Plug className="inline w-4 h-4 mr-1" />
              Integrations
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              Works with the Tools
              <br />
              Your Team Already Uses
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              BusinessName connects to the tools your team already uses. 
              Square POS, Gmail, Outlook, Xero, and QuickBooks. Nothing new to learn.
            </p>
            <Button size="lg" variant="outline">
              View All Integrations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right - Scrolling Icon Grid */}
          <div className="relative h-[400px]">
            {/* Single continuous scrolling column */}
            <div className="absolute inset-0 flex gap-4 overflow-hidden">
              <div className="flex-1">
                <motion.div
                  animate={{ y: [0, -1000] }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="space-y-4"
                >
                  {/* Triple the tools for seamless loop */}
                  {[...allTools, ...allTools, ...allTools].map((tool, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className={`
                        ${tool.color} rounded-2xl p-6 aspect-square
                        flex items-center justify-center text-4xl
                        shadow-sm hover:shadow-lg transition-shadow
                        cursor-pointer
                      `}
                    >
                      {tool.icon}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div className="flex-1">
                <motion.div
                  animate={{ y: [-1000, 0] }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="space-y-4"
                >
                  {[...allTools, ...allTools, ...allTools].map((tool, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, rotate: -3 }}
                      className={`
                        ${tool.color} rounded-2xl p-6 aspect-square
                        flex items-center justify-center text-4xl
                        shadow-sm hover:shadow-lg transition-shadow
                        cursor-pointer
                      `}
                    >
                      {tool.icon}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
            
            {/* Decorative gradient blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}