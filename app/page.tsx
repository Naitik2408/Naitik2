import React from 'react';
import Link from 'next/link';
import { Button } from '../components/Button';
import FaqSection from '../components/FaqSection';

export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section className="bg-[#f4f4f4]">
        <div className="px-8 py-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-800">
              Software Developer <span className="text-lg">↘</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Solving Business Problems Through Technology.
            </h1>
            <p className="text-gray-600 text-lg max-w-lg">
              I don't just build websites or write code—I solve business problems. Whether you need to overcome a specific operational hurdle or accelerate a successful business, my goal is to understand your unique challenges and deliver the right tech solutions to help you grow.
            </p>
            <div className="flex gap-4">
              <a href="/resume.pdf" download="Naitik_Kumar_CV.pdf" className="px-6 py-3 font-medium transition-colors duration-200 flex items-center justify-center text-center bg-[#165a4a] text-white hover:bg-[#104236]">
                Resume ↘
              </a>
              <Button href="#projects" variant="secondary">View Projects</Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full h-[530px] rounded-sm">
              <img src="/hero1.webp" alt="Hero" className="w-full h-full object-cover" />
            </div>
            <div className="relative mt-8 md:mt-0 md:absolute md:-bottom-8 left-0 right-0 grid grid-cols-2 md:flex px-0 md:px-8 gap-4">
              <div className="flex-1 bg-[#d4f64d] p-6 shadow-lg">
                <div className="text-4xl font-bold">08<span className="text-3xl">+</span></div>
                <div className="text-sm font-medium mt-1">Projects Built</div>
              </div>
              <div className="flex-1 bg-[#165a4a] text-white p-6 shadow-lg">
                <div className="text-4xl font-bold">15<span className="text-3xl">+</span></div>
                <div className="text-sm font-medium mt-1 text-gray-200">Technologies</div>
              </div>
              <div className="col-span-2 md:col-auto flex-1 bg-white p-6 shadow-lg">
                <div className="text-4xl font-bold">05<span className="text-3xl">+</span></div>
                <div className="text-sm font-medium mt-1 text-gray-600">Products Designed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="px-8 py-24 max-w-7xl mx-auto mt-16">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1 space-y-6">
            <div className="text-sm font-semibold tracking-wider text-gray-800 uppercase">
              About Me ↘
            </div>
            <h2 className="text-4xl font-bold">Building Better Software Through Design And Development</h2>
            <p className="text-gray-500">
              I'm Naitik Kumar, a Software Developer focused on creating scalable web applications, intuitive user experiences, and modern digital products. I started out building software just as a product, but I realized technology is only useful when it solves real problems. Today, I focus on turning ideas into practical solutions that businesses actually use to scale and overcome challenges.
            </p>
            <Button href="/about">Learn More</Button>
          </div>
          <div className="flex-1 text-2xl leading-relaxed text-gray-400 font-medium">
            From planning product architecture to developing responsive interfaces and integrating backend services, <span className="text-black font-semibold">I enjoy building complete solutions while continuously learning new technologies and improving my development workflow.</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-24 px-2 md:px-12 border-t pt-16 gap-2 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-gray-800">20<span className="text-2xl md:text-4xl text-gray-500">K+</span></div>
            <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 font-medium">Lines of Code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-gray-800">100<span className="text-2xl md:text-4xl text-gray-500">%</span></div>
            <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 font-medium">Project Completion</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-gray-800">04<span className="text-2xl md:text-4xl text-gray-500">+</span></div>
            <div className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 font-medium">Years Learning</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="projects" className="bg-[#165a4a] text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="text-sm font-semibold tracking-wider text-gray-300 uppercase">
                What I Build ↘
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Solving Problems & Driving Growth</h2>
              <p className="text-gray-300 max-w-xl">
                Instead of just selling you a website or an app, I focus on understanding your business goals. Whether it's through custom software, web platforms, or digital marketing integration, I provide the exact technological tools you need to grow.
              </p>
            </div>
            <Button href="/projects" variant="accent">View All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-[#fafafa] text-black flex flex-row h-auto group overflow-hidden">
              <div className="w-2/5 md:w-1/2 bg-gray-300 aspect-[3/4] overflow-hidden">
                <img src="/project/project1.webp" alt="TipTop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-3/5 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                <div>
                  <div className="text-lg md:text-2xl font-bold text-[#165a4a] mb-2 md:mb-6">01</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">TipTop</h3>
                  <p className="text-gray-500 text-xs md:text-sm">A comprehensive productivity platform designed to help teams organize workflows, track tasks efficiently, and collaborate seamlessly in real-time to achieve their goals.</p>
                </div>
                <div className="flex gap-4 items-center mt-4 pt-4 border-t border-gray-200">
                  <Link href="/projects/tiptop" className="text-[#165a4a] font-medium border-b border-[#165a4a] pb-1 text-xs md:text-base hover:text-[#104236] hover:border-[#104236] transition-colors">Learn more</Link>
                  <a href="https://thetiptop.in" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-medium hover:text-black text-xs md:text-sm transition-colors">Live Link ↗</a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fafafa] text-black flex flex-row h-auto group overflow-hidden">
              <div className="w-2/5 md:w-1/2 bg-gray-300 aspect-[3/4] overflow-hidden">
                <img src="/project/project2.webp" alt="LiftMyGrade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-3/5 md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
                <div>
                  <div className="text-lg md:text-2xl font-bold text-[#165a4a] mb-2 md:mb-6">02</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">LiftMyGrade</h3>
                  <p className="text-gray-500 text-xs md:text-sm">An educational platform focused on student success, providing personalized learning paths, comprehensive grade tracking, and interactive resources to boost performance.</p>
                </div>
                <div className="flex gap-4 items-center mt-4 pt-4 border-t border-gray-200">
                  <Link href="/projects/liftmygrade" className="text-[#165a4a] font-medium border-b border-[#165a4a] pb-1 text-xs md:text-base hover:text-[#104236] hover:border-[#104236] transition-colors">Learn more</Link>
                  <a href="https://liftmygrade.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 font-medium hover:text-black text-xs md:text-sm transition-colors">Live Link ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishment / Journey */}
      <section className="px-8 py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative items-start">
        <div className="flex-1 space-y-4 md:sticky md:top-32">
          <div className="text-sm font-semibold tracking-wider text-gray-800 uppercase">
            Journey ↘
          </div>
          <h2 className="text-4xl font-bold">The Journey Of Becoming A Software Developer</h2>
          <p className="text-gray-500 max-w-md">
            Every project has helped me strengthen my technical skills, product thinking, software architecture knowledge, and development process.
          </p>
        </div>
        <div className="flex-1 relative pb-24 space-y-12">
          <div className="sticky top-8 md:top-32 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm origin-top">
            <div className="text-3xl font-bold text-[#165a4a] mb-2">2022</div>
            <h3 className="text-xl font-semibold text-[#165a4a] mb-4">Started Learning Web Development</h3>
            <img src="/journey/2022.webp" alt="2022" className="w-full aspect-[16/9] object-cover mt-4 rounded-lg" />
          </div>
          <div className="sticky top-12 md:top-[140px] bg-white border border-gray-100 rounded-2xl p-8 shadow-md origin-top">
            <div className="text-3xl font-bold text-[#165a4a] mb-2">2023</div>
            <h3 className="text-xl font-semibold text-[#165a4a] mb-4">Built Real Software Projects</h3>
            <img src="/journey/2023.webp" alt="2023" className="w-full aspect-[16/9] object-cover mt-4 rounded-lg" />
            {/* <p className="text-gray-500 text-sm mt-4">
              Focused on JavaScript, React, APIs, databases, Git, responsive development, and deployment.
            </p> */}
          </div>
          <div className="sticky top-16 md:top-[152px] bg-white border border-gray-100 rounded-2xl p-8 shadow-lg origin-top">
            <div className="text-3xl font-bold text-[#165a4a] mb-2">2025</div>
            <h3 className="text-xl font-semibold text-[#165a4a] mb-4">Delivering Business Solutions</h3>
            <img src="/journey/2025.webp" alt="2024" className="w-full h-64 object-cover mt-4 rounded-lg" />
            {/* <p className="text-gray-500 text-sm mt-4">
              Worked on products like Klarone and LiftMyGrade while improving software architecture, UI systems, authentication, and scalable development.
            </p> */}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection />

      {/* Testimonial */}
      <section className="bg-[#f8f8f8]">
        <div className="px-8 py-24 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3 space-y-6 relative md:border-r-2 md:border-b-0 border-b-2 border-gray-200 pb-8 md:pb-0 md:pr-8">
            <div className="absolute right-[-2px] top-0 h-16 w-[2px] bg-[#d4f64d]"></div>
            <div className="text-sm font-semibold tracking-wider text-gray-800 uppercase">
              Testimonial ↘
            </div>
            <h2 className="text-4xl font-bold">What People Say</h2>
            <p className="text-gray-500">
              Feedback from people I've collaborated with on software projects, websites, and product development.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="w-12 h-12 bg-[#165a4a] text-white flex items-center justify-center hover:bg-[#104236]">↑</button>
              <button className="w-12 h-12 bg-[#165a4a] text-white flex items-center justify-center hover:bg-[#104236]">↓</button>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-8">
            {/* Review 1 */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div>
                    <h4 className="font-bold text-lg">Md Shabbir</h4>
                    <p className="text-sm text-gray-500">Founder, TipTop</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">12 March 2024</span>
              </div>
              <p className="text-gray-400 italic">
                "Working with Naitik was an absolute pleasure. He took our vision for TipTop and turned it into a robust, scalable productivity platform. His attention to detail, strong architectural decisions, and technical expertise truly set him apart."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div>
                    <h4 className="font-bold text-lg">Sudakshina Dhar</h4>
                    <p className="text-sm text-gray-500">Founder, LiftMyGrade</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">05 May 2024</span>
              </div>
              <p className="text-gray-400 italic">
                "I was extremely impressed by the dedication and skill brought to the LiftMyGrade project. The educational platform built for us is intuitive, fast, and has already received wonderful feedback from our students. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-[#d4f64d] py-32 px-8 text-center bg-opacity-90 relative overflow-hidden">
        {/* Subtle dot pattern background placeholder */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Let's Solve Your Business Challenges Together</h2>
          <p className="text-gray-700 text-lg">
            Whether you are looking to overcome operational hurdles or you want to scale an already thriving business, let's discuss how the right technology can fuel your growth.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <a href="mailto:naitikkumar2408@gmail.com" className="px-8 py-4 bg-[#165a4a] text-white font-bold hover:bg-[#104236] transition-colors rounded-sm inline-block shadow-sm">
              Email: naitikkumar2408@gmail.com
            </a>
            <a href="tel:+919060557296" className="px-8 py-4 bg-white text-gray-900 font-bold hover:bg-gray-50 transition-colors rounded-sm inline-block border border-gray-200 shadow-sm">
              Call: +91 9060557296
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
