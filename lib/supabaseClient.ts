import { createClient } from '@supabase/supabase-js';

// Tus API Keys específicas del proyecto
const supabaseUrl = 'https://scrkxjvkbtbwupgtadhi.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcmt4anZrYnRid3VwZ3RhZGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwNDA4MjEsImV4cCI6MjA4NzYxNjgyMX0.2J2g4wypTKvKn-_tu2DrG9brngsPP-kWM9zwXLAfuys';

// Crea y exporta el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
