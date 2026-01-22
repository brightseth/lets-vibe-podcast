"use server"

import { getCurrentEditor, getEditorName, getUser, isAllowedEditor } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/admin"
import type { Digest, LinkWithEditor } from "@/types/links"

// Ensure user is an editor
async function requireEditor() {
  const editor = await getCurrentEditor()
  if (!editor) {
    throw new Error("Not authorized")
  }
  return editor
}

export async function getDigestWithLinks(digestDate: string) {
  const supabase = createAdminClient()

  // Get or create digest
  let { data: digest } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", digestDate)
    .single()

  if (!digest) {
    const { data: newDigest } = await supabase
      .from("digests")
      .insert({ digest_date: digestDate })
      .select()
      .single()
    digest = newDigest
  }

  // Get links
  const { data: links } = await supabase
    .from("links")
    .select(`
      *,
      editor:submitted_by (
        id,
        name,
        email,
        avatar_url
      )
    `)
    .eq("digest_date", digestDate)
    .order("sort_order", { ascending: true })

  return {
    digest: digest as Digest | null,
    links: (links || []) as LinkWithEditor[],
  }
}

export async function approveDigest(digestDate: string) {
  const editor = await requireEditor()

  const supabase = createAdminClient()
  const now = new Date().toISOString()

  // Prepare update based on which editor is approving
  const updateData: Record<string, unknown> = {
    updated_at: now,
  }

  if (editor.name === "seth") {
    updateData.seth_approved = true
    updateData.seth_approved_at = now
  } else if (editor.name === "ian") {
    updateData.ian_approved = true
    updateData.ian_approved_at = now
  }

  // Ensure digest exists
  await supabase
    .from("digests")
    .upsert({ digest_date: digestDate }, { onConflict: "digest_date" })

  // Update approval
  const { data: digest, error } = await supabase
    .from("digests")
    .update(updateData)
    .eq("digest_date", digestDate)
    .select()
    .single()

  if (error) {
    console.error("Approve error:", error)
    throw new Error("Failed to approve")
  }

  // Check if both approved and update status
  if (digest.seth_approved && digest.ian_approved) {
    await supabase
      .from("digests")
      .update({ status: "approved" })
      .eq("digest_date", digestDate)
  } else if (digest.seth_approved || digest.ian_approved) {
    await supabase
      .from("digests")
      .update({ status: "pending_approval" })
      .eq("digest_date", digestDate)
  }

  // Return updated digest
  const { data: updatedDigest } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", digestDate)
    .single()

  return updatedDigest as Digest
}

export async function revokeApproval(digestDate: string) {
  const editor = await requireEditor()

  const supabase = createAdminClient()

  // Prepare update based on which editor is revoking
  const updateData: Record<string, unknown> = {
    updated_at: new Date().toISOString(),
    status: "draft",
  }

  if (editor.name === "seth") {
    updateData.seth_approved = false
    updateData.seth_approved_at = null
  } else if (editor.name === "ian") {
    updateData.ian_approved = false
    updateData.ian_approved_at = null
  }

  const { data: digest, error } = await supabase
    .from("digests")
    .update(updateData)
    .eq("digest_date", digestDate)
    .select()
    .single()

  if (error) {
    console.error("Revoke error:", error)
    throw new Error("Failed to revoke approval")
  }

  // Update status based on remaining approvals
  if (digest.seth_approved || digest.ian_approved) {
    await supabase
      .from("digests")
      .update({ status: "pending_approval" })
      .eq("digest_date", digestDate)
  }

  const { data: updatedDigest } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", digestDate)
    .single()

  return updatedDigest as Digest
}

export async function overrideApproval(digestDate: string) {
  const editor = await requireEditor()

  const supabase = createAdminClient()

  // Get editor record
  const { data: editorRecord } = await supabase
    .from("editors")
    .select("id")
    .eq("email", editor.email)
    .single()

  const now = new Date().toISOString()

  const { error } = await supabase
    .from("digests")
    .update({
      status: "approved",
      override_by: editorRecord?.id,
      override_at: now,
      updated_at: now,
    })
    .eq("digest_date", digestDate)

  if (error) {
    console.error("Override error:", error)
    throw new Error("Failed to override approval")
  }

  const { data: updatedDigest } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", digestDate)
    .single()

  return updatedDigest as Digest
}

export async function getDigestHistory(limit: number = 30) {
  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from("digests")
    .select(`
      *,
      link_count:links(count)
    `)
    .order("digest_date", { ascending: false })
    .limit(limit)

  if (error) {
    console.error("Get history error:", error)
    return []
  }

  return data
}

export async function getCurrentEditorApprovalStatus(digestDate: string) {
  const user = await getUser()
  if (!user?.email) {
    return { isEditor: false, editorName: null, hasApproved: false }
  }

  if (!isAllowedEditor(user.email)) {
    return { isEditor: false, editorName: null, hasApproved: false }
  }

  const editorName = getEditorName(user.email)

  const supabase = createAdminClient()
  const { data: digest } = await supabase
    .from("digests")
    .select("*")
    .eq("digest_date", digestDate)
    .single()

  const hasApproved = editorName === "seth"
    ? digest?.seth_approved
    : digest?.ian_approved

  return {
    isEditor: true,
    editorName,
    hasApproved: !!hasApproved,
  }
}
