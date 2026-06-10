import React, { useState } from 'react';

// Mock data representing what the Booking System would fetch from the Database
const availablePoojas = [
  { id: 'p1', name: 'Rudrabhishek', price: 1100, duration: '2 Hours' },
  { id: 'p2', name: 'Satyanarayan Katha', price: 501, duration: '1.5 Hours' },
  { id: 'p3', name: 'Special Archana', price: 251, duration: '30 Mins' },
  { id: 'p4', name: 'Navagraha Shanti', price: 2100, duration: '3 Hours' }
];

const OnlinePooja = () => {
  const [step, setStep] = useState(1); // 1: Select, 2: Payment, 3: Confirmation
  const [formData, setFormData] = useState({
    poojaId: '',
    date: '',
    devoteeName: '',
    gotra: '',
    phone: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPooja = availablePoojas.find(p => p.id === formData.poojaId);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Submit Booking Request & Check Availability
  const handleBookingRequest = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulating database availability check (Booking System -> Database)
    setTimeout(() => {
      setIsProcessing(false);
      setStep(2); // Move to Payment Step
    }, 1000);
  };

  // Step 2: Complete Payment
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulating Payment Gateway Success & Saving Booking
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3); // Move to Confirmation Step
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ poojaId: '', date: '', devoteeName: '', gotra: '', phone: '' });
    setStep(1);
  };

  return (
    <section className="py-16 bg-orange-50 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full mx-auto bg-white p-8 rounded-xl shadow-xl border-t-8 border-orange-600">
        
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-2">Temple e-Seva</h2>
        <p className="text-center text-gray-600 mb-8">Book Online Pooja & Personalized Darshan</p>

        {/* --- STEP 1: BOOKING FORM --- */}
        {step === 1 && (
          <form onSubmit={handleBookingRequest} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Select Pooja</label>
              <select 
                name="poojaId" 
                required 
                value={formData.poojaId} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="" disabled>-- Select a Pooja --</option>
                {availablePoojas.map((pooja) => (
                  <option key={pooja.id} value={pooja.id}>
                    {pooja.name} (₹{pooja.price})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Date</label>
              <input 
                type="date" 
                name="date" 
                required 
                value={formData.date} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Devotee Name</label>
                <input 
                  type="text" 
                  name="devoteeName" 
                  required 
                  placeholder="Your full name"
                  value={formData.devoteeName} 
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Gotra (Optional)</label>
                <input 
                  type="text" 
                  name="gotra" 
                  placeholder="E.g., Kashyap"
                  value={formData.gotra} 
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+91"
                value={formData.phone} 
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <button 
              type="submit" 
              disabled={isProcessing}
              className={`w-full py-3 mt-4 rounded-md font-bold text-white transition ${isProcessing ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 shadow-md'}`}
            >
              {isProcessing ? 'Checking Availability...' : 'Proceed to Book'}
            </button>
          </form>
        )}

        {/* --- STEP 2: PAYMENT GATEWAY MOCK --- */}
        {step === 2 && selectedPooja && (
          <div className="text-center animate-fade-in">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm & Pay</h3>
            <div className="bg-orange-100 p-4 rounded-md mb-6 text-left">
              <p className="mb-2"><strong>Pooja:</strong> {selectedPooja.name}</p>
              <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
              <p className="mb-2"><strong>Devotee:</strong> {formData.devoteeName}</p>
              <hr className="my-2 border-orange-200" />
              <p className="text-xl font-extrabold text-orange-800">Total Amount: ₹{selectedPooja.price}</p>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-md font-bold text-orange-600 border border-orange-600 hover:bg-orange-50 transition"
              >
                Back
              </button>
              <button 
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-2/3 py-3 rounded-md font-bold text-white transition ${isProcessing ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 shadow-md'}`}
              >
                {isProcessing ? 'Processing Payment...' : 'Pay Securely'}
              </button>
            </div>
          </div>
        )}

        {/* --- STEP 3: BOOKING CONFIRMATION --- */}
        {step === 3 && (
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-green-600">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">May the divine blessings be with you.</p>
            
            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mb-6 shadow-inner text-sm text-left">
              <p><strong>Booking ID:</strong> TMB-{Math.floor(100000 + Math.random() * 900000)}</p>
              <p><strong>Pooja:</strong> {selectedPooja?.name}</p>
              <p><strong>Date:</strong> {formData.date}</p>
              <p><strong>Status:</strong> Payment Successful</p>
            </div>

            <button 
              onClick={resetForm}
              className="w-full bg-orange-600 text-white py-3 rounded-md font-bold hover:bg-orange-700 transition shadow-md"
            >
              Book Another Pooja
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default OnlinePooja;