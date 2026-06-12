import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-orange-600 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">Terms and Conditions</h1>
          <p className="text-orange-100">Effective Date: June 2026</p>
        </div>
        
        <div className="p-8 md:p-12 text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of Maa Bhagawati Dham Seva Trust, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Service</h2>
            <p>
              You agree to use our website and services only for lawful purposes. You must not use our site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Donations and Payments</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>All donations made through our website are voluntary and non-refundable.</li>
              <li>When booking an Online Pooja or personalized services, ensure the details provided are accurate. We reserve the right to modify or cancel services if inaccurate information is found.</li>
              <li>Payments are processed securely via third-party gateways. We do not store your credit card information.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              The content on this website, including but not limited to text, graphics, logos, and images, is the property of Maa Bhagawati Dham Seva Trust and is protected by copyright laws. Unauthorized use of this material is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
            <p>
              Maa Bhagawati Dham Seva Trust shall not be liable for any special, direct, indirect, incidental, or consequential damages of any kind, or any damages whatsoever, resulting from the use or inability to use this website or its services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to update or change our Terms and Conditions at any time. Any changes will be posted on this page. Your continued use of the website after any modifications indicates your acceptance of the updated terms.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
