import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, Building2, Users, Calendar } from 'lucide-react';

const tabs = [
  { id: 'history', label: 'History & Establishment', icon: BookOpen },
  { id: 'deity', label: 'About the Deity', icon: Sparkles },
  { id: 'architecture', label: 'Temple Architecture & Garbha Griha', icon: Building2 },
  { id: 'trustees', label: 'Board of Trustees', icon: Users },
  { id: 'dates', label: 'Important Dates & Pooja Details', icon: Calendar }
];

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <section className="py-12 bg-gradient-to-br from-white to-orange-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-extrabold text-orange-900 mb-4 tracking-tight">About Shri Bhagwati Dham Seva Trust</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Sidebar Navigation */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl shadow-orange-100/50 border border-orange-100 sticky top-24"
            >
              <ul className="space-y-2 relative">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <li key={tab.id} className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative w-full flex items-center px-4 py-3.5 rounded-xl font-semibold transition-colors duration-300 z-10 ${isActive
                          ? 'text-white'
                          : 'text-orange-900 hover:bg-orange-50'
                          }`}
                      >
                        <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-orange-500'}`} />
                        <span className="text-left text-sm lg:text-base">{tab.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
              >

                {activeTab === 'history' && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                      <BookOpen className="text-orange-500 w-8 h-8" />
                      History & Establishment
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      The Shri Bhagwati Maa Temple stands as a beacon of faith, established over three centuries ago. According to local lore, the temple was founded after a divine vision guided the early settlers to this exact location along the spiritual corridors of the city.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      The Temple Trust was officially registered in 1950 to ensure the preservation of the temple's heritage, manage the growing number of devotees, and spearhead charitable activities in the surrounding communities.
                    </p>
                  </div>
                )}

                {activeTab === 'deity' && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                      <Sparkles className="text-orange-500 w-8 h-8" />
                      About the Deity
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      The presiding deity, Bhagwati Maa, is worshipped as the supreme embodiment of universal energy, compassion, and protection. The magnificent idol is adorned daily with fresh flowers and sacred ornaments, drawing thousands of devotees seeking peace and prosperity.
                    </p>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                      <Building2 className="text-orange-500 w-8 h-8" />
                      Temple Architecture
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Constructed using traditional Nagara style architecture, the temple spans a vast area featuring intricate stone carvings that depict ancient mythologies.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/60 mt-6 shadow-inner"
                    >
                      <h4 className="font-bold text-orange-900 text-xl mb-2 flex items-center gap-2">
                        The Garbha Griha (Inner Sanctum)
                      </h4>
                      <p className="text-base text-gray-700 leading-relaxed">
                        The innermost sanctum is designed to focus spiritual energy. It is constructed from solid marble and features a silver-plated doorway. Access to the Garbha Griha is heavily regulated to maintain its sanctity.
                      </p>
                    </motion.div>
                  </div>
                )}

                {activeTab === 'trustees' && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                      <Users className="text-orange-500 w-8 h-8" />
                      Board of Trustees
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { name: 'Shri Ishan Vatsa', role: 'Chairman' },
                        { name: 'Shri Raunak Gupta sbke Gand me chubhta', role: 'Secretary' },
                        { name: 'Shri Akash Yadav', role: 'Treasurer' }
                      ].map((trustee, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                          className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 transition-all"
                        >
                          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-orange-600 font-bold text-xl">
                            {trustee.name.charAt(5)}
                          </div>
                          <p className="font-bold text-gray-900 text-lg">{trustee.name}</p>
                          <p className="text-sm text-orange-600 font-medium tracking-wide uppercase mt-1">{trustee.role}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'dates' && (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                      <Calendar className="text-orange-500 w-8 h-8" />
                      Dates & Pooja Schedule
                    </h3>
                    <ul className="space-y-4 text-gray-600 text-lg mb-8">
                      {[
                        { title: 'Chaitra Navratri', desc: 'Grand 9-day celebration (March/April).' },
                        { title: 'Sharad Navratri', desc: 'Maha Aarti and Garba (Sept/Oct).' },
                        { title: 'Foundation Day', desc: 'Celebrated annually on Vasant Panchami.' }
                      ].map((event, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-start bg-gray-50 p-4 rounded-xl"
                        >
                          <span className="text-orange-500 mr-3 mt-1">📌</span>
                          <div>
                            <strong className="text-gray-900 block">{event.title}</strong>
                            <span className="text-base">{event.desc}</span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>

                    <h4 className="font-bold text-gray-800 text-xl mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      Daily Timings
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Mangala Aarti', time: '5:00 AM' },
                        { label: 'Darshan', time: '6:00 AM - 12:00 PM' },
                        { label: 'Rajbhog', time: '12:30 PM' },
                        { label: 'Evening Darshan', time: '4:00 PM - 9:00 PM' }
                      ].map((timing, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.03 }}
                          className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex justify-between items-center"
                        >
                          <strong className="text-orange-900">{timing.label}</strong>
                          <span className="text-orange-700 font-medium bg-white px-3 py-1 rounded-lg text-sm shadow-sm">
                            {timing.time}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;