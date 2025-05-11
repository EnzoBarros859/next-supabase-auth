import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25"></div>
        <div className="relative bg-[#1E293B] rounded-xl p-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin animation-delay-150"></div>
            </div>
            <p className="text-gray-400 text-sm">Loading...</p>
          </div>
        </div>
      </div>
    </div>
  );
} 