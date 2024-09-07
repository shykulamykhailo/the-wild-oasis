import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xygeahbpbblhyzlogsrb.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5Z2VhaGJwYmJsaHl6bG9nc3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2OTY3MTMsImV4cCI6MjA0MTI3MjcxM30.iQb6Wjb_6J0TfZssBMgKGitNwiItY7zu-NLTP5ULYes';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
