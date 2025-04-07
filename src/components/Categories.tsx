import React from 'react';
import { Trophy } from 'lucide-react';

const Categories = () => {
  const tournaments = [
    {
      title: 'FIFA World Cup',
      image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80',
      status: 'Qualifiers Ongoing'
    },
    {
      title: 'Champions League',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80',
      status: 'Quarter Finals'
    },
    {
      title: 'IPL 2024',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
      status: 'Starting Soon'
    },
    {
      title: 'Australian Open',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
      status: 'Registration Open'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Featured Tournaments</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={tournament.image}
                alt={tournament.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-1">{tournament.title}</h3>
                <p className="text-sm text-blue-400">{tournament.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;