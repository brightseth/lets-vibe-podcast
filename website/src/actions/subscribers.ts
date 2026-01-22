"use server"

import { createAdminClient } from "@/lib/supabase/admin"
import { getResend, FROM_EMAIL } from "@/lib/resend"
import ConfirmSubscription from "@/emails/ConfirmSubscription"

const BASE_URL = process.env.NEXTAUTH_URL || "https://letsvibe.fm"

export async function subscribeToLinks(email: string) {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address" }
  }

  const supabase = createAdminClient()

  // Check if already subscribed
  const { data: existing } = await supabase
    .from("subscribers")
    .select("id, status")
    .eq("email", email.toLowerCase())
    .single()

  if (existing?.status === "confirmed") {
    return { error: "You're already subscribed!" }
  }

  // Generate new confirmation token
  const confirmationToken = crypto.randomUUID()

  // Insert or update subscriber
  const { data: subscriber, error } = await supabase
    .from("subscribers")
    .upsert({
      email: email.toLowerCase(),
      status: "pending",
      confirmation_token: confirmationToken,
    }, {
      onConflict: "email",
    })
    .select()
    .single()

  if (error) {
    console.error("Subscribe error:", error)
    return { error: "Something went wrong. Please try again." }
  }

  // Send confirmation email
  const confirmUrl = `${BASE_URL}/links/confirm?token=${subscriber.confirmation_token}`

  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email.toLowerCase(),
      subject: "Confirm your subscription to Let's Vibe! Links",
      react: ConfirmSubscription({ confirmUrl }),
    })
  } catch (emailError) {
    console.error("Email send error:", emailError)
    return { error: "Failed to send confirmation email. Please try again." }
  }

  return { success: true }
}

export async function confirmSubscription(token: string) {
  if (!token) {
    return { error: "Invalid confirmation link" }
  }

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from("subscribers")
    .update({
      status: "confirmed",
      confirmed_at: new Date().toISOString(),
    })
    .eq("confirmation_token", token)
    .eq("status", "pending")
    .select()
    .single()

  if (error || !data) {
    return { error: "Invalid or expired confirmation link" }
  }

  return { success: true, email: data.email }
}

export async function unsubscribe(email: string, token: string) {
  if (!email || !token) {
    return { error: "Invalid unsubscribe link" }
  }

  const supabase = createAdminClient()

  const { error } = await supabase
    .from("subscribers")
    .update({
      status: "unsubscribed",
      unsubscribed_at: new Date().toISOString(),
    })
    .eq("email", email.toLowerCase())
    .eq("confirmation_token", token)

  if (error) {
    return { error: "Failed to unsubscribe. Please try again." }
  }

  return { success: true }
}

export async function getSubscriberCount() {
  const supabase = createAdminClient()

  const { count } = await supabase
    .from("subscribers")
    .select("*", { count: "exact", head: true })
    .eq("status", "confirmed")

  return count || 0
}
