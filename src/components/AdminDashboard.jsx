import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Image as ImageIcon, 
  HeartHandshake, 
  FileText, 
  LogOut,
  UploadCloud,
  CheckCircle,
  AlertCircle,
  Check,
  X,
  Clock,
  MapPin,
  CreditCard,
  Trash2
} from 'lucide-react';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard'); 
  const [bookings, setBookings] = useState([
    { id: 'BKG-8472', name: 'Rahul Sharma', type: 'Rudrabhishek', date: 'Oct 24, 2026', time: '10:00 AM', status: 'Pending', bookedOn: 'Oct 20, 2026, 09:15 AM' },
    { id: 'BKG-8473', name: 'Anjali Verma', type: 'Personalized Darshan', date: 'Oct 25, 2026', time: '04:00 PM', status: 'Pending', bookedOn: 'Oct 21, 2026, 02:30 PM' },
    { id: 'BKG-8474', name: 'Amit Singh', type: 'Maha Aarti', date: 'Oct 26, 2026', time: '06:00 PM', status: 'Approved', bookedOn: 'Oct 22, 2026, 11:45 AM' },
    { id: 'BKG-8475', name: 'Priya Patel', type: 'Vahan Pooja', date: 'Oct 27, 2026', time: '09:00 AM', status: 'Declined', bookedOn: 'Oct 23, 2026, 08:00 AM' },
  ]);

  const [donations, setDonations] = useState([
    { id: 'DON-101', name: 'Sneha Gupta', amount: '₹11,000', location: 'Delhi, India', date: 'Oct 24, 2026', method: 'UPI' },
    { id: 'DON-102', name: 'Ravi Kumar', amount: '₹5,100', location: 'Mumbai, India', date: 'Oct 24, 2026', method: 'Credit Card' },
    { id: 'DON-103', name: 'John Doe', amount: '$500', location: 'New York, USA', date: 'Oct 23, 2026', method: 'PayPal' },
    { id: 'DON-104', name: 'Anonymous', amount: '₹2,100', location: 'Unknown', date: 'Oct 22, 2026', method: 'Net Banking' },
  ]);

  const [mediaList, setMediaList] = useState(() => JSON.parse(localStorage.getItem('templeMedia')) || []);
  const [docList, setDocList] = useState(() => JSON.parse(localStorage.getItem('templeDocs')) || []);

  const handleBookingStatus = (id, newStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const handleDeleteMedia = (id) => {
    const updatedMedia = mediaList.filter(m => m.id !== id);
    setMediaList(updatedMedia);
    localStorage.setItem('templeMedia', JSON.stringify(updatedMedia));
  };

  const handleDeleteDoc = (id) => {
    const updatedDocs = docList.filter(d => d.id !== id);
    setDocList(updatedDocs);
    localStorage.setItem('templeDocs', JSON.stringify(updatedDocs));
  };

  const [uploadStatus, setUploadStatus] = useState('');
  const [mediaTitle, setMediaTitle] = useState('');
  const [mediaCategory, setMediaCategory] = useState('events');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(''); 

  const [docUploadStatus, setDocUploadStatus] = useState('');
  const [docTitle, setDocTitle] = useState('');
  const [selectedDoc, setSelectedDoc] = useState(null);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'bookings', label: 'Manage Bookings', icon: CalendarCheck },
    { id: 'media', label: 'Manage Media', icon: ImageIcon },
    { id: 'donations', label: 'Donations', icon: HeartHandshake },
    { id: 'documents', label: 'Govt. Documents', icon: FileText }
  ];

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

      if (data.secure_url) {
        setUploadedUrl(data.secure_url); 
        
        const existingMedia = JSON.parse(localStorage.getItem('templeMedia')) || [];
        const newMediaItem = {
          id: Date.now(),
          type: selectedFile.type.startsWith('video') ? 'video' : 'photo',
          category: mediaCategory,
          src: data.secure_url,
          alt: mediaTitle || 'Temple Media'
        };
        
        const updatedMedia = [newMediaItem, ...existingMedia];
        localStorage.setItem('templeMedia', JSON.stringify(updatedMedia));
        setMediaList(updatedMedia);

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

  const handleDocChange = (e) => {
    setSelectedDoc(e.target.files[0]);
  };

  const handleDocUpload = async (e) => {
    e.preventDefault();
    if (!selectedDoc) {
      alert("Please select a document first!");
      return;
    }

    setDocUploadStatus('uploading');

    const cloudName = 'dkvwzm8dr'; 
    const uploadPreset = 'temple_uploads'; 

    const formData = new FormData();
    formData.append('file', selectedDoc);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.secure_url) {
        const existingDocs = JSON.parse(localStorage.getItem('templeDocs')) || [];
        const newDocItem = {
          id: Date.now(),
          title: docTitle || selectedDoc.name,
          src: data.secure_url,
          size: (selectedDoc.size / (1024 * 1024)).toFixed(2) + ' MB',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
        };
        
        const updatedDocs = [newDocItem, ...existingDocs];
        localStorage.setItem('templeDocs', JSON.stringify(updatedDocs));
        setDocList(updatedDocs);

        setDocUploadStatus('success');
        setDocTitle('');
        setSelectedDoc(null);
      } else {
        throw new Error("Upload failed");
      }

    } catch (error) {
      console.error("Error uploading document:", error);
      setDocUploadStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans selection:bg-orange-200">
      <aside className="w-64 bg-gray-900 text-white flex-col hidden md:flex shadow-2xl z-10 sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-800 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent"></div>
          <h2 className="text-2xl font-bold text-orange-400 relative z-10">Temple Trust</h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 relative z-10">Admin Control</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? 'bg-gradient-to-r from-orange-600 to-red-500 text-white shadow-lg shadow-orange-900/50' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                {tab.label}
              </button>
            )
          })}
        </nav>
        
        <div className="p-4 border-t border-gray-800 space-y-3">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onLogout} 
            className="w-full flex items-center justify-center bg-gray-800 hover:bg-red-600 text-white py-3 rounded-xl transition-colors font-semibold"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </motion.button>
          <Link to="/" className="w-full flex items-center justify-center border border-gray-700 hover:bg-gray-800 text-gray-300 py-3 rounded-xl transition-colors text-sm font-medium">
            View Public Site
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 capitalize tracking-tight">
              {tabs.find(t => t.id === activeTab)?.label}
            </h1>
            <p className="text-gray-500 mt-1">Manage and monitor temple operations.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-orange-600">A</span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Total Bookings', value: '1,284', icon: CalendarCheck, color: 'text-blue-600', bg: 'bg-blue-100' },
                  { label: 'Donations', value: '₹4,50,000', icon: HeartHandshake, color: 'text-green-600', bg: 'bg-green-100' },
                  { label: 'Media Files', value: mediaList.length.toString(), icon: ImageIcon, color: 'text-purple-600', bg: 'bg-purple-100' },
                  { label: 'Active Users', value: '8,401', icon: LayoutDashboard, color: 'text-orange-600', bg: 'bg-orange-100' },
                ].map((stat, idx) => {
                  const StatIcon = stat.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-4"
                    >
                      <div className={`p-4 rounded-xl ${stat.bg}`}>
                        <StatIcon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-gray-500 font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="space-y-8">
                {/* Upload Form */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 mb-8 border-b pb-4 border-gray-100">
                    <div className="p-3 bg-orange-100 rounded-xl">
                      <UploadCloud className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Upload to Cloudinary</h3>
                  </div>
                  
                  <AnimatePresence>
                    {uploadStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 rounded-xl font-medium flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        Media successfully uploaded and sent to Gallery!
                      </motion.div>
                    )}

                    {uploadStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6 rounded-xl font-medium flex items-center"
                      >
                        <AlertCircle className="w-5 h-5 mr-3 text-red-500" />
                        Upload failed. Check your Cloudinary configuration.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleMediaUpload} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Media Title / Alt Text</label>
                      <input 
                        type="text" 
                        required
                        value={mediaTitle}
                        onChange={(e) => setMediaTitle(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" 
                        placeholder="e.g., Diwali Aarti 2026"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                      <select 
                        value={mediaCategory}
                        onChange={(e) => setMediaCategory(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="events">Events & Festivals</option>
                        <option value="deity">Deity Darshan</option>
                        <option value="architecture">Temple Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Select File (Photo or Video)</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-orange-500 transition group bg-gray-50">
                        <input 
                          type="file" 
                          accept="image/*,video/*"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        />
                        <div className="text-center pointer-events-none">
                          <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-3 group-hover:text-orange-500 transition" />
                          <p className="text-gray-600 font-medium">
                            {selectedFile ? selectedFile.name : "Drag & drop a file here, or click to select"}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">Supports JPG, PNG, MP4</p>
                        </div>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: uploadStatus === 'uploading' ? 1 : 1.02 }}
                      whileTap={{ scale: uploadStatus === 'uploading' ? 1 : 0.98 }}
                      type="submit" 
                      disabled={uploadStatus === 'uploading'}
                      className={`w-full py-4 rounded-xl font-bold text-white transition flex justify-center items-center ${
                        uploadStatus === 'uploading' 
                          ? 'bg-orange-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-orange-500 to-red-600 hover:shadow-lg hover:shadow-orange-200'
                      }`}
                    >
                      {uploadStatus === 'uploading' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading to Cloudinary...
                        </span>
                      ) : 'Upload & Publish to Gallery'}
                    </motion.button>
                  </form>
                </div>

                {/* Uploaded Media Gallery */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                   <h3 className="font-bold text-gray-900 text-2xl mb-6">Uploaded Media Library</h3>
                   {mediaList.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
                        <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">No media uploaded yet.</p>
                      </div>
                   ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <AnimatePresence>
                          {mediaList.map((media) => (
                             <motion.div 
                                key={media.id} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="relative group rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                              >
                                {media.type === 'video' ? (
                                   <video src={media.src} className="w-full h-48 object-cover" muted loop />
                                ) : (
                                   <img src={media.src} alt={media.alt} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                                   <div className="flex justify-end">
                                      <button 
                                        onClick={() => handleDeleteMedia(media.id)}
                                        className="p-2 bg-red-600/90 hover:bg-red-600 text-white rounded-lg backdrop-blur-sm transition-colors"
                                        title="Delete Media"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                   </div>
                                   <div>
                                      <p className="text-white font-bold text-sm truncate drop-shadow-md">{media.alt}</p>
                                      <span className="inline-block bg-orange-600 text-white text-xs px-2 py-0.5 rounded-full uppercase tracking-wider mt-1">{media.category}</span>
                                   </div>
                                </div>
                             </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                   )}
                </div>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-900 text-xl flex items-center">
                    <CalendarCheck className="w-6 h-6 mr-3 text-orange-600" />
                    Recent Booking Requests
                  </h3>
                  <div className="text-sm text-gray-500 font-medium">
                    Showing {bookings.length} bookings
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs font-semibold">
                        <th className="p-4 pl-6">Booking ID</th>
                        <th className="p-4">Devotee Name</th>
                        <th className="p-4">Service Type</th>
                        <th className="p-4">Requested On</th>
                        <th className="p-4">Date & Time</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <AnimatePresence>
                        {bookings.map((booking) => (
                          <motion.tr 
                            key={booking.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="hover:bg-orange-50/50 transition-colors"
                          >
                            <td className="p-4 pl-6 font-medium text-gray-900">{booking.id}</td>
                            <td className="p-4 text-gray-700">{booking.name}</td>
                            <td className="p-4 text-gray-700">{booking.type}</td>
                            <td className="p-4 text-gray-500 text-sm">
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1 text-gray-400" />
                                {booking.bookedOn}
                              </div>
                            </td>
                            <td className="p-4 text-gray-700">
                              <div className="text-sm font-medium">{booking.date}</div>
                              <div className="text-xs text-gray-500">{booking.time}</div>
                            </td>
                            <td className="p-4">
                              <motion.span 
                                key={booking.status}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                                  booking.status === 'Approved' ? 'bg-green-100 text-green-700' :
                                  booking.status === 'Declined' ? 'bg-red-100 text-red-700' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}
                              >
                                {booking.status}
                              </motion.span>
                            </td>
                            <td className="p-4 pr-6 text-right">
                              {booking.status === 'Pending' ? (
                                <div className="flex justify-end space-x-2">
                                  <button 
                                    onClick={() => handleBookingStatus(booking.id, 'Approved')}
                                    className="p-2 bg-green-100 text-green-600 hover:bg-green-500 hover:text-white rounded-lg transition-colors tooltip"
                                    title="Approve"
                                  >
                                    <Check className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => handleBookingStatus(booking.id, 'Declined')}
                                    className="p-2 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                                    title="Decline"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>
                              ) : (
                                <span className="text-sm text-gray-400 italic">Processed</span>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'donations' && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                  <h3 className="font-bold text-gray-900 text-xl flex items-center">
                    <HeartHandshake className="w-6 h-6 mr-3 text-green-600" />
                    Recent Donations
                  </h3>
                  <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full font-bold">
                    Total: ₹4,50,000
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs font-semibold">
                        <th className="p-4 pl-6">Receipt ID</th>
                        <th className="p-4">Donor Name</th>
                        <th className="p-4">Amount</th>
                        <th className="p-4">Location</th>
                        <th className="p-4">Date</th>
                        <th className="p-4 pr-6">Method</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <AnimatePresence>
                        {donations.map((donation) => (
                          <motion.tr 
                            key={donation.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hover:bg-green-50/50 transition-colors"
                          >
                            <td className="p-4 pl-6 font-medium text-gray-900">{donation.id}</td>
                            <td className="p-4 font-bold text-gray-800">{donation.name}</td>
                            <td className="p-4 font-extrabold text-green-700 text-lg">{donation.amount}</td>
                            <td className="p-4 text-gray-500">
                               <div className="flex items-center text-sm">
                                  <MapPin className="w-3 h-3 mr-1" /> {donation.location}
                               </div>
                            </td>
                            <td className="p-4 text-gray-700 text-sm">{donation.date}</td>
                            <td className="p-4 pr-6">
                               <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md inline-flex font-medium">
                                  <CreditCard className="w-3 h-3 mr-1 text-gray-400" /> {donation.method}
                               </div>
                            </td>
                          </motion.tr>
                        ))}
                      </AnimatePresence>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-8">
                {/* Upload Form */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
                  <div className="flex items-center space-x-3 mb-8 border-b pb-4 border-gray-100">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-2xl">Upload Govt. Document</h3>
                  </div>
                  
                  <AnimatePresence>
                    {docUploadStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 rounded-xl font-medium flex items-center"
                      >
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        Document successfully uploaded and published to Regulations!
                      </motion.div>
                    )}

                    {docUploadStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-red-50 border border-red-200 text-red-800 p-4 mb-6 rounded-xl font-medium flex items-center"
                      >
                        <AlertCircle className="w-5 h-5 mr-3 text-red-500" />
                        Upload failed. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleDocUpload} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Document Title</label>
                      <input 
                        type="text" 
                        required
                        value={docTitle}
                        onChange={(e) => setDocTitle(e.target.value)}
                        className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" 
                        placeholder="e.g., Annual Audit Report 2026"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Select File (PDF, DOC)</label>
                      <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition group bg-gray-50">
                        <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleDocChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                        />
                        <div className="text-center pointer-events-none">
                          <UploadCloud className="w-10 h-10 text-gray-400 mx-auto mb-3 group-hover:text-blue-500 transition" />
                          <p className="text-gray-600 font-medium">
                            {selectedDoc ? selectedDoc.name : "Drag & drop a document here, or click to select"}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">Supports PDF, DOC, DOCX</p>
                        </div>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: docUploadStatus === 'uploading' ? 1 : 1.02 }}
                      whileTap={{ scale: docUploadStatus === 'uploading' ? 1 : 0.98 }}
                      type="submit" 
                      disabled={docUploadStatus === 'uploading'}
                      className={`w-full py-4 rounded-xl font-bold text-white transition flex justify-center items-center ${
                        docUploadStatus === 'uploading' 
                          ? 'bg-blue-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:shadow-lg hover:shadow-blue-200'
                      }`}
                    >
                      {docUploadStatus === 'uploading' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Uploading Document...
                        </span>
                      ) : 'Upload & Publish to Regulations'}
                    </motion.button>
                  </form>
                </div>

                {/* Uploaded Documents List */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-5xl mx-auto">
                   <h3 className="font-bold text-gray-900 text-2xl mb-6">Uploaded Documents Library</h3>
                   {docList.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
                        <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">No documents uploaded yet.</p>
                      </div>
                   ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs font-semibold">
                              <th className="p-4 pl-6">Document Title</th>
                              <th className="p-4">Size</th>
                              <th className="p-4">Date Uploaded</th>
                              <th className="p-4 pr-6 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <AnimatePresence>
                              {docList.map((doc) => (
                                <motion.tr 
                                  key={doc.id}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  className="hover:bg-blue-50/50 transition-colors"
                                >
                                  <td className="p-4 pl-6 font-medium text-gray-900 flex items-center">
                                    <FileText className="w-5 h-5 mr-3 text-blue-500" />
                                    {doc.title}
                                  </td>
                                  <td className="p-4 text-gray-700">{doc.size}</td>
                                  <td className="p-4 text-gray-500 text-sm">{doc.date}</td>
                                  <td className="p-4 pr-6 text-right">
                                    <button 
                                      onClick={() => window.open(doc.src, '_blank')}
                                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors mr-2 font-medium"
                                      title="View Document"
                                    >
                                      View
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteDoc(doc.id)}
                                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                                      title="Delete Document"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </td>
                                </motion.tr>
                              ))}
                            </AnimatePresence>
                          </tbody>
                        </table>
                      </div>
                   )}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AdminDashboard;