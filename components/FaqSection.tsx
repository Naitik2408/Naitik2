'use client';

import React, { useState } from 'react';

const generalFaqs = [
  {
    q: "How do you approach software development?",
    a: "I start by completely ignoring the software and focusing on your business. Once I understand the exact problem you are facing, or the growth you are trying to achieve, I decide what technology (if any) is the best fit to solve it."
  },
  {
    q: "What technologies do you work with?",
    a: "I specialize in React, Next.js, Node.js, TypeScript, Tailwind CSS, and various databases like PostgreSQL and MongoDB."
  },
  {
    q: "Can you build complete web applications?",
    a: "Yes, if a web application is the right solution to your business problem, I can handle both frontend and backend development to deliver a complete, production-ready platform."
  },
  {
    q: "Do you work with backend technologies?",
    a: "Absolutely. I build robust APIs and scalable backend services using Node.js, Express, and integrate with third-party platforms."
  },
  {
    q: "Can you improve existing software?",
    a: "Yes, I can refactor legacy code, improve performance, update user interfaces, and add new features to existing applications."
  },
  {
    q: "Are you available for freelance or full-time opportunities?",
    a: "I am open to discussing both depending on the project scope and my current availability. Please reach out via the contact form."
  }
];

const clientFaqs = [
  {
    q: "What is your pricing structure?",
    a: "I generally work on a project-based or hourly rate depending on the project's complexity and timeline. Let's discuss your requirements to get an accurate estimate."
  },
  {
    q: "How do we communicate during the project?",
    a: "We will have regular check-ins via Google Meet or Zoom, and day-to-day communication can happen over Slack or email."
  },
  {
    q: "Do you provide support after the project is launched?",
    a: "Yes, I offer a standard 30-day bug fix period post-launch, and ongoing maintenance retainers are available if needed."
  },
  {
    q: "What happens if the project scope changes?",
    a: "Scope changes are handled through a change request process where we discuss the impact on timeline and budget before proceeding."
  }
];

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState<'general' | 'clients'>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = activeTab === 'general' ? generalFaqs : clientFaqs;

  return (
    <section id="faq" className="px-8 py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 border-t border-gray-100">
      <div className="flex-1 space-y-6">
        <div className="text-sm font-semibold tracking-wider text-gray-800 uppercase">
          FAQ ↘
        </div>
        <h2 className="text-4xl font-bold leading-tight">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-md">
          Some common questions about my development process, technologies, and collaboration.
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => { setActiveTab('general'); setOpenIndex(null); }}
            className={`px-6 py-3 font-medium transition-colors rounded-sm ${activeTab === 'general' ? 'bg-[#165a4a] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            General
          </button>
          <button 
            onClick={() => { setActiveTab('clients'); setOpenIndex(null); }}
            className={`px-6 py-3 font-medium transition-colors rounded-sm ${activeTab === 'clients' ? 'bg-[#165a4a] text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
          >
            For Clients
          </button>
        </div>

        <div className="pt-8 space-y-6">
          <div>
            <div className="font-bold text-gray-800 mb-2">Give us a call</div>
            <div className="flex items-center gap-2 text-gray-600">
              <span>📞</span> +91 9060557296
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="border-b border-gray-200 cursor-pointer overflow-hidden transition-all duration-300"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center py-5 hover:bg-gray-50 px-2 transition-colors">
              <span className={`font-medium ${openIndex === i ? 'text-[#165a4a]' : 'text-gray-800'}`}>
                {faq.q}
              </span>
              <span className={`text-xl transition-transform duration-300 ${openIndex === i ? 'text-[#165a4a] rotate-45' : 'text-gray-400'}`}>
                +
              </span>
            </div>
            {openIndex === i && (
              <div className="px-2 pb-5 text-gray-600 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
