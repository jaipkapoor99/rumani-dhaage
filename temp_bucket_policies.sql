-- =============================================================================
-- SQL POLICIES FOR SUPABASE STORAGE BUCKETS
-- =============================================================================
-- Use these policies to secure your public 'item_images' and 'carousel_images'
-- buckets. These policies ensure that only users whose emails are in the
-- 'admin_whitelist' table can upload, update, or delete files.
-- =============================================================================


-- =============================================================================
-- POLICIES FOR THE 'item_images' BUCKET
-- =============================================================================

-- POLICY 1: Allow ADMINS to UPLOAD (INSERT) into 'item_images'
-- -----------------------------------------------------------------------------
-- In the Supabase Dashboard:
--   1. Go to Storage -> Policies -> item_images
--   2. Click "New Policy"
--   3. Select "Advanced (write your own)"
--   4. For "Allowed operation", check "INSERT"
--   5. Paste the code below into the "Policy definition" box.
-- -----------------------------------------------------------------------------

(bucket_id = 'item_images' AND auth.uid() IN (
  SELECT u.id
  FROM auth.users u
  WHERE u.email IN (
    SELECT email FROM public.admin_whitelist
  )
))


-- POLICY 2: Allow ADMINS to UPDATE and DELETE in 'item_images'
-- -----------------------------------------------------------------------------
-- In the Supabase Dashboard:
--   1. Go to Storage -> Policies -> item_images
--   2. Click "New Policy"
--   3. Select "Advanced (write your own)"
--   4. For "Allowed operation", check "UPDATE" and "DELETE"
--   5. Paste the code below into the "Policy definition" box.
-- -----------------------------------------------------------------------------

(bucket_id = 'item_images' AND auth.uid() IN (
  SELECT u.id
  FROM auth.users u
  WHERE u.email IN (
    SELECT email FROM public.admin_whitelist
  )
))


-- =============================================================================
-- POLICIES FOR THE 'carousel_images' BUCKET
-- =============================================================================

-- POLICY 3: Allow ADMINS to UPLOAD (INSERT) into 'carousel_images'
-- -----------------------------------------------------------------------------
-- In the Supabase Dashboard:
--   1. Go to Storage -> Policies -> carousel_images
--   2. Click "New Policy"
--   3. Select "Advanced (write your own)"
--   4. For "Allowed operation", check "INSERT"
--   5. Paste the code below into the "Policy definition" box.
-- -----------------------------------------------------------------------------

(bucket_id = 'carousel_images' AND auth.uid() IN (
  SELECT u.id
  FROM auth.users u
  WHERE u.email IN (
    SELECT email FROM public.admin_whitelist
  )
))


-- POLICY 4: Allow ADMINS to UPDATE and DELETE in 'carousel_images'
-- -----------------------------------------------------------------------------
-- In the Supabase Dashboard:
--   1. Go to Storage -> Policies -> carousel_images
--   2. Click "New Policy"
--   3. Select "Advanced (write your own)"
--   4. For "Allowed operation", check "UPDATE" and "DELETE"
--   5. Paste the code below into the "Policy definition" box.
-- -----------------------------------------------------------------------------

(bucket_id = 'carousel_images' AND auth.uid() IN (
  SELECT u.id
  FROM auth.users u
  WHERE u.email IN (
    SELECT email FROM public.admin_whitelist
  )
))
