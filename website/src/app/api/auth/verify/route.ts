import { NextResponse } from "next/server"
import { isAllowedEditor } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ authorized: false, error: "No email provided" })
    }

    const authorized = isAllowedEditor(email)

    return NextResponse.json({ authorized })
  } catch {
    return NextResponse.json({ authorized: false, error: "Invalid request" })
  }
}
