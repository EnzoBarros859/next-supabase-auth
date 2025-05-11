import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import SignUp from '../../components/Auth/SignUp';

export default async function SignUpPage(): Promise<React.ReactElement> {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user }, error } = await supabase.auth.getUser();

  if (user && !error) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="relative">
          {/* Gradient background effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl blur opacity-75"></div>
          
          {/* Main content */}
          <div className="relative bg-[#1E293B] rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Welcome Back
              </h2>
              <p className="mt-2 text-gray-400">
                Sign up to create your account
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-50"></div>
              <div className="relative bg-[#0F172A] rounded-xl p-6">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 