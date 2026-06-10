import React, { useState, useEffect } from 'react';

const Regulations = () => {
  // Static mock documents
  const staticDocuments = [
    { id: 'S1', title: 'Shri Bhagwati Dham Seva Trust Act, 1950', size: '2.4 MB', date: 'Jan 12, 2026' },
    { id: 'S2', title: 'Board of Trustees Official Registry', size: '1.1 MB', date: 'Mar 05, 2026' },
    { id: 'S3', title: 'Section 80G Tax Exemption Certificate', size: '850 KB', date: 'Apr 20, 2026' },
    { id: 'S4', title: 'Annual Audit Report (2025-2026)', size: '3.2 MB', date: 'May 10, 2026' },
    { id: 'S5', title: 'Guidelines for Temple Renovation Projects', size: '1.8 MB', date: 'Jun 01, 2026' }
  ];

  const [documents, setDocuments] = useState(staticDocuments);

  useEffect(() => {
    const uploadedDocs = JSON.parse(localStorage.getItem('templeDocs')) || [];
    setDocuments([...uploadedDocs, ...staticDocuments]);
  }, []);

  const handleDownload = (doc) => {
    if (doc.src) {
      window.open(doc.src, '_blank');
    } else {
      alert("This is a mock document and cannot be downloaded.");
    }
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-orange-800 mb-4">Acts & Regulations</h2>
          <p className="text-gray-600">Official government documents, certificates, and compliance reports of the Trust.</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 bg-gray-100 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Public Documents</h3>
            <span className="text-sm text-gray-500 font-medium bg-white px-3 py-1 rounded-full border border-gray-200">
              {documents.length} Files
            </span>
          </div>

          <div className="divide-y divide-gray-200">
            {documents.map((doc) => (
              <div key={doc.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-white transition duration-150 group">
                
                <div className="flex items-start mb-4 sm:mb-0">
                  <span className="text-3xl mr-4 mt-1" role="img" aria-label="PDF Document">📄</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg group-hover:text-orange-600 transition">{doc.title}</h4>
                    <p className="text-sm text-gray-500 mt-1 font-medium">
                      PDF • {doc.size} • Last Updated: {doc.date}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => handleDownload(doc)}
                  className="flex-shrink-0 bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold py-2 px-6 rounded-md transition shadow-sm border border-orange-200"
                >
                  {doc.src ? "View PDF" : "Download"}
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Regulations;