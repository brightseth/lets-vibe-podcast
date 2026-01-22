// Database types for the newsletter system

export interface Subscriber {
  id: string
  email: string
  status: 'pending' | 'confirmed' | 'unsubscribed'
  confirmation_token: string
  confirmed_at: string | null
  unsubscribed_at: string | null
  created_at: string
  updated_at: string
}

export interface Editor {
  id: string
  user_id: string
  name: string
  email: string
  avatar_url: string | null
  provider: 'google' | 'github'
  created_at: string
}

export interface Digest {
  id: string
  digest_date: string
  status: 'draft' | 'pending_approval' | 'approved' | 'sent'
  seth_approved: boolean
  seth_approved_at: string | null
  ian_approved: boolean
  ian_approved_at: string | null
  override_by: string | null
  override_at: string | null
  sent_at: string | null
  recipient_count: number | null
  created_at: string
  updated_at: string
}

export interface Link {
  id: string
  url: string
  title: string
  description: string | null
  why: string | null
  category: string
  content_type: 'article' | 'video' | 'tweet' | 'podcast' | 'tool' | 'other'
  requires_login: boolean
  digest_date: string
  submitted_by: string | null
  sort_order: number
  created_at: string
  updated_at: string
}

export interface LinkWithEditor extends Link {
  editor?: Editor
}

export interface SentEmail {
  id: string
  digest_id: string
  subscriber_id: string
  resend_id: string | null
  status: 'sent' | 'delivered' | 'bounced' | 'complained'
  created_at: string
}

// Content type icons for display
export const contentTypeIcons: Record<Link['content_type'], string> = {
  article: '📄',
  video: '🎬',
  tweet: '🐦',
  podcast: '🎙️',
  tool: '🛠️',
  other: '🔗',
}

// Content type labels
export const contentTypeLabels: Record<Link['content_type'], string> = {
  article: 'Article',
  video: 'Video',
  tweet: 'Tweet',
  podcast: 'Podcast',
  tool: 'Tool',
  other: 'Link',
}
