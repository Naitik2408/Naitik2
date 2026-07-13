import React from 'react';
import Link from 'next/link';
import { Button } from './Button';

export const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <img src="/icon.png" alt="Naitik Logo" className="w-8 h-8 object-contain" />
          <span className="text-2xl font-bold text-[#165a4a]">Naitik</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/projects" className="hover:text-black">Projects</Link>
          <Link href="/about" className="hover:text-black">About Me</Link>
          <Link href="/#projects" className="hover:text-black">How I Help</Link>
        </div>
        <div>
          <Button href="/#contact">Contact Us</Button>
        </div>
      </nav>
    </header>
  );
};
