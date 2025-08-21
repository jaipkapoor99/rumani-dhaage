-- Move tables back to the public schema
ALTER TABLE rumani_dhaage.admin_whitelist SET SCHEMA public;
ALTER TABLE rumani_dhaage.carousel_images SET SCHEMA public;

-- Drop the now unused RPC function
DROP FUNCTION rumani_dhaage.is_admin(TEXT);

