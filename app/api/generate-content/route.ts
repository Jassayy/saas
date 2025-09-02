import { GoogleGenAI } from "@google/genai";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Replace with real authentication logic
async function getCurrentUserId(req: NextRequest): Promise<string | null> {
  return "clq123abc456def789"; // placeholder
}

const prisma = new PrismaClient();

// Initialize AI client
const ai = process.env.GOOGLE_GENAI_USE_VERTEXAI
  ? new GoogleGenAI({
      vertexai: true,
      project: process.env.GOOGLE_CLOUD_PROJECT,
      location: process.env.GOOGLE_CLOUD_LOCATION,
    })
  : new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

export async function POST(req: NextRequest) {
  try {
    const userId = await getCurrentUserId(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { contentType, userPrompt } = body;
    if (!contentType || !userPrompt) {
      return NextResponse.json(
        { error: "Missing contentType or userPrompt" },
        { status: 400 }
      );
    }

    const profile = await prisma.businessProfile.findUnique({
      where: { userId },
    });
    if (!profile) {
      return NextResponse.json(
        { error: "Onboarding incomplete. Set up business profile." },
        { status: 400 }
      );
    }

    const composedPrompt = `
You are a marketing copywriter for a startup.
Business: ${profile.businessName}
Industry: ${profile.industry ?? "Not specified"}
Audience: ${profile.targetAudience ?? "General audience"}
Tone: ${profile.toneOfVoice}

Generate the following:
- Type: ${contentType}
- Instruction: "${userPrompt}"
`;

    // Call Gemini
    const response = await ai.models.generateContent({
      model: process.env.GENAI_MODEL || "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: composedPrompt }] }],
    });

    // Safely extract text
    let generatedText = "";
    if (response && typeof response.text === "string") {
      generatedText = response.text;
    } else if (
      response &&
      Array.isArray(response.candidates) &&
      response.candidates.length > 0 &&
      response.candidates[0]?.content?.parts?.[0]?.text
    ) {
      generatedText = response.candidates[0].content.parts[0].text;
    } else {
      generatedText = "[No content generated]";
    }

    // Save to DB
    const saved = await prisma.generatedContent.create({
      data: {
        userId,
        type: contentType,
        prompt: userPrompt,
        content: generatedText,
      },
    });

    return NextResponse.json(saved);
  } catch (err) {
    console.error("Error generating content:", err);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
