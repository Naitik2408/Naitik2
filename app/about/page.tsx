import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#f4f4f4] pt-16 pb-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-800 uppercase">
              About Me <span className="text-lg">↘</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#165a4a]">
              Naitik Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Tech Partner & Business Problem Solver
            </h2>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">
              I am a tech partner dedicated to helping businesses overcome challenges and achieve growth. By focusing on your core problems rather than just the code, I turn complex business bottlenecks into streamlined technological solutions.
            </p>
          </div>
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-gray-300 rounded-sm overflow-hidden shadow-2xl relative z-10">
              <img src="/hero1.webp" alt="Naitik Kumar" className="w-full h-full object-cover" />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#d4f64d] z-0 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* Philosophy / Story */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-900 sticky top-32">My Philosophy</h2>
          </div>
          <div className="w-full md:w-2/3 space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
            <p>
              I started my journey developing software simply as digital products. However, I quickly realized a fundamental truth: <strong className="text-gray-900">software is only useful if it actually solves a problem.</strong>
            </p>
            <p>
              Today, my approach has completely shifted. I don't tell clients, <em>"I will build a website for you."</em> Instead, I sit down to understand the core problems of your business. I find the right technological solution to solve that problem—whether that means creating a custom web application, optimizing your existing software, or implementing a new digital strategy. For businesses that are already thriving, my focus shifts to leveraging technology to accelerate your growth even further.
            </p>
            <p className="text-black font-bold text-2xl border-l-4 border-[#165a4a] pl-6 py-2">
              "Technology is just a tool. The real craft is in understanding a business deeply enough to know exactly which tool will help it grow."
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-[#165a4a] text-white py-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold">Technical Arsenal</h2>
            <p className="text-gray-300 text-lg max-w-md">
              I continuously explore new technologies, but I firmly believe in mastering core fundamentals. Here is the tech stack I rely on to build scalable products.
            </p>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-[#d4f64d] font-bold text-xl mb-4">Frontend</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#d4f64d] font-bold text-xl mb-4">Backend</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Node.js & Express</li>
                  <li>PostgreSQL & MongoDB</li>
                  <li>REST APIs & GraphQL</li>
                  <li>Authentication (JWT, OAuth)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#d4f64d] font-bold text-xl mb-4">Tools & DevOps</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Git & GitHub</li>
                  <li>Docker</li>
                  <li>Vercel & AWS</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#d4f64d] font-bold text-xl mb-4">Design</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>Figma</li>
                  <li>UI/UX Principles</li>
                  <li>Responsive Design</li>
                  <li>Wireframing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#d4f64d] py-24 px-8 text-center bg-opacity-90 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to collaborate?</h2>
          <p className="text-gray-700 text-lg">
            I'm always open to discussing product design work or partnership opportunities. Let's build something amazing together.
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:naitikkumar2408@gmail.com" className="px-8 py-4 bg-[#165a4a] text-white font-bold hover:bg-[#104236] transition-colors rounded-sm">
              Email Me
            </a>
            <a href="tel:+919060557296" className="px-8 py-4 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors rounded-sm">
              Call Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
