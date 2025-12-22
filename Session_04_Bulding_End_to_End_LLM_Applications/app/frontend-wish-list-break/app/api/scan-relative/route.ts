import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Get backend URL from environment variable, fallback to localhost for development
    // In development, prefer localhost even if NEXT_PUBLIC_BACKEND_URL is set
    const isDevelopment = process.env.NODE_ENV === "development"
    const backendBaseUrl = isDevelopment
      ? "http://127.0.0.1:8000"
      : (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000")
    const backendUrl = `${backendBaseUrl.replace(/\/$/, "")}/api/scan-relative`

    console.log("[v0] Scan relative request to:", backendUrl)

    // Get form data from the request
    const formData = await request.formData()
    const image = formData.get("image") as File | null
    const question = formData.get("question") as string | null

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 })
    }

    // Create new FormData for backend
    const backendFormData = new FormData()
    backendFormData.append("image", image)
    if (question) {
      backendFormData.append("question", question)
    }

    console.log("[v0] Forwarding image upload to backend")

    let response: Response
    try {
      response = await fetch(backendUrl, {
        method: "POST",
        body: backendFormData,
      })
    } catch (fetchError) {
      console.error("[v0] Network error connecting to backend:", fetchError)
      throw new Error(
        `Failed to connect to backend at ${backendUrl}. Make sure the backend server is running.`,
      )
    }

    console.log("[v0] Backend response status:", response.status)

    if (!response.ok) {
      let errorMessage = `Backend returned ${response.status}`
      try {
        const errorData = await response.json()
        errorMessage = errorData.detail || errorData.error || errorMessage
        console.error("[v0] Backend error (JSON):", errorData)
      } catch {
        const errorText = await response.text()
        errorMessage = errorText || errorMessage
        console.error("[v0] Backend error (text):", errorText)
      }
      throw new Error(errorMessage)
    }

    const data = await response.json()

    return NextResponse.json({ santa_message: data.santa_message })
  } catch (error) {
    console.error("[v0] Error in scan-relative API route:", error)
    return NextResponse.json(
      { error: "Failed to scan image", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}

