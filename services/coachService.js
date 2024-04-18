// services/coachService.js
import { supabase } from '../utils/supabaseClient';

export async function addCoach(data) {
  const { data: coach, error } = await supabase
    .from('coaches')
    .insert([data]);
  return { coach, error };
}

export async function fetchCoaches() {
  const { data: coaches, error } = await supabase
    .from(supabase)
    .select('*');
  return { coaches, error };
}

export async function updateCoach(id, updatedInfo) {
  const { data: updated, error } = await supabase
    .from('coaches')
    .update(updatedInfo)
    .match({ id });
  return { updated, error };
}

export async function deleteCoach(id) {
  const { data: deleted, error } = await supabase
    .from('coaches')
    .delete()
    .match({ id });
  return { deleted, error };
}
