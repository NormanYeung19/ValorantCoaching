// pages/private/page.js

import { redirect } from 'next/navigation';
import { createClient } from '../../utils/supabaseClientServer';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/signin');
  }

  return <p>Hello {data.user.email}</p>;
}
