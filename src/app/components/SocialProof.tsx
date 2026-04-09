import { motion } from 'motion/react';

export function SocialProof() {
  // Placeholder logos - in real implementation, these would be actual partner logos
  const partners = [
    'RealEstate.com.au',
    'Domain',
    'REI Forms',
    'Box+Dice',
    'MyDesktop',
    'PropertyTree',
  ];

  return (
    <section className="py-16 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
            Trusted Integration Partners
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="text-gray-400 hover:text-gray-600 transition-colors text-sm text-center px-2">
                {partner}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
