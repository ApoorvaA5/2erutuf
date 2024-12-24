import React from 'react';
import { Minus, X, Check } from 'lucide-react';

type PackageFeature = {
  text: string;
};

type PackageProps = {
  title: string;
  price: number;
  features: PackageFeature[];
};

function Package({ title, price, features }: PackageProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <Minus className="w-4 h-4 text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <span className="text-4xl font-bold text-orange-600">₹{price}</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-600">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PowerPackage() {
  const packages = [
    {
      title: "BASIC PACKAGE",
      price: 5399,
      features: [
        { text: "Lunch and Dinner" },
        { text: "Lean bites and Tri bites" },
        { text: "Skips available" }
      ]
    },
    {
      title: "STANDARD PACKAGE",
      price: 5899,
      features: [
        { text: "Lunch and Dinner" },
        { text: "Tri bites and Prime bites" },
        { text: "Skips available" },
        { text: "Customise option available" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">POWER PACKAGE</h2>
          <div className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
            PRICE LIST
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <Package
              key={index}
              title={pkg.title}
              price={pkg.price}
              features={pkg.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}