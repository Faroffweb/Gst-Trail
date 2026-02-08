import { createClient } from '@supabase/supabase-js';

// Hardcoding credentials to fix runtime error where `process.env` is not defined.
// In a real build environment, these should come from environment variables.
const supabaseUrl = 'https://wmebumcanbvhklbbvpic.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtZWJ1bWNhbmJ2aGtsYmJ2cGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMTk0MTIsImV4cCI6MjA4NTc5NTQxMn0.x5qfLmx9Gw_P0Ugoqpzh28BFrMq_J3aOKIC4IRF49jw';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
