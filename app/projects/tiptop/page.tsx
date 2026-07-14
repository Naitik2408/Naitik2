import React from 'react';

export default function TipTopProject() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 pt-12 pb-24">
        <div className="flex flex-col md:flex-row gap-16 relative items-start">
          {/* Left Side: Sticky Image (3:4 ratio) */}
          <div className="w-full md:w-5/12 md:sticky md:top-32">
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/project/project1.webp" alt="TipTop" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side: Scrollable Details */}
          <div className="w-full md:w-7/12 space-y-12 pb-24">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">TipTop</h1>
              <div className="flex gap-4">
                <a href="https://thetiptop.in" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#165a4a] text-white font-medium hover:bg-[#104236] transition-colors rounded-sm inline-block">
                  Visit Live Site ↗
                </a>
              </div>
            </div>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">1. The Problem</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                The Tip-Top is a comprehensive, full-stack restaurant management and food delivery solution. Instead of just creating a digital menu, we engineered a system that solves critical operational bottlenecks for the restaurant business—streamlining order management, tracking deliveries in real-time, and providing a powerful admin dashboard to analyze growth and performance.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">2. How We Solved Problems and Bugs</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                A major operational hurdle for restaurants is syncing the kitchen, delivery drivers, and customers seamlessly. To solve this, we implemented a robust real-time bidirectional communication system using WebSockets. 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                We had to handle complex state management across a customized admin dashboard that tracks sales via interactive charts, manages dynamic calendars for reservations, and secures user data with strict authentication layers. Ensuring high availability and secure API endpoints while maintaining a blazing-fast admin interface was paramount to the project's success.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">3. Lessons Learned</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Gained deep insights into managing WebSocket connections at scale and optimizing React renders for real-time dashboards. Architecting the application to handle high-concurrency order placements taught us the importance of reliable message queues and efficient database indexing.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Performance Optimization</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Implemented memoization (useMemo, useCallback) and code-splitting to ensure a blazing-fast admin interface despite heavy charting data. Used database indexing and aggregation pipelines in MongoDB to speed up complex analytical queries for the dashboard.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Technologies Used</h2>
              <ul className="list-disc list-inside text-gray-600 leading-relaxed text-lg space-y-2">
                <li><strong>Frontend:</strong> React 19, Vite, Tailwind CSS v4</li>
                <li><strong>Data & Visualization:</strong> ApexCharts, FullCalendar, React-DnD</li>
                <li><strong>Backend:</strong> Node.js, Express, MongoDB & Mongoose</li>
                <li><strong>Real-time & AI:</strong> Socket.io, Firebase, Anthropic AI SDK</li>
                <li><strong>Security & Auth:</strong> Passport (JWT), Express-Rate-Limit, Helmet</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
