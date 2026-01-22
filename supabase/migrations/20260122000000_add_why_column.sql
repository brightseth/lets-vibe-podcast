-- Add 'why' column to links table
-- This stores the editorial reason why the link deserves to be in the newsletter

ALTER TABLE links ADD COLUMN why TEXT;

-- Add a comment for documentation
COMMENT ON COLUMN links.why IS 'Editorial explanation of why this link deserves to be in this week''s newsletter';
