import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-75"></div>
          <div className="relative bg-[#0F172A] rounded-lg p-8">
            <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">Lost in Space</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Don't worry, even astronauts get lost sometimes.
          Let's get you back to safety.
        </p>
        
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Beam Me Home
          </Link>
          
          <div className="mt-6">
            <Link
              href="/sign-in"
              className="text-gray-400 hover:text-white font-medium transition-colors duration-300"
            >
              Back to Command Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 