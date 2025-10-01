import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

(async () => {
  const { data, error } = await supabase.from('users').select('count(*)');

  if (error) {
    console.error('❌ Supabase ping failed:', error.message);
    process.exit(1);
  }

  console.log(`Supabase ping successful. User count: ${data[0].count}`);
})();
