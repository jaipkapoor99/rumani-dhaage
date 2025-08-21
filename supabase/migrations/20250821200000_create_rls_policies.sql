-- 1. Create a policy for the carousel_images table
-- This policy allows anyone (public) to read the images.
CREATE POLICY "Allow public read access to carousel images"
ON public.carousel_images
FOR SELECT
USING (true);

-- 2. Create a policy for the admin_whitelist table
-- This policy allows a logged-in user to check for their own email,
-- but prevents them from seeing any other emails in the table.
CREATE POLICY "Allow users to check if they are in the whitelist"
ON public.admin_whitelist
FOR SELECT
USING (auth.email() = email);
