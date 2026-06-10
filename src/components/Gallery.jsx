import React, { useState, useEffect } from 'react';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Load the admin uploads from the mock "database" (Local Storage)
  useEffect(() => {
    const fetchMedia = () => {
      // Get uploaded media from local storage
      const uploadedMedia = JSON.parse(localStorage.getItem('templeMedia')) || [];
      
      // We start with an empty array or basic fallback photos, then add the uploaded ones
      setGalleryItems(uploadedMedia);
    };

    fetchMedia();
  }, []);

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">Divine Gallery</h2>
        <p className="text-gray-600 mb-8 text-lg">Glimpses of architecture, festivities, and daily darshan.</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['all', 'deity', 'architecture', 'events'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                activeFilter === filter 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-200 aspect-square cursor-pointer"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.src} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  muted 
                  loop 
                  autoPlay 
                  playsInline
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                  <span className="text-2xl mb-2 block">
                    {item.type === 'video' ? '🎥' : '📸'}
                  </span>
                  <p className="font-semibold">{item.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="py-12 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl">
            <p className="text-gray-500 text-lg">The gallery is currently empty.</p>
            <p className="text-gray-400 text-sm mt-2">Log into the Admin Panel to upload new photos and videos!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;