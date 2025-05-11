import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ForgotPasswordForm from '../../components/Auth/ForgotPasswordForm';

export default async function ForgotPasswordPage() {
  const supabase = createServerComponentClient({ cookies });

  const { data: { user }, error } = await supabase.auth.getUser();

  if (user && !error) {
    redirect('/profile');
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0F172A]">
      <div className="max-w-md w-full space-y-8">
        <ForgotPasswordForm />
      </div>
    </div>
  );
} 