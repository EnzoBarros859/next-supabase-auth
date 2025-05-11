'use client';

import React from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (password !== confirmPassword) {
      router.push('/sign-up?error=Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      router.push('/sign-up?error=' + error.message);
    } else {
      router.push('/sign-up?message=Check your email to confirm your account');
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
          minLength={6}
          className="mt-1 block w-full px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
          placeholder="Create a password"
        />
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          minLength={6}
          className="mt-1 block w-full px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
          placeholder="Confirm your password"
        />
      </div>

      <button
        type="submit"
        className="relative group w-full px-4 py-3 rounded-lg text-sm font-medium text-white"
      >
        <span className="relative z-10">Create Account</span>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          Already have an account?{' '}
          <Link
            href="/sign-in"
            className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
} 