import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import UserProfile from '../../components/UserProfile';

export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies });

  const { data: { user }, error } = await supabase.auth.getUser();

  if (!user || error) {
    redirect('/sign-in');
  }

  // Get user role from the database
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single();

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75"></div>
          
          {/* Main content */}
          <div className="relative bg-[#1E293B] rounded-2xl overflow-hidden">
            {/* Header section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20"></div>
              <div className="relative px-8 py-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-4xl font-bold text-white mb-2">Profile Dashboard</h1>
                    <p className="text-gray-400">Welcome back, {user.email}</p>
                  </div>
                  <Link
                    href="/update-password"
                    className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl font-medium text-white hover:opacity-90 transition-all duration-300"
                  >
                    <span className="relative z-10">Update Password</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="p-8">
              <div className="bg-[#0F172A] rounded-xl p-6">
                
                  <UserProfile user={user} />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 