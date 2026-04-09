import { motion } from 'motion/react';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: '3.5x',
      label: 'Average ROI',
      description: 'Within 6 months',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      number: '<2min',
      label: 'Response Time',
      description: 'Down from 4+ hours',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: Users,
      number: '94%',
      label: 'Lead Capture',
      description: 'Up from 62%',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      number: '100+',
      label: 'Agencies',
      description: 'Trust our systems',
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-400">
            Real results from real estate agencies across Sydney
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.gradient} mb-6`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                {/* Number */}
                <div className="text-5xl mb-2 tracking-tight">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg text-white mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
