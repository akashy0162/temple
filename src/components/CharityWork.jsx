import React from 'react';

const CharityWork = () => {
  const charityWorks = [
    {
      title: 'Free Medical Camp',
      description: 'Organized a week-long medical camp providing free checkups, medicines, and specialist consultations to over 1,200 villagers.',
    },
    {
      title: 'School Support Program',
      description: 'Supplied books, uniforms, and midday meals to local children while renovating two classrooms at the village school.',
    },
    {
      title: 'Food Distribution Drive',
      description: 'Distributed nutritious meals and winter clothing to elderly families and daily wage workers in nearby communities.',
    },
  ];

  const galleryItems = [
    { id: 'gallery-01', label: 'Community Medical Camp', src: 'https://via.placeholder.com/600x400?text=Medical+Camp' },
    { id: 'gallery-02', label: 'School Renovation', src: 'https://via.placeholder.com/600x400?text=School+Renovation' },
    { id: 'gallery-03', label: 'Food Distribution', src: 'https://via.placeholder.com/600x400?text=Food+Distribution' },
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-orange-800 mb-2">Charity Work & Trust Impact</h2>
          <p className="text-gray-600">Community service initiatives, gallery highlights, and future plans of the trust.</p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Done by the Trust</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {charityWorks.map((work) => (
                <div key={work.title} className="rounded-3xl border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-orange-700 mb-3">{work.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{work.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Photo & Video Gallery</h3>
                <p className="text-gray-600 mt-2">A visual story of our outreach programs, celebrations, and community support.</p>
              </div>
              <div className="inline-flex rounded-full bg-orange-50 text-orange-700 px-4 py-2 text-sm font-semibold">
                Featured video
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {galleryItems.map((item) => (
                <div key={item.id} className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100">
                  <img src={item.src} alt={item.label} className="h-48 w-full object-cover" />
                  <div className="p-4">
                    <p className="font-semibold text-gray-800">{item.label}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-3xl border border-gray-200 bg-black text-white overflow-hidden relative h-48">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/600x400?text=Video+Gallery)' }} />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-orange-400/30 hover:bg-orange-600 transition">
                    ▶ Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Future Plans</h3>
            <div className="space-y-4 text-gray-600">
              <p>1. Expand free healthcare camps with specialist services and mobile medical units for rural areas.</p>
              <p>2. Establish a community learning center for vocational training, digital literacy, and women empowerment.</p>
              <p>3. Launch a sustainable food program to support underprivileged families through monthly care packages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharityWork;