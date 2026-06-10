import React, { useState } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Namaste! I am your virtual guide. How can I help you with temple timings, pooja bookings, or history?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, { sender: 'user', text: input }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        sender: 'ai', 
        text: "This is an AI response. To make this live, connect this component to your backend AI endpoint." 
      }]);
    }, 1000);
    
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col border border-gray-300">
          <div className="bg-orange-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Temple AI Guide</h3>
            <button onClick={() => setIsOpen(false)} className="font-bold">X</button>
          </div>
          
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 p-2 rounded max-w-[80%] ${msg.sender === 'user' ? 'bg-orange-100 self-end ml-auto' : 'bg-white border'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t flex">
            <input 
              type="text" 
              className="flex-1 border p-2 rounded-l focus:outline-none"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="bg-orange-600 text-white px-4 rounded-r">Send</button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition"
        >
          Ask AI ✨
        </button>
      )}
    </div>
  );
};

export default AIChatbot;