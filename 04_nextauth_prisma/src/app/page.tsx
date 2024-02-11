'use client';

import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (!session) {
    useEffect(() => {
      console.log(session);
    }, []);
    return (
      <div className="bg-blue-100">
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }

  return (
    <div className="bg-red-100">
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Home;
