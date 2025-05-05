// npm install @supabase/supabase-js

// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ysgjrsjbhilvydwwylgb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZ2pyc2piaGlsdnlkd3d5bGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTU5NzcsImV4cCI6MjA2MjAzMTk3N30.7ryB1Ps4VUgokimUN0cDlhY1dyCpsnEVVXKA1rsroDI';
export const supabase = createClient(supabaseUrl, supabaseKey);
