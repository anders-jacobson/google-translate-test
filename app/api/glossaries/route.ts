import { NextResponse } from "next/server";
import * as deepl from "deepl-node";

export async function GET() {
  try {
    // Check for API key
    const apiKey = process.env.DEEPL_API_KEY;
    if (!apiKey || apiKey === "your_deepl_api_key_here") {
      return NextResponse.json(
        { error: "DeepL API key not configured" },
        { status: 500 }
      );
    }

    // Initialize DeepL translator
    const translator = new deepl.Translator(apiKey);

    // List all glossaries
    const glossaries = await translator.listGlossaries();

    // Format the response
    const formattedGlossaries = glossaries.map((g) => ({
      name: g.name,
      glossaryId: g.glossaryId,
      sourceLang: g.sourceLang,
      targetLang: g.targetLang,
      entryCount: g.entryCount,
      creationTime: g.creationTime,
    }));

    return NextResponse.json({
      glossaries: formattedGlossaries,
      count: formattedGlossaries.length,
    });
  } catch (error: any) {
    console.error("Error fetching glossaries:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch glossaries" },
      { status: 500 }
    );
  }
}


