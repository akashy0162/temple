import React from 'react';

const FormsTenders = () => {
  const tenders = [
    { id: 'TND-01', title: 'Flower & Garland Vendor Contract (2026-2027)', date: 'Oct 10, 2026', status: 'Open' },
    { id: 'TND-02', title: 'Prasad Distribution Supplies', date: 'Oct 15, 2026', status: 'Open' },
    { id: 'TND-03', title: 'Temple Security Services', date: 'Sep 01, 2026', status: 'Closed' },
  ];

  const forms = [
    { title: 'Temple Renovation Contribution Form', size: '1.2 MB' },
    { title: 'Volunteer Registration Form (Sevadar)', size: '840 KB' },
    { title: 'Vendor Registration Form', size: '2.1 MB' },
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Forms & Tenders</h2>
          <p className="text-gray-600">Official documents, vendor applications, and renovation notices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tenders Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📢</span> Active Tenders
            </h3>
            <div className="space-y-4">
              {tenders.map((tender) => (
                <div key={tender.id} className="border border-gray-200 p-4 rounded-lg hover:shadow-sm transition">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800 text-sm">{tender.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded font-bold ${tender.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {tender.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>Ref: {tender.id} | Due: {tender.date}</span>
                    <button className="text-orange-600 font-bold hover:underline">View PDF</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Downloadable Forms Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📄</span> Public Forms
            </h3>
            <div className="space-y-4">
              {forms.map((form, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <span className="text-2xl text-red-500 mr-3">📥</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{form.title}</p>
                      <p className="text-xs text-gray-500">PDF Document • {form.size}</p>
                    </div>
                  </div>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-bold transition">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FormsTenders;