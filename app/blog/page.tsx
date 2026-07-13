import React from 'react';

export default function BlogPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-32 px-8 text-center min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
      <p className="text-gray-600 max-w-2xl text-lg">
        This is the Blog placeholder page. In a real application, this page would list technical articles, thoughts on software architecture, and development workflow insights.
      </p>
    </main>
  );
}
