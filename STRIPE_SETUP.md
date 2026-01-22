# Let's Vibe Inc. - Stripe Setup Guide

**Entity:** Let's Vibe Inc. (Media Company)
**Created:** January 21, 2026
**Purpose:** Payment processing for podcast sponsorships, merchandise, premium content

---

## Setup Steps

### 1. Form Delaware C Corp via Stripe Atlas

**DECISION: Delaware C Corp** (Ian confirmed: "Def do America and not France")

**Go to:** https://stripe.com/atlas

**What Stripe Atlas Handles:**
- Incorporates Delaware C Corp ($500 + state fees)
- Gets you EIN automatically
- Opens Silicon Valley Bank account
- Gives you Stripe account already connected
- Files 83(b) election for founders
- Sets up cap table

**Entity Details:**
- **Company name:** Let's Vibe Inc.
- **Industry:** Media & Entertainment → Podcasting
- **Website:** https://letsvibe.fm
- **Description:** "Weekly podcast about creativity in the age of AI, featuring conversations with thought leaders and tutorials for creative professionals."

**Founders:**
- Seth Goldstein (Co-founder, Host)
- Ian Rogers (Co-founder, Host)

**Equity Split:** (Decide before Atlas application)
- Option A: 50/50 (equal partners)
- Option B: Different split based on time commitment
- Note: Atlas will ask for founder equity breakdown

**Timeline:** 1-2 weeks for full incorporation

### 2. Bank Account Connection

**You'll need:**
- Business bank account (EIN required for business account)
- Routing number
- Account number
- Bank account holder name

**Note:** If you don't have a business bank account yet, you can use:
- Personal account initially (for sole proprietorship)
- Open business account later and update Stripe

### 3. Tax Information

**EIN (Employer Identification Number):**
- Apply at: https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online
- Takes 5-10 minutes
- Instant for online applications

**Tax Forms Needed:**
- W-9 (for US entity)
- Business address
- Tax classification

### 4. Business Verification

Stripe will ask for:
- [ ] Government-issued ID (Seth or Ian)
- [ ] Business formation documents (Articles of Incorporation)
- [ ] Business address verification
- [ ] Phone number verification

**Timeline:** 1-2 business days for verification

---

## Revenue Streams to Configure

### 1. Sponsorship Payments (Primary)

**Product Setup:**
```
Product: "Podcast Sponsorship - Let's Vibe!"
Price: Custom (varies by sponsor tier)
Billing: One-time or recurring monthly
```

**Sponsor Tiers:**
- Platform Tier: $10,000-15,000/month (Anthropic, OpenAI, Google)
- Infrastructure Tier: $5,000-8,000/month (Vercel, Supabase)
- Tools Tier: $3,000-5,000/month (Cursor, Descript)
- Adjacent Tier: $2,000-3,000/month (Notion, Linear, Figma)

### 2. Premium Content (Future)

```
Product: "Let's Vibe! Premium"
Price: $10/month or $100/year
Features:
- Extended episodes
- Exclusive tutorials
- Community access
- Early access to episodes
```

### 3. Merchandise (Future)

```
Products:
- T-shirts: $30
- Hoodies: $50
- Stickers: $5
- Mugs: $20
```

---

## API Keys Setup

Once account is activated:

### Get your keys at: https://dashboard.stripe.com/apikeys

```bash
# Test Mode (for development)
STRIPE_PUBLISHABLE_KEY_TEST=pk_test_...
STRIPE_SECRET_KEY_TEST=sk_test_...

# Live Mode (for production)
STRIPE_PUBLISHABLE_KEY_LIVE=pk_live_...
STRIPE_SECRET_KEY_LIVE=sk_live_...
```

### Add to project:

```bash
cd /Users/sethstudio1/Projects/lets-vibe-podcast/website
echo "STRIPE_SECRET_KEY=sk_test_..." >> .env.local
echo "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_..." >> .env.local
```

---

## Webhook Configuration

### Set up webhooks for:
- `checkout.session.completed` - Sponsorship payment completed
- `customer.subscription.created` - Premium subscription started
- `customer.subscription.deleted` - Premium subscription cancelled
- `invoice.payment_failed` - Payment failure notifications

**Webhook endpoint:** `https://letsvibe.fm/api/stripe/webhook`

---

## Payment Links for Quick Setup

**Create Payment Links for sponsors** (no code required):
https://dashboard.stripe.com/payment-links

Example:
```
Product: "Q1 2026 Sponsorship Package"
Price: $15,000
Description: "3-month sponsorship package (12 episodes)"
```

Share link with sponsors: `https://buy.stripe.com/lets-vibe-q1-sponsor`

---

## Connected Accounts (if partnering with Matt)

If revenue split with distribution partner:

### Option 1: Stripe Connect (Recommended)
- Let's Vibe Inc. is the platform
- Partner has connected account
- Automatic splits on each payment
- Transparent reporting

### Option 2: Manual Distribution
- All payments to Let's Vibe Inc.
- Manual payouts to partner monthly
- Requires separate accounting

**Stripe Connect Setup:**
https://dashboard.stripe.com/connect/accounts/overview

---

## Revenue Split Configuration

**Based on partnership proposal:**
- Distribution Partner: 30%
- Seth + Ian: 50%
- Production Reserve: 20%

### Implementation Options:

**Option A: Stripe Connect Transfer**
```javascript
// Automatic split on payment
{
  amount: 10000, // $100.00
  transfers: [
    { destination: 'acct_partner', amount: 3000 },  // 30%
    { destination: 'acct_hosts', amount: 5000 },    // 50%
    { destination: 'acct_production', amount: 2000 } // 20%
  ]
}
```

**Option B: Manual Bank Transfers**
- Track in spreadsheet
- Monthly payouts
- Simpler initially

---

## Next Steps

### Immediate (Week of Jan 20):
1. [ ] Decide on entity structure (LLC vs Corp)
2. [ ] Apply for EIN
3. [ ] Create Stripe account
4. [ ] Connect temporary bank account

### Short-term (Before first sponsor):
1. [ ] Open business bank account
2. [ ] Complete Stripe verification
3. [ ] Create sponsorship payment links
4. [ ] Test payment flow

### Long-term (Q2 2026):
1. [ ] Implement Stripe Connect for partner splits
2. [ ] Build premium subscription tier
3. [ ] Add merchandise store
4. [ ] Integrate with accounting software (QuickBooks, Xero)

---

## Useful Resources

- **Stripe Dashboard:** https://dashboard.stripe.com
- **Stripe Docs:** https://stripe.com/docs
- **Payment Links:** https://dashboard.stripe.com/payment-links
- **Connect Overview:** https://stripe.com/connect
- **Testing:** https://stripe.com/docs/testing (use test card: 4242 4242 4242 4242)

---

## Questions for Seth + Ian

1. **Entity type?** LLC or Corporation?
2. **State of incorporation?** Delaware (standard) or California?
3. **Bank account?** Who opens it? Joint signatories?
4. **Revenue split timing?** Automatic or monthly settlement?
5. **Partner payment method?** Stripe Connect or wire transfer?

---

*Created: January 21, 2026*
*Status: Ready to implement*
