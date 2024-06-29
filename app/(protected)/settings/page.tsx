'use client';

import { useSession, signOut } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, logout } from '@/store/userSlice';
import Link from 'next/link';

const SettingsPage = () => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(setUser(session.user));
    }
  }, [session, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/login';
    }
    return null;
  }

  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
