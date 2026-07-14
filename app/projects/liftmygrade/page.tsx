import React from 'react';

export default function LiftMyGradeProject() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-24">
        <div className="flex flex-col md:flex-row gap-16 relative items-start">
          {/* Left Side: Sticky Image (3:4 ratio) */}
          <div className="w-full md:w-5/12 md:sticky md:top-32">
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/project/project2.webp" alt="LiftMyGrade" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side: Scrollable Details */}
          <div className="w-full md:w-7/12 space-y-12 pb-24">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">LiftMyGrade</h1>
              <div className="flex gap-4">
                <a href="https://liftmygrade.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#165a4a] text-white font-medium hover:bg-[#104236] transition-colors rounded-sm inline-block">
                  Visit Live Site ↗
                </a>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">1. The Problem</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                LiftMyGrade isn't just a standard educational website—it's a targeted solution designed to tackle the real-world problem of student disengagement and falling grades. We focused on building a platform that provides actionable insights, dynamic learning paths, and personalized grade tracking to genuinely boost academic performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">2. How We Solved Problems and Bugs</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The primary challenge was ensuring the interface felt alive and intuitive to keep students engaged rather than overwhelmed. We had to build a fluid, highly responsive user experience with complex data validation running seamlessly under the hood.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Handling robust form validations for student data, orchestrating smooth page transitions to reduce cognitive load, and integrating a reliable email communication system for instant alerts were critical hurdles we overcame to make the platform truly effective.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Lessons Learned</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Learned the intricacies of creating an accessible and highly engaging UI with GSAP and Framer Motion without sacrificing performance. Managing complex form states with React Hook Form and Zod highlighted the importance of robust client-side validation for seamless user experience.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Performance Optimization</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Leveraged Next.js App Router for Server-Side Rendering (SSR) and Static Site Generation (SSG), significantly boosting SEO and initial load times. Optimized animation performance by using hardware-accelerated CSS properties and controlling animation playback based on viewport visibility.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Technologies Used</h2>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed text-lg space-y-2">
                <li><strong>Next.js (App Router)</strong> & <strong>React 19</strong> for blazing fast performance</li>
                <li><strong>Tailwind CSS v4</strong> for responsive, modern styling</li>
                <li><strong>GSAP</strong> & <strong>Framer Motion</strong> for premium, engaging micro-animations</li>
                <li><strong>React Hook Form</strong> & <strong>Zod</strong> for bulletproof data validation</li>
                <li><strong>Resend</strong> for reliable transactional email delivery</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
