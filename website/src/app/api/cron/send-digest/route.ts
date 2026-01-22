import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase/admin"
import { getResend, FROM_EMAIL } from "@/lib/resend"
import DailyDigest from "@/emails/DailyDigest"

const BASE_URL = process.env.NEXTAUTH_URL || "https://letsvibe.fm"

export async function GET(request: Request) {
  // Verify cron secret for security
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const supabase = createAdminClient()
  const today = new Date().toISOString().split("T")[0]

  // Check if today's digest is approved
  const { data: digest, error: digestError } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", today)
    .single()

  if (digestError || !digest) {
    return NextResponse.json({
      message: "No digest found for today",
      date: today,
    })
  }

  // Check approval status
  if (digest.status !== "approved") {
    return NextResponse.json({
      message: "Digest not approved",
      status: digest.status,
      seth_approved: digest.seth_approved,
      ian_approved: digest.ian_approved,
    })
  }

  // Prevent double-send
  if (digest.sent_at) {
    return NextResponse.json({
      message: "Digest already sent",
      sent_at: digest.sent_at,
    })
  }

  // Get links for today
  const { data: links } = await supabase
    .from("links")
    .select("*")
    .eq("digest_date", today)
    .order("sort_order", { ascending: true })

  if (!links || links.length === 0) {
    return NextResponse.json({ message: "No links in digest" })
  }

  // Get confirmed subscribers
  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("id, email, confirmation_token")
    .eq("status", "confirmed")

  if (!subscribers || subscribers.length === 0) {
    return NextResponse.json({ message: "No subscribers to send to" })
  }

  // Format date for display
  const displayDate = new Date(today).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Send to each subscriber
  const results: { email: string; status: string; error?: unknown }[] = []

  for (const subscriber of subscribers) {
    const unsubscribeUrl = `${BASE_URL}/links/unsubscribe?email=${encodeURIComponent(subscriber.email)}&token=${subscriber.confirmation_token}`

    try {
      const { data } = await getResend().emails.send({
        from: FROM_EMAIL,
        to: subscriber.email,
        subject: `Let's Vibe! Links - ${displayDate}`,
        react: DailyDigest({
          digestDate: displayDate,
          links: links.map((l) => ({
            url: l.url,
            title: l.title,
            description: l.description,
            category: l.category,
            content_type: l.content_type,
            requires_login: l.requires_login,
          })),
          unsubscribeUrl,
        }),
      })

      // Log sent email
      await supabase.from("sent_emails").insert({
        digest_id: digest.id,
        subscriber_id: subscriber.id,
        resend_id: data?.id,
        status: "sent",
      })

      results.push({ email: subscriber.email, status: "sent" })
    } catch (error) {
      results.push({ email: subscriber.email, status: "failed", error })
    }
  }

  // Mark digest as sent
  const sentCount = results.filter((r) => r.status === "sent").length
  await supabase
    .from("digests")
    .update({
      status: "sent",
      sent_at: new Date().toISOString(),
      recipient_count: sentCount,
    })
    .eq("id", digest.id)

  return NextResponse.json({
    message: "Digest sent successfully",
    date: today,
    sent: sentCount,
    failed: results.filter((r) => r.status === "failed").length,
    total_subscribers: subscribers.length,
  })
}
