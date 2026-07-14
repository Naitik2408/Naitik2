'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 z-50">
          <img src="/icon.png" alt="Naitik Logo" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-bold text-[#165a4a]">Naitik</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-black transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-black transition-colors">About Me</Link>
          <Link href="/#projects" className="hover:text-black transition-colors">What I Build</Link>
        </div>
        <div className="hidden md:block z-50">
          <Button href="/#contact">Contact Us</Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-gray-100 bg-white absolute w-full left-0 z-40 shadow-xl animate-in slide-in-from-top-2 duration-300">
          <Link href="/" className="text-gray-800 font-medium hover:text-[#165a4a]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="text-gray-800 font-medium hover:text-[#165a4a]" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className="text-gray-800 font-medium hover:text-[#165a4a]" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="/#projects" className="text-gray-800 font-medium hover:text-[#165a4a]" onClick={() => setIsOpen(false)}>What I Build</Link>
          <div className="mt-4" onClick={() => setIsOpen(false)}>
            <Button href="/#contact">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};
