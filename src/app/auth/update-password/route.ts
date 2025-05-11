import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);

    return NextResponse.redirect(`${requestUrl.origin}/profile`);
  }

  // eslint-disable-next-line no-console
  console.error('ERROR: Invalid auth code or no auth code found');

  return NextResponse.redirect(`${requestUrl.origin}/sign-in`);
}

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const formData = await request.formData();
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!password || !confirmPassword) {
    return NextResponse.json(
      { error: 'Password and confirmation are required' },
      { status: 400 }
    );
  }

  if (password !== confirmPassword) {
    return NextResponse.json(
      { error: 'Passwords do not match' },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: 'Password must be at least 6 characters long' },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) throw error;

    return NextResponse.redirect(new URL('/profile', request.url));
  } catch (error) {
    
    return NextResponse.json(
      { error: 'Error updating password' },
      { status: 500 }
    );
  }
} 