import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import UpdatePassword from '../../components/Auth/UpdatePassword';

export default async function UpdatePasswordPage(): Promise<React.ReactElement> {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
                <UpdatePassword />
              </div>
            </div>
  );
} 