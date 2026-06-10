import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('media'); 
  const [bookings, setBookings] = useState([
    { id: 'TMB-8472', name: 'Rahul Sharma', type: 'Rudrabhishek', date: 'Oct 24, 2026', status: 'Pending' },
  ]);

  const [uploadStatus, setUploadStatus] = useState('');
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaCategory, setMediaCategory] = useState('events'); // New category state
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(''); 

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleMediaUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    setUploadStatus('uploading');

    // 👇 YOUR CLOUDINARY CREDENTIALS 👇
    const cloudName = 'dkvwzm8dr'; 
    const uploadPreset = 'temple_uploads'; 

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log("Cloudinary Response:", data);

      if (data.secure_url) {
        setUploadedUrl(data.secure_url); 
        
        // 👇 NEW: SIMULATE A DATABASE WITH LOCAL STORAGE 👇
        const existingMedia = JSON.parse(localStorage.getItem('templeMedia')) || [];
        const newMediaItem = {
          id: Date.now(), // Generate a unique ID
          type: selectedFile.type.startsWith('video') ? 'video' : 'photo',
          category: mediaCategory,
          src: data.secure_url,
          alt: mediaTitle || 'Temple Media'
        };
        
        localStorage.setItem('templeMedia', JSON.stringify([newMediaItem, ...existingMedia]));
        // 👆 ------------------------------------------ 👆

        setUploadStatus('success');
        setMediaTitle('');
        setSelectedFile(null);
      } else {
        throw new Error("Upload failed");
      }

    } catch (error) {
      console.error("Error uploading:", error);
      setUploadStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-900 text-white flex flex-col hidden md:flex shadow-xl z-10">
        <div className="p-6 border-b border-gray-700 text-center">
          <h2 className="text-xl font-bold text-orange-400">Temple Trust</h2>
          <p className="text-sm text-gray-400">Admin Control Room</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {['dashboard', 'bookings', 'media', 'donations', 'documents'].map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-md transition font-medium capitalize ${
                activeTab === tab ? 'bg-orange-600 text-white shadow-md' : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {tab === 'dashboard' && '📊 '}
              {tab === 'bookings' && '🙏 Manage '}
              {tab === 'media' && '📸 Upload '}
              {tab === 'donations' && '💰 '}
              {tab === 'documents' && '📄 Govt. '}
              {tab}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700 space-y-2">
          <button onClick={onLogout} className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded transition font-bold shadow-sm">
            Log Out
          </button>
          <Link to="/" className="w-full block text-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded transition text-sm">
            View Public Site
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab.replace('-', ' ')}</h1>
        </header>

        {activeTab === 'media' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto animate-fade-in">
            <h3 className="font-bold text-gray-800 text-xl mb-6 border-b pb-4">Upload to Cloudinary</h3>
            
            {uploadStatus === 'success' && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded font-medium">
                <p>Media successfully uploaded and sent to Gallery!</p>
              </div>
            )}

            {uploadStatus === 'error' && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded font-medium">
                Upload failed. Check your Cloudinary Cloud Name and Upload Preset.
              </div>
            )}

            <form onSubmit={handleMediaUpload} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Media Title / Alt Text</label>
                <input 
                  type="text" 
                  required
                  value={mediaTitle}
                  onChange={(e) => setMediaTitle(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" 
                  placeholder="e.g., Diwali Aarti"
                />
              </div>

              {/* 👇 NEW: Category Selector so Gallery filters work 👇 */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                <select 
                  value={mediaCategory}
                  onChange={(e) => setMediaCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
                >
                  <option value="events">Events & Festivals</option>
                  <option value="deity">Deity Darshan</option>
                  <option value="architecture">Temple Architecture</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Select File (Photo or Video)</label>
                <input 
                  type="file" 
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 bg-gray-50" 
                />
              </div>

              <button 
                type="submit" 
                disabled={uploadStatus === 'uploading'}
                className={`w-full py-3 mt-4 rounded-md font-bold text-white transition ${uploadStatus === 'uploading' ? 'bg-orange-400 cursor-wait' : 'bg-orange-600 hover:bg-orange-700'}`}
              >
                {uploadStatus === 'uploading' ? 'Uploading to Cloudinary...' : 'Upload & Publish'}
              </button>
            </form>
          </div>
        )}

        {activeTab !== 'media' && (
           <div className="text-center text-gray-500 py-20">
              <span className="text-4xl mb-4 block">🚧</span>
              <h3 className="text-xl font-bold mb-2">Under Construction</h3>
           </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;