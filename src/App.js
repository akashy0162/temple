import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, CalendarCheck, MapPin, Image as ImageIcon, HeartHandshake, Info, ArrowRight, Phone, Mail } from 'lucide-react';

import Navbar from './components/Navbar';   
import LiveDarshan from './components/LiveDarshan';
import DonationSection from './components/DonationSection';
import OnlinePooja from './components/OnlinePooja';
import PersonalizedDarshan from './components/PersonalizedDarshan'; 
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap'; 
import AIChatbot from './components/AIChatbot';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import CharityWork from './components/CharityWork';
import AboutUs from './components/AboutUs';
import Regulations from './components/Regulations';
import UserAuth from './components/UserAuth';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// HomePage Component
const HomePage = () => {
  const features = [
    { title: "Live Darshan", desc: "Watch the daily rituals and aarti live from anywhere in the world.", icon: Camera, path: "/live-darshan", color: "bg-blue-500" },
    { title: "Online Pooja", desc: "Book an online pooja performed by our head priests in your name.", icon: CalendarCheck, path: "/online-pooja", color: "bg-orange-500" },
    { title: "About Us", desc: "Learn about the history, architecture, and the Board of Trustees.", icon: Info, path: "/about", color: "bg-teal-500" },
    { title: "Gallery", desc: "Explore high-quality images of the temple, festivals, and events.", icon: ImageIcon, path: "/gallery", color: "bg-purple-500" },
    { title: "Location Map", desc: "Get accurate directions and timings to visit the temple physically.", icon: MapPin, path: "/location", color: "bg-green-500" },
    { title: "Donations", desc: "Support temple maintenance and our charitable activities.", icon: HeartHandshake, path: "/donate", color: "bg-red-500" },
  ];

  return (
    <>
      <header className="bg-cover bg-center h-[500px] flex items-center justify-center relative shadow-inner" style={{backgroundImage: "url('/media/main-temple.jpeg')"}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white p-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight tracking-tight">Welcome to <span className="text-orange-400">Shri Maa Bhagawati Dham</span></h1>
          <p className="text-xl md:text-2xl mx-auto drop-shadow-md text-gray-200">Experience peace, devotion, and community from the comfort of your home or plan your next visit.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/live-darshan" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1">Watch Live Darshan</Link>
            <Link to="/online-pooja" className="bg-white hover:bg-gray-100 text-orange-900 px-8 py-3 rounded-full font-bold shadow-lg transition transform hover:-translate-y-1">Book a Pooja</Link>
          </div>
        </motion.div>
      </header>

      <section className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 rounded-2xl p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">Maa Bhagawati</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maa Bhagawati, the supreme goddess of power and protection, is worshipped at our sacred temple. 
                  She embodies strength, courage, and divine grace, blessing her devotees with health, prosperity, 
                  and spiritual enlightenment. Her presence symbolizes the triumph of good over evil and the compassion 
                  of the divine mother.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Join thousands of devotees who seek her blessings through daily prayers, offerings, and sacred rituals performed with utmost devotion.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                  <img
                    src="/media/maa-bhagwati.jpeg"
                    alt="Maa Bhagawati idol"
                    className="w-full h-auto object-cover rounded-lg aspect-square"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/400?text=Maa+Bhagawati'}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-orange-900 mb-4">Discover Our Services</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow"
                  >
                    <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-sm`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{feature.desc}</p>
                    <div className="mt-6">
                      <Link to={feature.path} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-800 transition group">
                        Explore {feature.title}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

// Layout for public pages
const PublicLayout = ({ children, isUserAuthenticated, onUserLogout }) => (
  <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
    <Navbar isAuthenticated={isUserAuthenticated} onLogout={onUserLogout} />
    <div className="flex-grow">{children}</div>
    <AIChatbot />
    <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About & Address */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-orange-500" />
              Location
            </h3>
            <p className="mb-2 font-semibold text-gray-200">Maa Bhagawati Dham Seva Trust</p>
            <p className="text-sm leading-relaxed">
              Anapur Sarayan, Tulapatti, Karanda<br />
              Ghazipur, Uttar Pradesh, India - 233224
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-orange-500" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm hover:text-orange-400 transition-colors cursor-pointer">
                <a href="tel:+919838251445" className="flex items-center">
                  <Phone className="w-4 h-4 mr-3" />
                  +91 9838251445
                </a>
              </li>
              <li className="flex items-center text-sm hover:text-orange-400 transition-colors cursor-pointer">
                <a href="mailto:Mbdstrust@gmail.com" className="flex items-center">
                  <Mail className="w-4 h-4 mr-3" />
                  Mbdstrust@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
             <h3 className="text-xl font-bold text-white mb-4 flex items-center">
               <HeartHandshake className="w-5 h-5 mr-2 text-orange-500" />
               Connect With Us
             </h3>
             <p className="text-sm mb-4">Stay updated with our daily events, special poojas, and charitable activities.</p>
             <div className="flex gap-4">
                <Link to="/donate" className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transition transform hover:-translate-y-1">
                  Donate Now
                </Link>
             </div>
          </div>
          
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Temple Trust Website. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
             <Link to="/privacy-policy" className="hover:text-orange-400 cursor-pointer transition-colors">Privacy Policy</Link>
             <Link to="/terms-of-service" className="hover:text-orange-400 cursor-pointer transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

// ProtectedRoute for Users (E-Seva)
const ProtectedUserRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

function App() {
  // STATE TO TRACK IF ADMIN IS LOGGED IN
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // STATE TO TRACK IF NORMAL USER IS LOGGED IN
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  const handleUserLogout = () => {
    setIsUserAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        
        {/* 👇 THE SECURE ADMIN ROUTES 👇 */}
        <Route 
          path="/admin-login" 
          element={<AdminLogin onLogin={setIsAuthenticated} />} 
        />
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? (
              <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/admin-login" replace />
            )
          } 
        />

        {/* 👇 User Authentication Route 👇 */}
        <Route 
          path="/login" 
          element={
            <PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}>
              <UserAuth onLogin={setIsUserAuthenticated} />
            </PublicLayout>
          } 
        />

        {/* 👇 All Public Routes 👇 */}
        <Route path="/" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><HomePage /></PublicLayout>} />
        <Route path="/donate" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><DonationSection /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><AboutUs /></PublicLayout>} />
        <Route path="/charity-work" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><CharityWork /></PublicLayout>} />
        <Route path="/regulations" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><Regulations /></PublicLayout>} />
        <Route path="/live-darshan" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><LiveDarshan /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><Gallery /></PublicLayout>} />
        <Route path="/location" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><LocationMap /></PublicLayout>} />
        <Route path="/privacy-policy" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><PrivacyPolicy /></PublicLayout>} />
        <Route path="/terms-of-service" element={<PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}><TermsOfService /></PublicLayout>} />
        
        {/* 👇 Protected E-Seva Routes 👇 */}
        <Route 
          path="/online-pooja" 
          element={
            <ProtectedUserRoute isAuthenticated={isUserAuthenticated}>
              <PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}>
                <OnlinePooja />
              </PublicLayout>
            </ProtectedUserRoute>
          } 
        />
        <Route 
          path="/personalized-darshan" 
          element={
            <ProtectedUserRoute isAuthenticated={isUserAuthenticated}>
              <PublicLayout isUserAuthenticated={isUserAuthenticated} onUserLogout={handleUserLogout}>
                <PersonalizedDarshan />
              </PublicLayout>
            </ProtectedUserRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;