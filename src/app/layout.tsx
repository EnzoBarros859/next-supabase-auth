import React from 'react';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Supabase Auth',
  description: 'Authentication system with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[#0F172A]`}>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
} 