-- 1. Create the function that will be triggered.
-- This function checks if the email about to be inserted/updated
-- lacks an '@' symbol. If it does, it appends '@gmail.com'.

CREATE OR REPLACE FUNCTION public.auto_add_gmail_suffix()
RETURNS TRIGGER AS $$
BEGIN
  -- Check if the email does NOT contain an '@' symbol
  IF NEW.email NOT LIKE '%@%' THEN
    -- If it doesn't, append the suffix
    NEW.email := NEW.email || '@gmail.com';
  END IF;
  -- Return the (potentially modified) row to be inserted/updated
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- 2. Create the trigger and attach it to the admin_whitelist table.
-- This trigger will fire the function BEFORE any INSERT or UPDATE operation.

CREATE TRIGGER "trigger_auto_add_gmail_suffix"
BEFORE INSERT OR UPDATE ON public.admin_whitelist
FOR EACH ROW
EXECUTE FUNCTION public.auto_add_gmail_suffix();
