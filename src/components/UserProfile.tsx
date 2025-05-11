'use client';
import React, { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import type { User } from '@supabase/auth-helpers-nextjs';

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  const [fullName, setFullName] = useState(user.user_metadata?.full_name || '');
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.updateUser({
        data: { full_name: fullName },
      });

      if (error) throw error;

      setMessage('Profile updated successfully!');
      router.refresh();
    } catch (error) {
      setMessage('Error updating profile. Please try again.');
      console.error('Error updating profile:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25"></div>
        <div className="relative bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">User Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Email</label>
              <div className="mt-1 text-white">{user.email}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">User ID</label>
              <div className="mt-1 text-white font-mono text-sm">{user.id}</div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Last Sign In</label>
              <div className="mt-1 text-white">
                {user.last_sign_in_at
                  ? new Date(user.last_sign_in_at).toLocaleString()
                  : 'Never'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25"></div>
        <div className="relative bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Account Status</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">Email Confirmed</label>
              <div className="mt-1">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    user.email_confirmed_at
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {user.email_confirmed_at ? 'Confirmed' : 'Pending'}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">Account Created</label>
              <div className="mt-1 text-white">
                {new Date(user.created_at).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-25"></div>
        <div className="relative bg-[#1E293B] rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Update Profile</h2>
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-4 py-3 bg-[#0F172A] border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {message && (
              <div
                className={`text-sm ${
                  message.includes('Error') ? 'text-red-400' : 'text-green-400'
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isUpdating}
              className="relative group w-full px-4 py-3 rounded-lg text-sm font-medium text-white disabled:opacity-50"
            >
              <span className="relative z-10">{isUpdating ? 'Updating...' : 'Update Profile'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 