import { motion } from 'motion/react';
import { 
  Inbox, 
  Zap, 
  TrendingUp, 
  Plug,
  CheckCircle2,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

export function SystemsSolution() {
  const solutions = [
    {
      title: 'Instant Response System',
      subtitle: 'NEVER MISS A LEAD',
      description: 'Every enquiry gets an instant, personalized response. Automatically qualify leads and route to the right agent.',
      gradient: 'from-pink-100 to-pink-50',
      borderColor: 'border-pink-300',
      icon: Zap,
      iconBg: 'bg-pink-200',
      iconColor: 'text-pink-600',
      features: [
        'Auto-reply within 60 seconds',
        'Smart lead qualification',
        'Agent assignment & alerts',
      ],
    },
    {
      title: 'Follow-Up Automation',
      subtitle: 'SYSTEMATIC NURTURE',
      description: 'Never let a lead go cold. Automated follow-up sequences that feel personal and drive engagement.',
      gradient: 'from-purple-100 to-purple-50',
      borderColor: 'border-purple-300',
      icon: Inbox,
      iconBg: 'bg-purple-200',
      iconColor: 'text-purple-600',
      features: [
        'Multi-channel sequences (Email, SMS)',
        'Behavior-triggered follow-ups',
        'Human takeover when hot',
      ],
    },
    {
      title: 'Performance Tracking',
      subtitle: 'KNOW YOUR NUMBERS',
      description: 'Real-time dashboard showing response times, conversion rates, and revenue impact.',
      gradient: 'from-orange-100 to-orange-50',
      borderColor: 'border-orange-300',
      icon: BarChart3,
      iconBg: 'bg-orange-200',
      iconColor: 'text-orange-600',
      features: [
        'Live lead pipeline view',
        'Agent performance metrics',
        'Revenue attribution',
      ],
    },
    {
      title: 'Seamless Integration',
      subtitle: 'WORKS WITH YOUR TOOLS',
      description: 'Connects to your existing CRM, property portals, and communication tools. No platform switching.',
      gradient: 'from-blue-100 to-blue-50',
      borderColor: 'border-blue-300',
      icon: Plug,
      iconBg: 'bg-blue-200',
      iconColor: 'text-blue-600',
      features: [
        'CRM sync (Real Estate, Domain, etc.)',
        'Email & calendar integration',
        'WhatsApp & SMS ready',
      ],
    },
  ];

  return (
    <section id="solution" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-sm text-orange-700 mb-4">
            The Solution
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight">
            What Takes Your Problems
            <br />
            Off Your Plate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineered systems that capture every lead, respond instantly, and turn cold enquiries into closed deals
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`
                bg-gradient-to-br ${solution.gradient} 
                rounded-2xl p-8 border-2 ${solution.borderColor}
                hover:shadow-xl transition-shadow
              `}
            >
              <div className={`inline-flex p-3 ${solution.iconBg} rounded-xl mb-4`}>
                <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
              </div>
              <div className="text-xs text-gray-500 mb-2 tracking-wider">
                {solution.subtitle}
              </div>
              <h3 className="text-2xl mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}