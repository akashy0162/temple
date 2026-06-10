import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-orange-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-yellow-300 transition">
          Shri Maa Bhagwati Dham Seva Trust
        </Link>
        
        <ul className="flex space-x-6 items-center">
          
          {/* 👇 UPDATED: About Us Link 👇 */}
          <li className="py-2">
            <Link to="/about" className="hover:text-yellow-300 font-medium">
              About Us
            </Link>
          </li>

          {/* Regulations Dropdown */}
          <li className="relative group cursor-pointer py-2">
            <span className="hover:text-yellow-300 font-medium">Regulations ▾</span>
            <div className="absolute left-0 top-full mt-0 w-56 bg-white text-gray-800 shadow-xl rounded-b-md hidden group-hover:block z-50 border-t-4 border-orange-500">
              <ul className="flex flex-col py-2">
                {/* 👇 UPDATED LINK 👇 */}
                <li className="hover:bg-orange-100 block">
                  <Link to="/regulations" className="px-4 py-2 block w-full">Govt. Documents</Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="py-2">
            <Link to="/live-darshan" className="hover:text-yellow-300 font-medium">Live Darshan</Link>
          </li>
          
          <li className="py-2">
            <Link to="/gallery" className="hover:text-yellow-300 font-medium">Gallery</Link>
          </li>

          {/* 👇 UPDATED: Forms & Tenders Link 👇 */}
          <li className="py-2">
            <Link to="/forms-tenders" className="hover:text-yellow-300 font-medium">
              Forms & Tenders
            </Link>
          </li>

          <li className="py-2">
            <Link to="/location" className="hover:text-yellow-300 font-medium">Location Map</Link>
          </li>

          {/* Temple e-Seva Dropdown */}
          <li className="relative group cursor-pointer py-2">
            <span className="hover:text-yellow-300 font-medium">Temple e-Seva ▾</span>
            <div className="absolute left-0 top-full mt-0 w-64 bg-white text-gray-800 shadow-xl rounded-b-md hidden group-hover:block z-50 border-t-4 border-orange-500">
              <ul className="flex flex-col py-2">
                <li className="hover:bg-orange-100 block">
                  <Link to="/online-pooja" className="px-4 py-2 block w-full">Online Pooja Booking</Link>
                </li>
                <li className="hover:bg-orange-100 block border-t">
                  <Link to="/personalized-darshan" className="px-4 py-2 block w-full">Personalized Darshan Booking</Link>
                </li>
              </ul>
            </div>
          </li>

          <Link to="/donate">
            <li className="bg-yellow-500 text-orange-900 px-5 py-2 rounded-md font-bold cursor-pointer hover:bg-yellow-400 shadow-sm transition transform hover:scale-105">
              Donate
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;