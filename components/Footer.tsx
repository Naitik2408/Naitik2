import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#165a4a] text-white py-20 px-8 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16 border-b border-[#216d5b] pb-16">
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-white">Homepage</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link href="/#projects" className="hover:text-white">How I Help</Link></li>
              <li><Link href="/#contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-6">Projects</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><Link href="/projects" className="hover:text-white">Overview</Link></li>
              <li><Link href="/projects/tiptop" className="hover:text-white">TipTop</Link></li>
              <li><Link href="/projects/liftmygrade" className="hover:text-white">LiftMyGrade</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><Link href="/#contact" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="mailto:hello@nijaworks.com" className="hover:text-white">naitikkumar2408@gmail.com</a></li>
              <li><a href="tel:+62081227182500" className="hover:text-white">+91 9060557296</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#216d5b] pb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="Naitik Logo" className="w-10 h-10 object-contain rounded-sm" />
              <span className="text-3xl font-bold">Naitik</span>
            </div>
            <div>
              <p className="font-bold mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#165a4a]">in</a>
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#165a4a]">X</a>
                <a href="#" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#165a4a]">f</a>
              </div>
            </div>
          </div>
          
          <div className="max-w-md space-y-4">
            <h3 className="text-2xl font-bold">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Stay updated with my latest software projects, development journey, technical articles, and product updates.</p>
            <div className="flex bg-[#104b3a] p-1 h-14">
              <input type="email" placeholder="Your Email" className="bg-transparent flex-1 px-4 text-white outline-none placeholder-gray-400" />
              <button className="bg-[#d4f64d] text-black font-medium px-8 h-full">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
