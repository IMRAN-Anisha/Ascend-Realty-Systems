import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Typically 2-4 weeks from initial audit to full system deployment. We work in phases so you can start seeing benefits within the first week, with the complete system running by week 3-4.',
    },
    {
      question: 'Will this work with my existing CRM and tools?',
      answer: 'Yes. Our systems integrate seamlessly with major real estate platforms including RealEstate.com.au, Domain, REI Forms Master, Box+Dice, MyDesktop, and popular CRMs. We adapt to your existing workflow rather than forcing you to change.',
    },
    {
      question: 'Do I need to be tech-savvy to use this?',
      answer: 'Not at all. We build everything for you and train your team on simple processes. Most agents are up and running in under 30 minutes. The system works in the background - your team just sees better organized leads and automated follow-ups.',
    },
    {
      question: 'What happens to leads that come in after hours?',
      answer: 'They get instant automated responses acknowledging their enquiry, providing initial information, and setting expectations. Hot leads trigger immediate SMS alerts to your on-call agents. All leads are automatically scheduled for follow-up first thing the next business day.',
    },
    {
      question: 'What\'s the investment?',
      answer: 'Investment depends on your agency size and requirements. Most agencies see ROI within 2-3 months. During your free audit, we\'ll calculate your current revenue loss and show you exactly what you could gain - the decision usually becomes obvious.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side - Title and CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm text-blue-700 mb-4 w-fit">
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Everything you need to know about our systems and process
            </p>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
              <p className="text-lg text-gray-900 mb-6">Still have questions?</p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Book a call with our team
              </a>
            </div>
          </motion.div>

          {/* Right Side - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Accordion type="single" collapsible className="divide-y divide-gray-100">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline px-8 py-6 hover:bg-gray-50 transition-colors group">
                      <span className="text-lg pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 px-8 pb-6 pt-2 text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}