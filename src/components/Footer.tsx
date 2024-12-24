import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Banner */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by millions to discover and buy the right food every time.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=100&h=100" alt="Marketplace" className="w-16 h-16 mb-4 rounded-lg object-cover" />
              <p className="text-gray-700">Shop the world's largest food marketplace</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=100&h=100" alt="Support" className="w-16 h-16 mb-4 rounded-lg object-cover" />
              <p className="text-gray-700">Our support team is always here to help</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=100&h=100" alt="Delivery" className="w-16 h-16 mb-4 rounded-lg object-cover" />
              <p className="text-gray-700">Careful delivery right to your doorstep</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=100&h=100" alt="Reviews" className="w-16 h-16 mb-4 rounded-lg object-cover" />
              <p className="text-gray-700">Check honest reviews of any food before purchase</p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
          {/* Logo and Contact */}
          <div className="col-span-1">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHGBCaY3o1hKg/company-logo_200_200/company-logo_200_200/0/1713012126041" alt="GO Spoon" className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-600 mb-2">Contact Customer Care</p>
            <p className="text-sm text-gray-600 mb-2">+990 xxxxxxxx</p>
            <p className="text-sm text-gray-600">Mon.-Sun: 9 a.m. - 12 a.m. ET</p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Our Company</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Community Impact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Social Responsibility</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">For the Media</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">For the Trade</a></li>
            </ul>
          </div>

          {/* Store */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Store</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Store Locator</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Classes & Events</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Book Our Room</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Gift Cards</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Guides & Advice</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Total Food Professional</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Order Status</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Store Pickup</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Delivery</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Shipping</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">Returns</a></li>
            </ul>
          </div>

          {/* News Room */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">News Room</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">News</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">ReleaseMedia</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">KitMedia</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-orange-500">ContactTopics</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} GO Spoon. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}