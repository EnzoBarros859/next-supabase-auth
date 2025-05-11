import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';

import AuthProvider from '../components/AuthProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';

// do not cache this layout
export const revalidate = 0;

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0F172A]">
        <AuthProvider accessToken={session?.access_token}>
          <Header />
          <main className="flex-grow container mx-auto px-1 py-2">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
} 