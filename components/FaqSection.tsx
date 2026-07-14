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
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <span>📞</span> +91 9060557296
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#165a4a] transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#165a4a] transition-colors" aria-label="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
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
