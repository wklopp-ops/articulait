'use client';

import { useState } from 'react';

export default function ArtisteChat() {
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Hello. I am Artiste. Upload a room and tell me how you want it transformed.' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] }),
    });

    const data = await res.json();
    setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-32 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl">
      <h2 className="text-3xl font-bold text-center mb-8">Talk to Artiste</h2>
      <div className="space-y-4 mb-6">
        {messages.map((m, i) => (
          <div key={i} className={`p-4 rounded-2xl ${m.role === 'assistant' ? 'bg-white dark:bg-black' : 'bg-gray-200 dark:bg-gray-800 ml-auto'}`}>
            {m.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="e.g. Make it coastal with plants..."
        className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700"
      />
    </div>
  );
}
