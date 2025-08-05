'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, Carousel } from '@/components/ui';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechFlow Inc.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'ADmyBRAND AI Suite has completely transformed our marketing strategy. The AI content generation saves us hours every week, and the analytics insights have helped us increase our ROI by 300%.',
    results: '300% ROI Increase'
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'As a startup, we needed to maximize our marketing impact with limited resources. ADmyBRAND\'s AI tools have been a game-changer. We\'ve scaled our campaigns 10x without increasing our team size.',
    results: '10x Campaign Scale'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Digital Marketing Manager',
    company: 'Global Retail Co.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The customer segmentation and targeting features are incredible. We\'ve seen a 150% increase in conversion rates and our customer acquisition costs have dropped by 40%.',
    results: '150% Conversion Increase'
  },
  {
    name: 'David Thompson',
    role: 'VP of Marketing',
    company: 'Enterprise Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The predictive analytics and automated optimization features have given us a competitive edge. We\'re now making data-driven decisions that consistently outperform our previous manual processes.',
    results: '500% Performance Boost'
  },
  {
    name: 'Lisa Wang',
    role: 'Brand Manager',
    company: 'Creative Agency',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    content: 'The visual AI designer and content generation tools have revolutionized our creative process. We can now deliver high-quality campaigns in hours instead of days.',
    results: '80% Time Savings'
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
  return (
    <Card className="p-8 h-full">
      <div className="flex flex-col h-full">
        {/* Quote Icon */}
        <div className="mb-6">
          <Quote className="w-8 h-8 text-primary-400" />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <p className="text-white/80 text-lg leading-relaxed mb-6">
            "{testimonial.content}"
          </p>
        </div>

        {/* Results Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
            <span className="text-green-400 text-sm font-medium">
              {testimonial.results}
            </span>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-white/60 text-sm">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mt-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding relative">
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
            <span className="text-white">Trusted by</span>
            <br />
            <span className="gradient-text">10,000+ Marketers</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            See how leading brands and marketing teams are transforming their results 
            with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Carousel
            items={testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
            autoPlay={true}
            interval={6000}
            showDots={true}
            showArrows={true}
            className="h-[500px]"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-white/60">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500%</div>
            <div className="text-white/60">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-white/60">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-white/60">Support Available</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-white/70 mb-6">
            Join thousands of marketers who are already transforming their results
          </p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { TestimonialsSection }; 