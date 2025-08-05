'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Users, 
  Shield,
  Palette,
  MessageSquare,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Card } from '@/components/ui';

const features = [
  {
    icon: Brain,
    title: 'AI Content Generation',
    description: 'Create compelling marketing copy, social media posts, and email campaigns in seconds with our advanced AI writing assistant.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Get deep insights into your campaign performance with AI-powered analytics and predictive modeling.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Audience Targeting',
    description: 'Reach the right audience with AI-driven targeting that learns and optimizes based on real-time data.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Automated Optimization',
    description: 'Let AI automatically optimize your campaigns for maximum performance and ROI.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    description: 'Segment your audience intelligently with AI that identifies patterns and behaviors you might miss.',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Shield,
    title: 'Brand Safety',
    description: 'Ensure your brand stays safe with AI-powered content moderation and brand safety tools.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Palette,
    title: 'Visual AI Designer',
    description: 'Create stunning visuals, logos, and graphics with our AI-powered design assistant.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: MessageSquare,
    title: 'Chatbot Integration',
    description: 'Engage customers 24/7 with intelligent chatbots that learn from every interaction.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Stay ahead of trends with AI that predicts market changes and consumer behavior.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Multi-Channel Management',
    description: 'Manage all your marketing channels from one AI-powered dashboard.',
    color: 'from-amber-500 to-orange-500'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding relative">
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
            <span className="text-white">Powerful AI</span>
            <br />
            <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to revolutionize your marketing with artificial intelligence. 
            From content creation to analytics, we've got you covered.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 text-center group">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-white/70 mb-6">
            Ready to experience the future of marketing?
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { FeaturesSection }; 