-- Enable the pgcrypto extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Alter the admin_whitelist table
ALTER TABLE public.admin_whitelist ADD COLUMN uuid_id UUID DEFAULT gen_random_uuid();
ALTER TABLE public.admin_whitelist DROP COLUMN id;
ALTER TABLE public.admin_whitelist RENAME COLUMN uuid_id TO id;
ALTER TABLE public.admin_whitelist ADD PRIMARY KEY (id);

-- Alter the carousel_images table
ALTER TABLE public.carousel_images ADD COLUMN uuid_id UUID DEFAULT gen_random_uuid();
ALTER TABLE public.carousel_images DROP COLUMN id;
ALTER TABLE public.carousel_images RENAME COLUMN uuid_id TO id;
ALTER TABLE public.carousel_images ADD PRIMARY KEY (id);
