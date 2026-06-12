import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        <div className="bg-orange-600 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-orange-100">Last updated: June 2026</p>
        </div>
        
        <div className="p-8 md:p-12 text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>
              We collect information to provide better services to all our users. The types of personal information we collect include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Information you provide directly to us (e.g., when you register, make a donation, or book a pooja).</li>
              <li>Information collected automatically through your use of the site.</li>
              <li>Details of transactions you carry out through our website and of the fulfillment of your requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, operate, and maintain our website and services.</li>
              <li>Process and complete transactions, and send you related information, including purchase confirmations and invoices.</li>
              <li>Communicate with you regarding updates, offers, and charitable activities.</li>
              <li>Improve, personalize, and expand our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
            <p>
              We do not share your personal information with third parties except as described in this privacy policy. We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 bg-orange-50 p-4 rounded-xl border border-orange-100">
              <p className="font-semibold text-orange-900">Maa Bhagawati Dham Seva Trust</p>
              <p>Email: <a href="mailto:Mbdstrust@gmail.com" className="text-orange-600 hover:underline">Mbdstrust@gmail.com</a></p>
              <p>Phone: +91 9838251445</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
