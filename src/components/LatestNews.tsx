import React from 'react';

const LatestNews = () => {
  const news = [
    {
      category: 'Football',
      title: 'UEFA Champions League: Quarter-Final Draw Revealed',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80',
      time: '2 hours ago'
    },
    {
      category: 'Tennis',
      title: 'Australian Open 2024: Tournament Schedule Released',
      image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&q=80',
      time: '3 hours ago'
    },
    {
      category: 'Cricket',
      title: 'IPL 2024: Complete Tournament Schedule Announced',
      image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
      time: '4 hours ago'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Tournament Updates</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-blue-600 text-sm font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <div className="text-gray-500 text-sm">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;