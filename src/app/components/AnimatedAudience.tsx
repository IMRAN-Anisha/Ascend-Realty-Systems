import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const audiences = [
  { text: 'buyers agents', color: 'text-orange-600' },
  { text: 'real estate agents', color: 'text-orange-600' },
  { text: 'property managers', color: 'text-orange-600' },
  { text: 'real estate firms', color: 'text-orange-600' },
];

export function AnimatedAudience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % audiences.length);
    }, 3000); // Change every 3 seconds for a natural pace

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[300px] md:min-w-[400px] text-left">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] // Smooth easing
          }}
          className={`inline-block ${audiences[currentIndex].color}`}
        >
          {audiences[currentIndex].text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}