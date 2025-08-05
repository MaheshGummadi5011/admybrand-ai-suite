'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card, Badge, Button } from '@/components/ui';

const pricingPlans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses and startups',
    features: [
      'AI Content Generation (50/month)',
      'Basic Analytics Dashboard',
      'Email Support',
      '5 Campaign Templates',
      'Social Media Integration',
      'Basic Reporting'
    ],
    popular: false,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for growing businesses and marketing teams',
    features: [
      'AI Content Generation (500/month)',
      'Advanced Analytics & Insights',
      'Priority Support',
      'Unlimited Campaign Templates',
      'Multi-Channel Management',
      'Advanced Reporting & ROI Tracking',
      'Customer Segmentation',
      'A/B Testing Tools',
      'API Access'
    ],
    popular: true,
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Enterprise',
    price: 299,
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited AI Content Generation',
      'Custom AI Model Training',
      'Dedicated Account Manager',
      'Custom Integrations',
      'Advanced Security & Compliance',
      'White-label Solutions',
      'Custom Reporting',
      'Team Collaboration Tools',
      'Advanced Automation',
      'Predictive Analytics'
    ],
    popular: false,
    color: 'from-orange-500 to-red-500'
  }
];

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const getPrice = (basePrice: number) => {
    return billingCycle === 'yearly' ? basePrice * 10 : basePrice;
  };

  const getSavings = (basePrice: number) => {
    return billingCycle === 'yearly' ? basePrice * 2 : 0;
  };

  return (
    <section id="pricing" className="section-padding relative">
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
            <span className="text-white">Simple,</span>
            <br />
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI features 
            with no hidden fees or surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-white/10 rounded-full p-1 transition-colors"
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full"
                animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'}`}>
              Yearly
              {billingCycle === 'yearly' && (
                <Badge variant="success" size="sm" className="ml-2">
                  Save 20%
                </Badge>
              )}
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge variant="primary" size="lg" className="flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <Card 
                variant={plan.popular ? 'gradient' : 'glass'} 
                className={`h-full p-8 ${plan.popular ? 'scale-105' : ''}`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold gradient-text">
                        ${getPrice(plan.price)}
                      </span>
                      <span className="text-white/60 ml-2">/month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-400 mt-2">
                        Save ${getSavings(plan.price)} annually
                      </p>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  size="lg"
                >
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-white/70 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="ghost" size="sm">
              View Full Feature Comparison
            </Button>
            <Button variant="ghost" size="sm">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PricingSection }; 