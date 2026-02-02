import { supabase } from "../db.js";

export async function manageGuest(args: {
  id?: string;
  name: string;
  twitter?: string;
  farcaster?: string;
  email?: string;
  company?: string;
  role?: string;
  bio?: string;
  tier?: number;
  category?: string;
  topics?: string[];
  notes?: string;
  why?: string;
  contact_strategy?: string;
  outreach_status?: string;
}) {
  if (args.id) {
    // Update existing guest
    const { id, ...updates } = args;
    const cleanUpdates = Object.fromEntries(
      Object.entries(updates).filter(([, v]) => v !== undefined)
    );

    if (cleanUpdates.outreach_status === "contacted" && !cleanUpdates.contacted_at) {
      (cleanUpdates as Record<string, unknown>).contacted_at = new Date().toISOString();
    }
    if (cleanUpdates.outreach_status === "confirmed" && !cleanUpdates.confirmed_at) {
      (cleanUpdates as Record<string, unknown>).confirmed_at = new Date().toISOString();
    }

    const { data, error } = await supabase
      .from("guests")
      .update(cleanUpdates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(`Failed to update guest: ${error.message}`);
    return data;
  } else {
    // Create new guest
    const { data, error } = await supabase
      .from("guests")
      .insert({
        name: args.name,
        twitter: args.twitter,
        farcaster: args.farcaster,
        email: args.email,
        company: args.company,
        role: args.role,
        bio: args.bio,
        tier: args.tier,
        category: args.category,
        topics: args.topics,
        notes: args.notes,
        why: args.why,
        contact_strategy: args.contact_strategy,
        outreach_status: args.outreach_status || "wishlist",
      })
      .select()
      .single();

    if (error) throw new Error(`Failed to create guest: ${error.message}`);
    return data;
  }
}

export async function listGuests(args: {
  tier?: number;
  outreach_status?: string;
  category?: string;
}) {
  let query = supabase
    .from("guests")
    .select("*")
    .order("tier")
    .order("name");

  if (args.tier !== undefined) query = query.eq("tier", args.tier);
  if (args.outreach_status) query = query.eq("outreach_status", args.outreach_status);
  if (args.category) query = query.eq("category", args.category);

  const { data, error } = await query;
  if (error) throw new Error(`Failed to list guests: ${error.message}`);
  return data;
}

export const guestTools = [
  {
    name: "studio_manage_guest",
    description: "Create or update a guest in the pipeline. If id is provided, updates; otherwise creates a new guest.",
    inputSchema: {
      type: "object" as const,
      properties: {
        id: { type: "string", description: "Guest UUID (provide to update, omit to create)" },
        name: { type: "string", description: "Guest name" },
        twitter: { type: "string", description: "Twitter handle" },
        farcaster: { type: "string", description: "Farcaster handle" },
        email: { type: "string", description: "Email address" },
        company: { type: "string", description: "Company/organization" },
        role: { type: "string", description: "Title/role" },
        bio: { type: "string", description: "Short bio" },
        tier: { type: "number", description: "Guest tier (0=unicorn, 6=network)" },
        category: { type: "string", description: "Category (visionary, builder, artist, etc.)" },
        topics: { type: "array", items: { type: "string" }, description: "Topics they'd discuss" },
        notes: { type: "string", description: "Internal notes" },
        why: { type: "string", description: "Why this guest" },
        contact_strategy: { type: "string", description: "How to reach them" },
        outreach_status: {
          type: "string",
          enum: ["wishlist", "contacted", "confirmed", "scheduled", "recorded", "published", "declined"],
        },
      },
      required: ["name"],
    },
  },
  {
    name: "studio_list_guests",
    description: "List guests from the pipeline, optionally filtered by tier, status, or category.",
    inputSchema: {
      type: "object" as const,
      properties: {
        tier: { type: "number", description: "Filter by tier (0-6)" },
        outreach_status: {
          type: "string",
          enum: ["wishlist", "contacted", "confirmed", "scheduled", "recorded", "published", "declined"],
        },
        category: { type: "string", description: "Filter by category" },
      },
    },
  },
];

export async function handleGuestTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "studio_manage_guest":
      return await manageGuest(args as Parameters<typeof manageGuest>[0]);
    case "studio_list_guests":
      return await listGuests(args as Parameters<typeof listGuests>[0]);
    default:
      throw new Error(`Unknown guest tool: ${name}`);
  }
}
