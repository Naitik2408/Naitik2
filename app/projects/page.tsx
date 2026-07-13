import React from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      id: "01",
      name: "TipTop",
      description: "A comprehensive productivity platform designed to help teams organize workflows, track tasks efficiently, and collaborate seamlessly in real-time to achieve their goals.",
      image: "/project/project1.webp",
      link: "/projects/tiptop",
      liveLink: "https://thetiptop.in"
    },
    {
      id: "02",
      name: "LiftMyGrade",
      description: "An educational platform focused on student success, providing personalized learning paths, comprehensive grade tracking, and interactive resources to boost performance.",
      image: "/project/project2.webp",
      link: "/projects/liftmygrade",
      liveLink: "https://liftmygrade.com"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#f4f4f4] pt-16 pb-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-sm font-semibold tracking-wider text-gray-800 uppercase mb-4">
            Our Work ↘
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#165a4a] max-w-3xl">
            Projects
          </h1>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl leading-relaxed">
            A showcase of the business challenges I've solved through technology. Below are some of the key platforms I've developed.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#fafafa] border border-gray-100 rounded-sm overflow-hidden flex flex-col sm:flex-row h-auto group hover:shadow-xl transition-shadow duration-300">
              {/* Left Side: Image */}
              <div className="w-full sm:w-2/5 aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              {/* Right Side: Details */}
              <div className="w-full sm:w-3/5 p-6 flex flex-col justify-center">
                <div>
                  <div className="text-xl font-bold text-[#165a4a] mb-3">{project.id}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-4 items-center pt-4 border-t border-gray-200">
                  <Link href={project.link} className="text-[#165a4a] font-bold border-b-2 border-[#165a4a] pb-0.5 hover:text-[#104236] hover:border-[#104236] transition-colors text-sm">
                    View Case Study
                  </Link>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 text-sm font-medium hover:text-black transition-colors">
                    Live Site ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
