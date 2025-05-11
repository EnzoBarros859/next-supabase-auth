'use client';

import React from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function SignOut(): React.ReactElement {
  const supabase = createClientComponentClient();

  async function handleSignOut(): Promise<void> {
    const { error } = await supabase.auth.signOut();

    if (error) {
      // eslint-disable-next-line no-console
      console.error('ERROR:', error);
    }
  }

  return (
    <button type="button" className="button-inverse" onClick={handleSignOut}> 
      Sign Out
    </button>
  );
} 