'use client';

import { createContext, useEffect, ReactNode } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  accessToken?: string;
}

export const AuthContext = createContext<AuthContextType>({});

interface AuthProviderProps {
  accessToken?: string;
  children: ReactNode;
}

const AuthProvider = ({ accessToken, children }: AuthProviderProps) => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN') {
        if (session?.access_token !== accessToken) {
          router.push("/");
        }
      } else if (event === 'SIGNED_OUT') {
        router.push("/");
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
};

export default AuthProvider; 