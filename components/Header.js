import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import supabase from '../utils/supabaseClient';

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      checkUser();
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/signin');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/private">Private</Link>
          {user && <Link href="/account">Account</Link>}
        </div>
        <div className="flex items-center space-x-4">
          {!user ? (
            <>
              <Link href="/signin">Sign In</Link>
              <Link href="/signup">Sign Up</Link>
            </>
          ) : (
            <button onClick={handleSignOut} className="hover:text-gray-400">
              Sign Out
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
