"use server"

import { getCurrentEditor, getEditorName } from "@/lib/auth"
import { createAdminClient } from "@/lib/supabase/admin"
import { processLinkWithAI, isValidUrl } from "@/lib/ai"
import type { Link, LinkWithEditor } from "@/types/links"

// Ensure user is an editor
async function requireEditor() {
  const editor = await getCurrentEditor()
  if (!editor) {
    throw new Error("Not authorized")
  }
  return editor
}

// Get or create editor record in database
async function getOrCreateEditorRecord(editor: { id: string; email: string; name: string | null }) {
  const supabase = createAdminClient()

  // Check if editor exists
  let { data: editorRecord } = await supabase
    .from("editors")
    .select("*")
    .eq("email", editor.email)
    .single()

  if (!editorRecord) {
    // Create editor
    const { data: newEditor, error } = await supabase
      .from("editors")
      .insert({
        user_id: editor.id,
        name: editor.name || editor.email.split("@")[0],
        email: editor.email,
        avatar_url: null,
        provider: "magic_link",
      })
      .select()
      .single()

    if (error) {
      throw new Error("Failed to create editor record")
    }
    editorRecord = newEditor
  }

  return editorRecord
}

export async function submitLink(url: string) {
  const editor = await requireEditor()

  // Validate URL
  if (!isValidUrl(url)) {
    throw new Error("Invalid URL")
  }

  const supabase = createAdminClient()

  // Get editor record
  const editorRecord = await getOrCreateEditorRecord(editor)

  // Process with AI
  const aiResult = await processLinkWithAI(url)

  // Get today's date
  const today = new Date().toISOString().split("T")[0]

  // Ensure digest exists for today
  await supabase
    .from("digests")
    .upsert({ digest_date: today }, { onConflict: "digest_date" })

  // Get current max sort order
  const { data: maxOrderData } = await supabase
    .from("links")
    .select("sort_order")
    .eq("digest_date", today)
    .order("sort_order", { ascending: false })
    .limit(1)
    .single()

  const nextOrder = (maxOrderData?.sort_order ?? -1) + 1

  // Insert link
  const { data: link, error } = await supabase
    .from("links")
    .insert({
      url,
      title: aiResult.title,
      why: aiResult.why,
      category: aiResult.category,
      content_type: aiResult.contentType,
      requires_login: aiResult.requiresLogin,
      digest_date: today,
      submitted_by: editorRecord.id,
      sort_order: nextOrder,
    })
    .select()
    .single()

  if (error) {
    console.error("Submit link error:", error)
    throw new Error("Failed to save link")
  }

  return link as Link
}

export async function processUrl(url: string) {
  await requireEditor()

  if (!isValidUrl(url)) {
    throw new Error("Invalid URL")
  }

  const aiResult = await processLinkWithAI(url)
  return aiResult
}

export async function updateLink(
  linkId: string,
  updates: {
    title?: string
    why?: string
    category?: string
    content_type?: string
    requires_login?: boolean
    sort_order?: number
  }
) {
  await requireEditor()

  const supabase = createAdminClient()

  const { data, error } = await supabase
    .from("links")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", linkId)
    .select()
    .single()

  if (error) {
    console.error("Update link error:", error)
    throw new Error("Failed to update link")
  }

  return data as Link
}

export async function deleteLink(linkId: string) {
  await requireEditor()

  const supabase = createAdminClient()

  const { error } = await supabase
    .from("links")
    .delete()
    .eq("id", linkId)

  if (error) {
    console.error("Delete link error:", error)
    throw new Error("Failed to delete link")
  }

  return { success: true }
}

export async function reorderLinks(linkIds: string[]) {
  await requireEditor()

  const supabase = createAdminClient()

  // Update each link with new sort order
  for (let i = 0; i < linkIds.length; i++) {
    await supabase
      .from("links")
      .update({ sort_order: i })
      .eq("id", linkIds[i])
  }

  return { success: true }
}

export async function getLinksForDate(date: string): Promise<LinkWithEditor[]> {
  const supabase = createAdminClient()

  const { data, error } = await supabase
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
    .eq("digest_date", date)
    .order("sort_order", { ascending: true })

  if (error) {
    console.error("Get links error:", error)
    return []
  }

  return data as LinkWithEditor[]
}
