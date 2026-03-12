
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yjryxhotjivptkpjuasw.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)