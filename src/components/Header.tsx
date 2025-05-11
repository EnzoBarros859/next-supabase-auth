'use client';

import React from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <header className="bg-[#1E293B] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                NextAuth
              </span>
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="relative group px-4 py-2 rounded-lg text-sm font-medium text-white"
                >
                  <span className="relative z-10">Sign Out</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="relative group px-4 py-2 rounded-lg text-sm font-medium text-white"
                >
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
} 