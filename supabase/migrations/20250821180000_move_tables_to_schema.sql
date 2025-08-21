-- Create the new schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS rumani_dhaage;

-- Move the admin_whitelist table to the new schema
ALTER TABLE public.admin_whitelist SET SCHEMA rumani_dhaage;

-- Move the carousel_images table to the new schema
ALTER TABLE public.carousel_images SET SCHEMA rumani_dhaage;
