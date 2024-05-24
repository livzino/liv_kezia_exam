import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pduquhqbgmiemuenydcf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdXF1aHFiZ21pZW11ZW55ZGNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1MjA0MjEsImV4cCI6MjAzMjA5NjQyMX0.iH9yeGb3oVtj7W4YQCoGLFtvYDyYh9TV08tOMN_mOt8";

export const supabase = createClient(supabaseUrl, supabaseKey);
