import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // SIMULATING THE DATABASE VERIFICATION
    // In real life, this sends data to your backend API
    setTimeout(() => {
      // Hardcoded mock credentials for testing: admin / admin123
      if (credentials.username === 'AkashYadav' && credentials.password === 'Akash@9616') {
        onLogin(true); // Tell the app we are authenticated
        navigate('/admin'); // Push to the dashboard
      } else {
        setError('Invalid username or password. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border-t-8 border-orange-600 animate-fade-in">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Temple Trust</h2>
          <p className="text-sm text-gray-500">Secure Admin Portal</p>
        </div>

        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Username</label>
            <input 
              type="text" 
              name="username"
              required
              value={credentials.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              name="password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-3 rounded text-white font-bold transition shadow-md ${isLoading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'}`}
          >
            {isLoading ? 'Verifying Credentials...' : 'Secure Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-sm text-gray-500 hover:text-orange-600 transition"
          >
            ← Back to Public Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;