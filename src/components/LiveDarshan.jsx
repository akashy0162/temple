import React from 'react';

const LiveDarshan = () => {
  return (
    <section className="py-12 bg-orange-50 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-orange-800">Live Darshan</h2>
      <div className="max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-lg">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" 
            title="Live Darshan"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Experience the divine presence from anywhere in the world.</p>
      </div>
    </section>
  );
};

export default LiveDarshan;