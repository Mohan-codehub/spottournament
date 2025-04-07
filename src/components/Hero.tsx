import React from 'react';
import { Clock, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
          alt="Tournament background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Trophy size={16} />
            <span className="text-sm">Featured Tournament</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            FIFA World Cup 2026 Qualifiers Begin Across Continents
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Teams from around the world start their journey to secure a spot in the biggest football tournament.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium">
              View Schedule
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium">
              Live Scores
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;