import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-800 mb-4">About Shri Bhagwati Dham Temple and Trust</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/4">
            <div className="bg-orange-50 rounded-xl p-4 shadow-sm border border-orange-100 sticky top-24">
              <ul className="space-y-2">
                {[
                  { id: 'history', label: 'History & Establishment' },
                  { id: 'deity', label: 'About the Deity' },
                  { id: 'architecture', label: 'Temple Architecture & Garbha Griha' },
                  { id: 'trustees', label: 'Board of Trustees' },
                  { id: 'dates', label: 'Important Dates & Pooja Details' }
                ].map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition ${
                        activeTab === tab.id 
                          ? 'bg-orange-600 text-white shadow-md' 
                          : 'text-orange-900 hover:bg-orange-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4 bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-200 animate-fade-in">
            
            {activeTab === 'history' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">History & Establishment</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Shri Bhagwati Maa Temple stands as a beacon of faith, established over three centuries ago. According to local lore, the temple was founded after a divine vision guided the early settlers to this exact location along the spiritual corridors of the city.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Temple Trust was officially registered in 1950 to ensure the preservation of the temple's heritage, manage the growing number of devotees, and spearhead charitable activities in the surrounding communities.
                </p>
              </div>
            )}

            {activeTab === 'deity' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Deity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The presiding deity, Bhagwati Maa, is worshipped as the supreme embodiment of universal energy, compassion, and protection. The magnificent idol is adorned daily with fresh flowers and sacred ornaments, drawing thousands of devotees seeking peace and prosperity.
                </p>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Temple Architecture & Garbha Griha</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Constructed using traditional Nagara style architecture, the temple spans a vast area featuring intricate stone carvings that depict ancient mythologies. 
                </p>
                <div className="bg-white p-4 rounded border border-gray-200 my-4">
                  <h4 className="font-bold text-orange-800 mb-2">The Garbha Griha (Inner Sanctum)</h4>
                  <p className="text-sm text-gray-600">
                    The innermost sanctum is designed to focus spiritual energy. It is constructed from solid marble and features a silver-plated doorway. Access to the Garbha Griha is heavily regulated to maintain its sanctity.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'trustees' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Board of Trustees</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <p className="font-bold text-gray-800">Shri Ishan Vatsa</p>
                    <p className="text-sm text-orange-600 font-semibold">Chairman</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <p className="font-bold text-gray-800">Shri Raunak Gupta sbke Gand me chubhta</p>
                    <p className="text-sm text-orange-600 font-semibold">Secretary</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
                    <p className="font-bold text-gray-800">Shri Akash Yadav</p>
                    <p className="text-sm text-orange-600 font-semibold">Treasurer</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dates' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Important Dates & Pooja Schedule</h3>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-center"><span className="text-orange-500 mr-2">📌</span> <strong>Chaitra Navratri:</strong> Grand 9-day celebration (March/April).</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">📌</span> <strong>Sharad Navratri:</strong> Maha Aarti and Garba (Sept/Oct).</li>
                  <li className="flex items-center"><span className="text-orange-500 mr-2">📌</span> <strong>Foundation Day:</strong> Celebrated annually on Vasant Panchami.</li>
                </ul>
                <h4 className="font-bold text-gray-800 text-lg mb-2">Daily Timings</h4>
                <div className="bg-white p-4 rounded border border-gray-200 grid grid-cols-2 gap-4 text-sm">
                  <div><strong>Mangala Aarti:</strong> 5:00 AM</div>
                  <div><strong>Darshan:</strong> 6:00 AM - 12:00 PM</div>
                  <div><strong>Rajbhog:</strong> 12:30 PM</div>
                  <div><strong>Evening Darshan:</strong> 4:00 PM - 9:00 PM</div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;