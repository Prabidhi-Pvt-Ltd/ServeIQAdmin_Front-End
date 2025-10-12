import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5e6e6] relative overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2">
              <span className="text-pink-600 text-sm">✨ Explore our free plan</span>
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                JOIN NOW
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform<br />
              Your <span className="text-red-600">Restaurants<br />
              and Hotels</span> Today<br />
              using <span className="text-red-600">ServeIQ</span>
            </h1>

            {/* CTA Button */}
            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              View Plans and Packages
            </button>

            {/* Social Proof */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-bold text-lg">100k+</p>
                  <p className="text-sm text-gray-600">Restaurant and Hotel Owners Trust Us !</p>
                </div>
              </div>

              {/* Watch Now */}
              <div className="flex items-center gap-2 mt-6">
                <div>
                  <p className="text-sm text-gray-600">How to use ServeIQ</p>
                  <p className="text-red-600 font-bold text-sm">WATCH NOW !</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <svg className="w-4 h-4 text-white ml-1" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 3l8 5-8 5V3z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2">
            <div 
              className={`relative transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
            >
              {/* Red Circle Background */}
  
              {/* Chef Image */}
              <div className="relative z-10 flex justify-end">
                <img 
                  src=""
                  alt="Professional Chef"
                  className="w-full max-w-[450px]  object-cover"
                  style={{ mixBlendMode: 'normal' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;