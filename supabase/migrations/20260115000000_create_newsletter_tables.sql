-- Create newsletter tables for Let's Vibe! Links

-- Subscribers table
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  confirmation_token UUID DEFAULT gen_random_uuid(),
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_subscribers_email ON subscribers(email);
CREATE INDEX idx_subscribers_status ON subscribers(status);
CREATE INDEX idx_subscribers_confirmation_token ON subscribers(confirmation_token);

-- Editors table (Seth & Ian)
CREATE TABLE editors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  avatar_url TEXT,
  provider TEXT NOT NULL CHECK (provider IN ('google', 'github')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_editors_email ON editors(email);

-- Digests table (daily newsletter instances)
CREATE TABLE digests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  digest_date DATE UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending_approval', 'approved', 'sent')),
  seth_approved BOOLEAN DEFAULT FALSE,
  seth_approved_at TIMESTAMPTZ,
  ian_approved BOOLEAN DEFAULT FALSE,
  ian_approved_at TIMESTAMPTZ,
  override_by UUID REFERENCES editors(id),
  override_at TIMESTAMPTZ,
  sent_at TIMESTAMPTZ,
  recipient_count INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_digests_digest_date ON digests(digest_date);
CREATE INDEX idx_digests_status ON digests(status);

-- Links table
CREATE TABLE links (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  url TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  content_type TEXT NOT NULL CHECK (content_type IN ('article', 'video', 'tweet', 'podcast', 'tool', 'other')),
  requires_login BOOLEAN DEFAULT FALSE,
  digest_date DATE NOT NULL DEFAULT CURRENT_DATE,
  submitted_by UUID REFERENCES editors(id),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_links_digest_date ON links(digest_date);
CREATE INDEX idx_links_submitted_by ON links(submitted_by);

-- Sent emails tracking
CREATE TABLE sent_emails (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  digest_id UUID REFERENCES digests(id) ON DELETE CASCADE,
  subscriber_id UUID REFERENCES subscribers(id) ON DELETE CASCADE,
  resend_id TEXT,
  status TEXT NOT NULL DEFAULT 'sent' CHECK (status IN ('sent', 'delivered', 'bounced', 'complained')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_sent_emails_digest_id ON sent_emails(digest_id);
CREATE INDEX idx_sent_emails_subscriber_id ON sent_emails(subscriber_id);

-- Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE editors ENABLE ROW LEVEL SECURITY;
ALTER TABLE digests ENABLE ROW LEVEL SECURITY;
ALTER TABLE links ENABLE ROW LEVEL SECURITY;
ALTER TABLE sent_emails ENABLE ROW LEVEL SECURITY;

-- RLS Policies for subscribers (public can insert for signup)
CREATE POLICY "Allow public signup" ON subscribers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow token-based lookup" ON subscribers
  FOR SELECT USING (true);

CREATE POLICY "Service role full access to subscribers" ON subscribers
  FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for editors (service role only)
CREATE POLICY "Service role full access to editors" ON editors
  FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for digests (service role only)
CREATE POLICY "Service role full access to digests" ON digests
  FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for links (service role only)
CREATE POLICY "Service role full access to links" ON links
  FOR ALL USING (auth.role() = 'service_role');

-- RLS Policies for sent_emails (service role only)
CREATE POLICY "Service role full access to sent_emails" ON sent_emails
  FOR ALL USING (auth.role() = 'service_role');

-- Function to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_subscribers_updated_at
  BEFORE UPDATE ON subscribers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_digests_updated_at
  BEFORE UPDATE ON digests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_links_updated_at
  BEFORE UPDATE ON links
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
