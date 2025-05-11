import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} NextAuth. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="/" className="text-sm hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 