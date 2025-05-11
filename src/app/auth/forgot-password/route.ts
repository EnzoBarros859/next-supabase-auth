import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await request.formData();
  const email = formData.get('email') as string;

  if (!email) {
    return NextResponse.json(
      { error: 'Email is required' },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/update-password`,
    });

    if (error) throw error;

    return NextResponse.redirect(
      new URL('/forgot-password?message=Check your email for the password reset link', request.url)
    );
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return NextResponse.json(
      { error: 'Error sending password reset email' },
      { status: 500 }
    );
  }
} 