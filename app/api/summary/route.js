import { NextResponse } from 'next/server'

export async function POST(request) {
  const { content } = await request.json()

  // REST endpoint for Text-Bison (Gemini) v1beta2
  const url = `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${process.env.GOOGLE_API_KEY}`

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: { text: `Please summarize the following article:\n\n${content}` },
        temperature: 0.3,
        maxOutputTokens: 512
      })
    })

    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('API error:', err)
      throw new Error(`Status ${res.status}`)
    }

    const json = await res.json()
    // The API returns an array `candidates`, take the first one:
    const summary = json.candidates?.[0]?.output?.trim() || ''

    return NextResponse.json({ summary })
  } catch (e) {
    console.error('GENERATIVE API ERROR:', e)
    return NextResponse.json(
      { error: 'Generation failed', detail: e.message },
      { status: 500 }
    )
  }
}
