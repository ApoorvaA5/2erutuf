import React from 'react';
import { motion } from 'framer-motion';

const CodePreview = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        <div className="p-6">
          <pre className="text-sm">
            <code className="text-blue-400">import</code>{' '}
            <code className="text-green-400">{'{ useState }'}</code>{' '}
            <code className="text-blue-400">from</code>{' '}
            <code className="text-orange-300">'react'</code>
            {'\n\n'}
            <code className="text-purple-400">function</code>{' '}
            <code className="text-yellow-300">App</code>
            <code className="text-white">()</code>{' '}
            <code className="text-white">{'{'}</code>
            {'\n  '}
            <code className="text-blue-400">const</code>{' '}
            <code className="text-white">[</code>
            <code className="text-green-400">count</code>
            <code className="text-white">,</code>{' '}
            <code className="text-green-400">setCount</code>
            <code className="text-white">]</code>{' '}
            <code className="text-white">=</code>{' '}
            <code className="text-yellow-300">useState</code>
            <code className="text-white">(</code>
            <code className="text-orange-300">0</code>
            <code className="text-white">)</code>
            {'\n\n  '}
            <code className="text-blue-400">return</code>{' '}
            <code className="text-white">(</code>
            {'\n    '}
            <code className="text-blue-300">{'<div>'}</code>
            {'\n      '}
            <code className="text-blue-300">{'<button>'}</code>
            <code className="text-white">Count: {'{count}'}</code>
            <code className="text-blue-300">{'</button>'}</code>
            {'\n    '}
            <code className="text-blue-300">{'</div>'}</code>
            {'\n  '}
            <code className="text-white">)</code>
            {'\n'}
            <code className="text-white">{'}'}</code>
          </pre>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-xl -z-10" />
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl -z-10" />
    </div>
  );
};

export default CodePreview;