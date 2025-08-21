DROP TRIGGER IF EXISTS "trigger_auto_add_gmail_suffix" ON public.admin_whitelist;

CREATE OR REPLACE FUNCTION public.auto_add_gmail_suffix()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.email NOT LIKE '%@%' THEN
    NEW.email := NEW.email || '@gmail.com';
  ELSIF NEW.email NOT LIKE '%@gmail.com' THEN
    RAISE EXCEPTION 'Invalid email domain. Only @gmail.com addresses are allowed.';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "trigger_auto_add_gmail_suffix"
BEFORE INSERT OR UPDATE ON public.admin_whitelist
FOR EACH ROW
EXECUTE FUNCTION public.auto_add_gmail_suffix();