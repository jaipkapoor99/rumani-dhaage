-- Move tables to public schema
ALTER TABLE rumani_dhaage.item_images SET SCHEMA public;
ALTER TABLE rumani_dhaage.items SET SCHEMA public;

-- Move types to public schema
ALTER TYPE rumani_dhaage.item_type SET SCHEMA public;

-- Move functions to public schema
ALTER FUNCTION rumani_dhaage.set_updated_at() SET SCHEMA public;

-- Drop the rumani_dhaage schema
DROP SCHEMA rumani_dhaage;
