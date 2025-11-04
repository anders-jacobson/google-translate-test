"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import {
  collectTextNodes,
  applyTranslations,
  resetToOriginal,
  isTranslated as checkIsTranslated,
} from "../utils/translateDOM";

type Language = "SV" | "FI" | null;

interface TranslationContextType {
  currentLanguage: Language;
  isTranslating: boolean;
  error: string | null;
  isPanelOpen: boolean;
  isTranslated: boolean;
  translatePage: (targetLang: Language, useGlossary: boolean) => Promise<void>;
  resetPage: () => void;
  togglePanel: () => void;
  closePanel: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);

  const translatePage = useCallback(
    async (targetLang: Language, useGlossary: boolean) => {
      if (!targetLang) return;

      setIsTranslating(true);
      setError(null);

      try {
        // Collect all text nodes from the DOM
        const { nodes, texts } = collectTextNodes();

        if (texts.length === 0) {
          throw new Error("No text found to translate");
        }

        // Call the translation API
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: texts,
            targetLang,
            useGlossary,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Translation failed");
        }

        const data = await response.json();

        // Apply translations to the DOM
        applyTranslations(nodes, data.translations);

        setCurrentLanguage(targetLang);
        setIsTranslated(true);
      } catch (err: any) {
        console.error("Translation error:", err);
        setError(err.message || "Translation failed");
      } finally {
        setIsTranslating(false);
      }
    },
    []
  );

  const resetPage = useCallback(() => {
    resetToOriginal();
    setCurrentLanguage(null);
    setIsTranslated(false);
    setError(null);
  }, []);

  const togglePanel = useCallback(() => {
    setIsPanelOpen((prev) => !prev);
  }, []);

  const closePanel = useCallback(() => {
    setIsPanelOpen(false);
  }, []);

  return (
    <TranslationContext.Provider
      value={{
        currentLanguage,
        isTranslating,
        error,
        isPanelOpen,
        isTranslated,
        translatePage,
        resetPage,
        togglePanel,
        closePanel,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}
