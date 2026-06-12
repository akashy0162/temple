import React from 'react';

const LocationMap = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Temple Location & Route</h2>
          <p className="text-gray-600">Plan your visit to seek the divine blessings.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          
          {/* Map Embed Column */}
          <div className="w-full md:w-2/3 bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 relative border border-gray-300">
            {/* 👇 ACTUAL Google Maps Embed URL pointing to Maa Bhagawati Dham with Label 👇 */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              title="Temple Location Map"
              src="https://maps.google.com/maps?q=25.5054604,83.4597433+(Bhagawati+Mata+Temple)&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight="0" 
              marginWidth="0"
            ></iframe>
          </div>

          {/* Location Details Column */}
          <div className="w-full md:w-1/3 bg-orange-50 p-8 rounded-xl shadow-md border border-orange-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-orange-200 pb-2">Reaching the Temple</h3>
            
            <ul className="space-y-5 text-gray-700">
              <li className="flex items-start">
                <span className="text-xl mr-3" role="img" aria-label="Location pin">📍</span>
                <div>
                  <strong className="text-gray-900">Address:</strong><br />
                  Maa Bhagawati Dham Seva Trust,<br />
                  Anapur Sarayan, Tulapatti, Karanda,<br />
                  Ghazipur, Uttar Pradesh, India - 233224
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-xl mr-3" role="img" aria-label="Train">🚆</span>
                <div>
                  <strong className="text-gray-900">Nearest Station:</strong><br />
                  Ghazipur City Railway Station
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="text-xl mr-3" role="img" aria-label="Airplane">✈️</span>
                <div>
                  <strong className="text-gray-900">Nearest Airport:</strong><br />
                  Lal Bahadur Shastri International Airport
                </div>
              </li>
            </ul>

            {/* 👇 UPDATED: Google Maps Directions URL 👇 */}
            <button 
              onClick={() => window.open('https://maps.app.goo.gl/SVWKRHYwKCvBqdV76', '_blank')}
              className="mt-8 w-full bg-orange-600 text-white py-3 rounded-md font-bold hover:bg-orange-700 shadow-md transition transform hover:-translate-y-0.5"
            >
              Get Directions
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;