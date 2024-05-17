// pages/private.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import supabase from '../utils/supabaseClient';

export default function PrivatePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push('/signin');
      } else {
        setUser(data.user);
        setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Private Page</h1>
      <p>Welcome, {user.email}</p>
    </div>
  );
}
