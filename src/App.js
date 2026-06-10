import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import LiveDarshan from './components/LiveDarshan';
import DonationSection from './components/DonationSection';
import OnlinePooja from './components/OnlinePooja';
import PersonalizedDarshan from './components/PersonalizedDarshan'; 
import Gallery from './components/Gallery';
import LocationMap from './components/LocationMap'; 
import AIChatbot from './components/AIChatbot';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin'; // <-- ADD THIS IMPORT
import FormsTenders from './components/FormsTenders'; // ADD THIS
import AboutUs from './components/AboutUs';           // ADD THIS
import Regulations from './components/Regulations';
// HomePage Component
const HomePage = () => {
  return (
    <>
      <header className="bg-cover bg-center h-96 flex items-center justify-center relative shadow-inner" style={{backgroundImage: "url('/media/main-temple.jpeg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white p-4">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Shri Maa Bhagwati Dham</h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md">Experience peace, devotion, and community.</p>
        </div>
      </header>
      <main className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-orange-800 mb-4">Divine Blessings</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Explore our temple's rich history, book a personalized pooja, or join us for daily live darshan.</p>
      </main>
    </>
  );
};

// Layout for public pages
const PublicLayout = ({ children }) => (
  <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
    <Navbar />
    <div className="flex-grow">{children}</div>
    <AIChatbot />
    <footer className="bg-gray-800 text-white text-center p-6 mt-auto">
      <p>© 2026 Temple Trust Website. All rights reserved.</p>
    </footer>
  </div>
);

function App() {
  // STATE TO TRACK IF ADMIN IS LOGGED IN
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        
        {/* 👇 THE SECURE ADMIN ROUTES 👇 */}
        {/* 1. The Login Page */}
        <Route 
          path="/admin-login" 
          element={<AdminLogin onLogin={setIsAuthenticated} />} 
        />
        
        {/* 2. The Protected Dashboard */}
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? (
              <AdminDashboard onLogout={() => setIsAuthenticated(false)} />
            ) : (
              <Navigate to="/admin-login" replace /> // Kick them to login if not authenticated
            )
          } 
        />

        {/* 👇 All Public Routes 👇 */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/donate" element={<PublicLayout><DonationSection /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutUs /></PublicLayout>} />
        <Route path="/forms-tenders" element={<PublicLayout><FormsTenders /></PublicLayout>} />
        <Route path="/regulations" element={<PublicLayout><Regulations /></PublicLayout>} />
        <Route path="/live-darshan" element={<PublicLayout><LiveDarshan /></PublicLayout>} />
        <Route path="/online-pooja" element={<PublicLayout><OnlinePooja /></PublicLayout>} />
        <Route path="/personalized-darshan" element={<PublicLayout><PersonalizedDarshan /></PublicLayout>} />
        <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
        <Route path="/location" element={<PublicLayout><LocationMap /></PublicLayout>} />
      </Routes>
    </Router>
  );
}
export default App;