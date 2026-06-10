import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // 👇 Updated Import

const DonationSection = () => {
  const handleRazorpayClick = () => {
    alert("Initiating Razorpay gateway...");
  };

  const upiString = "upi://pay?pa=QR919838251445-0174@unionbankofindia&pn=MAA%20BHAGWATI%20DHAM%20SEVA%20TRUST&cu=INR";

  return (
    <section className="py-12 container mx-auto text-center animate-fade-in">
      <h2 className="text-3xl font-semibold mb-8 text-orange-800">Contribute to the Trust</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        
        {/* QR Code Donation */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-bold mb-4">Scan QR to Donate</h3>
          
          <div className="w-48 h-48 mx-auto mb-4 flex items-center justify-center p-3 border-2 border-dashed border-gray-300 rounded bg-white">
            {/* 👇 Updated Component 👇 */}
            <QRCodeSVG 
              value={upiString} 
              size={160} 
              level="M"  
            />
          </div>
          
          <p className="text-sm text-gray-800 font-bold mb-1">MAA BHAGWATI DHAM SEVA TRUST</p>
          <p className="text-xs text-gray-500 mb-3 break-all px-4">QR919838251445-0174@unionbankofindia</p>
          <p className="text-sm text-orange-600 font-semibold bg-orange-50 py-1 rounded">UPI Accepted: GPay, PhonePe, Paytm</p>
        </div>

        {/* Razorpay Integration */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full md:w-1/3 h-full flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">Online Payment</h3>
          <p className="mb-6 text-gray-600">Use credit card, debit card, or net banking securely via Razorpay.</p>
          <button 
            onClick={handleRazorpayClick}
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition shadow-md"
          >
            Donate via Razorpay
          </button>
        </div>

      </div>
    </section>
  );
};

export default DonationSection;