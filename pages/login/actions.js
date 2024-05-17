// app/login/actions.js

'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabaseClientServer';

export async function login(formData) {
  const supabase = createClient();

  // Extract email and password from formData
  const email = formData.get('email');
  const password = formData.get('password');

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/');
}

export async function signup(formData) {
  const supabase = createClient();

  // Extract email and password from formData
  const email = formData.get('email');
  const password = formData.get('password');

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/');
}
