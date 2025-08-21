CREATE OR REPLACE FUNCTION rumani_dhaage.is_admin(user_email TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM rumani_dhaage.admin_whitelist
    WHERE email = user_email
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
