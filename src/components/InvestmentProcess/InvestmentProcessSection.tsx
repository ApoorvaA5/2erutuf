import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Eye, Users, ArrowRight } from 'lucide-react';
import ProcessCard from './ProcessCard';

const InvestmentProcessSection = () => {
  const processes = [
    {
      icon: LineChart,
      title: "Transparency through the investment process",
      description: "Track every step of your investment journey with real-time updates and detailed reporting.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2
    },
    {
      icon: Eye,
      title: "Visible investment alternative",
      description: "Access a diverse range of pre-vetted investment opportunities across multiple sectors.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Largest CXO/Professional network",
      description: "Connect with an extensive network of industry leaders, experts, and successful entrepreneurs.",
      gradient: "from-orange-500 to-red-500",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-100 rounded-full mix-blend-multiply opacity-70 animate-blob" />
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-purple-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 -bottom-48 left-48 bg-pink-100 rounded-full mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Investment Process
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A streamlined approach to making informed investment decisions with real-time insights
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 relative z-10"
        >
          {processes.map((process, index) => (
            <React.Fragment key={index}>
              <ProcessCard {...process} index={index} />
              {index < processes.length - 1 && (
                <motion.div 
                  className="hidden md:flex absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${33.33 * (index + 1)}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: process.delay + 0.3 }}
                >
                  <ArrowRight className="w-6 h-6 text-gray-400" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentProcessSection;