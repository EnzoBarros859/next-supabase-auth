'use client';

import React from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      router.push('/sign-in?error=Invalid email or password');
    } else {
      router.push('/profile');
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="mt-1 block w-full px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
          placeholder="Enter your password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-700 rounded bg-[#0F172A]"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
            Remember me
          </label>
        </div>

        <Link
          href="/forgot-password"
          className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="relative group w-full px-4 py-3 rounded-lg text-sm font-medium text-white"
      >
        <span className="relative z-10">Sign In</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{' '}
          <Link
            href="/sign-up"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
} 