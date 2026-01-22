-- Add magic_link as an allowed provider for editors
ALTER TABLE editors DROP CONSTRAINT IF EXISTS editors_provider_check;
ALTER TABLE editors ADD CONSTRAINT editors_provider_check
  CHECK (provider IN ('google', 'github', 'magic_link'));
