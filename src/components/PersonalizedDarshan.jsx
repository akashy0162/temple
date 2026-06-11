import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, User, Phone, FileText, CheckCircle2 } from 'lucide-react';

const PersonalizedDarshan = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    timeSlot: '',
    attendees: '1',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Replace with your Razorpay Payment Page URL for Darshan Booking
  const RAZORPAY_DARSHAN_PAYMENT_URL = "https://pages.razorpay.com/pl_darshan_placeholder";

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app with a backend, you'd create an order first. 
    // Here we redirect to a Razorpay Payment Page to complete the booking.
    window.open(RAZORPAY_DARSHAN_PAYMENT_URL, "_blank");
    
    // Simulate success after returning from payment
    setTimeout(() => {
      setIsSubmitted(true);
    }, 2000);
  };

  const calculateFee = () => {
    if (formData.attendees === 'group') return 'Custom Fee';
    return `₹${parseInt(formData.attendees) * 501}`;
  };

  return (
    <section className="min-h-screen bg-orange-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-orange-900 mb-4 tracking-tight">Personalized Darshan Booking</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book an exclusive time slot for an uninterrupted, deeply spiritual experience at the temple.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          
          {/* Information Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Priority Entry</h4>
                    <p className="text-gray-600 text-sm">Bypass the regular queues for a smooth and peaceful entry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Guided Experience</h4>
                    <p className="text-gray-600 text-sm">A temple guide will assist you throughout the darshan.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Prasadam</h4>
                    <p className="text-gray-600 text-sm">Receive a special prasadam basket at the end of your visit.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-200">
                <p className="text-sm text-orange-800 font-medium">
                  Note: Please arrive 15 minutes before your scheduled time slot. Modest attire is required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500 w-full"></div>
              
              {isSubmitted ? (
                <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you, {formData.fullName}. Your personalized darshan has been scheduled for {formData.date} at {formData.timeSlot}.
                  </p>
                  <p className="text-sm text-gray-500 mb-8">
                    An SMS confirmation has been sent to your registered phone number.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-orange-100 text-orange-700 font-bold rounded-xl hover:bg-orange-200 transition-colors"
                  >
                    Book Another Darshan
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors"
                          placeholder="Shri / Smt."
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors"
                          placeholder="+91"
                        />
                      </div>
                    </div>

                    {/* Number of Attendees */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Attendees</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Users className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          name="attendees"
                          value={formData.attendees}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors appearance-none"
                        >
                          {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                          ))}
                          <option value="group">Group (6+)</option>
                        </select>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Time Slot */}
                    <div className="col-span-1">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          name="timeSlot"
                          required
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a slot</option>
                          <option value="06:00 AM - 08:00 AM">Morning: 06:00 AM - 08:00 AM</option>
                          <option value="09:00 AM - 11:00 AM">Morning: 09:00 AM - 11:00 AM</option>
                          <option value="04:00 PM - 06:00 PM">Evening: 04:00 PM - 06:00 PM</option>
                          <option value="07:00 PM - 09:00 PM">Night: 07:00 PM - 09:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests (Optional)</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <FileText className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          name="specialRequests"
                          rows="3"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          placeholder="Any specific needs or arrangements required..."
                          className="pl-10 w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-xl focus:ring-orange-500 focus:border-orange-500 block p-3 transition-colors"
                        ></textarea>
                      </div>
                    </div>

                  </div>

                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4 px-2 p-3 bg-orange-100 rounded-lg border border-orange-200">
                      <span className="text-gray-800 font-semibold text-lg">Total Booking Fee:</span>
                      <span className="text-2xl font-extrabold text-orange-700">{calculateFee()}</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-md text-lg font-bold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transform transition hover:-translate-y-1"
                    >
                      Proceed to Payment
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      By booking, you agree to follow all temple regulations. Your information is securely stored.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PersonalizedDarshan;