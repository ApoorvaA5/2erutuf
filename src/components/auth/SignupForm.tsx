import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface SignupFormProps {
  onClose: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    userType: 'entrepreneur' as 'investor' | 'entrepreneur'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup:', formData);
    onClose();
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">Get Started Now</h2>
        <p className="text-gray-600 mt-2">Create your account to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 justify-center mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="userType"
              value="investor"
              checked={formData.userType === 'investor'}
              onChange={(e) => setFormData({ ...formData, userType: 'investor' })}
              className="sr-only"
            />
            <span className={`px-4 py-2 rounded-full cursor-pointer transition-all ${
              formData.userType === 'investor' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
              I'm an Investor
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="userType"
              value="entrepreneur"
              checked={formData.userType === 'entrepreneur'}
              onChange={(e) => setFormData({ ...formData, userType: 'entrepreneur' })}
              className="sr-only"
            />
            <span className={`px-4 py-2 rounded-full cursor-pointer transition-all ${
              formData.userType === 'entrepreneur' 
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}>
              I'm an Entrepreneur
            </span>
          </label>
        </div>

        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="rounded border-gray-300 text-orange-600"
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the{' '}
            <a href="/terms" className="text-orange-600 hover:text-orange-700">Terms</a>
            {' '}and{' '}
            <a href="/privacy" className="text-orange-600 hover:text-orange-700">Privacy Policy</a>
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
        >
          Create Account
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </form>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button className="text-orange-600 hover:text-orange-700 font-medium">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignupForm;