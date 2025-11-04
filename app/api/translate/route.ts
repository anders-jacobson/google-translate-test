import { NextRequest, NextResponse } from "next/server";
import * as deepl from "deepl-node";

export async function POST(request: NextRequest) {
  try {
    const { text, targetLang, useGlossary } = await request.json();

    // Validate input
    if (!text || !Array.isArray(text)) {
      return NextResponse.json(
        { error: "Invalid input: text must be an array" },
        { status: 400 }
      );
    }

    if (!targetLang || !["SV", "FI"].includes(targetLang)) {
      return NextResponse.json(
        { error: "Invalid target language. Must be SV or FI" },
        { status: 400 }
      );
    }

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

    // Filter out empty strings
    const textsToTranslate = text.filter((t) => t.trim().length > 0);

    if (textsToTranslate.length === 0) {
      return NextResponse.json({ translations: [] });
    }

    // Translate text with optional glossary support
    const options: deepl.TranslateTextOptions = {};

    // If glossary is enabled, find the "Product terms" glossary by name
    if (useGlossary) {
      try {
        // List all glossaries
        const glossaries = await translator.listGlossaries();

        // Find the "Product terms" glossary for the target language
        const productTermsGlossary = glossaries.find(
          (g) =>
            g.name === "Product terms" &&
            g.targetLang.toLowerCase() === targetLang.toLowerCase()
        );

        if (productTermsGlossary) {
          options.glossaryId = productTermsGlossary.glossaryId;
          console.log(
            `✓ Using glossary: ${productTermsGlossary.name} (${productTermsGlossary.glossaryId})`
          );
          console.log(
            `  - Source: ${productTermsGlossary.sourceLang} → Target: ${productTermsGlossary.targetLang}`
          );
          console.log(`  - Entry count: ${productTermsGlossary.entryCount}`);
        } else {
          console.warn(
            `⚠️ Glossary "Product terms" not found for ${targetLang}`
          );
          console.log(
            `Available glossaries:`,
            glossaries.map((g) => ({
              name: g.name,
              langs: `${g.sourceLang} → ${g.targetLang}`,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching glossaries:", error);
        // Continue without glossary if there's an error
      }
    }

    const results = await translator.translateText(
      textsToTranslate,
      null, // source language auto-detect
      targetLang as deepl.TargetLanguageCode,
      options
    );

    // Handle both single and multiple translations
    const translations = Array.isArray(results)
      ? results.map((r) => r.text)
      : [results.text];

    return NextResponse.json({
      translations,
      sourceLanguage: Array.isArray(results)
        ? results[0]?.detectedSourceLang
        : results.detectedSourceLang,
    });
  } catch (error: any) {
    console.error("Translation error:", error);
    return NextResponse.json(
      { error: error.message || "Translation failed" },
      { status: 500 }
    );
  }
}
