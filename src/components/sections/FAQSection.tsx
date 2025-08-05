'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '@/components/ui';

const faqItems = [
  {
    title: 'How does ADmyBRAND AI Suite work?',
    content: 'ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your brand, target audience, and market trends. It then generates personalized marketing content, optimizes campaigns, and provides actionable insights to improve your ROI. The platform learns from your data and continuously improves its recommendations.'
  },
  {
    title: 'What types of content can the AI generate?',
    content: 'Our AI can generate a wide variety of marketing content including social media posts, email campaigns, blog articles, ad copy, product descriptions, and more. It adapts to your brand voice and style while ensuring all content is engaging and optimized for your target audience.'
  },
  {
    title: 'Is my data safe and secure?',
    content: 'Absolutely. We take data security seriously and use enterprise-grade encryption to protect your information. We\'re GDPR compliant and never share your data with third parties. All AI processing is done on secure servers with strict access controls.'
  },
  {
    title: 'Can I integrate ADmyBRAND with my existing tools?',
    content: 'Yes! ADmyBRAND integrates seamlessly with popular marketing platforms like HubSpot, Mailchimp, Facebook Ads, Google Ads, and many more. We also provide API access for custom integrations with your existing tech stack.'
  },
  {
    title: 'How long does it take to see results?',
    content: 'Most customers see immediate improvements in content quality and time savings. For measurable ROI improvements like increased conversions and engagement, you can typically expect to see results within 2-4 weeks of consistent use.'
  },
  {
    title: 'Do you offer training and support?',
    content: 'Yes! We provide comprehensive onboarding, video tutorials, live training sessions, and 24/7 customer support. Our team of AI marketing experts is always available to help you get the most out of the platform.'
  },
  {
    title: 'Can I cancel my subscription anytime?',
    content: 'Of course! You can cancel your subscription at any time with no penalties or hidden fees. Your account will remain active until the end of your current billing period, and you can reactivate it anytime.'
  },
  {
    title: 'What makes ADmyBRAND different from other AI tools?',
    content: 'Unlike generic AI tools, ADmyBRAND is specifically designed for marketing professionals. It understands marketing best practices, brand guidelines, and campaign optimization. Our AI learns your specific brand voice and audience preferences for more personalized and effective results.'
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? 
            Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card">
            <Accordion items={faqItems} allowMultiple={false} />
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-white/70 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { FAQSection }; 