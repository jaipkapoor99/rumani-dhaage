CREATE TABLE rumani_dhaage.admin_whitelist (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

COMMENT ON TABLE rumani_dhaage.admin_whitelist IS 'Stores the email addresses of users authorized to access the admin portal.';
