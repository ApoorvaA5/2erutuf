import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import GradientText from '../common/GradientText';
import AnimatedButton from './AnimatedButton';

const SignupCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Floating Sparkles Icon */}
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block mb-6"
          >
            <div className="p-3 bg-blue-100 rounded-full">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join our growing network of{' '}
            <GradientText>India-based</GradientText>{' '}
            innovators and investors
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            Future Minds helps innovators and investors in India facilitate lasting 
            and profitable relationships that build better businesses and brighter futures
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton 
              href="/partner"
              variant="primary"
            >
              Sign up as an investor
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>

            <AnimatedButton 
              href="/innovate"
              variant="secondary"
            >
              Sign up for innovators
              <ArrowRight className="ml-2 h-5 w-5" />
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignupCTA;