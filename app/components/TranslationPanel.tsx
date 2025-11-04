"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "../contexts/TranslationContext";

export default function TranslationPanel() {
  const {
    isPanelOpen,
    closePanel,
    translatePage,
    resetPage,
    isTranslating,
    error,
    isTranslated,
    currentLanguage,
  } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState<"SV" | "FI" | "">(
    ""
  );
  const [useGlossary, setUseGlossary] = useState(false);

  // Automatically translate when language or glossary setting changes
  useEffect(() => {
    if (selectedLanguage && isPanelOpen) {
      // Add a small delay to debounce rapid changes
      const timeoutId = setTimeout(() => {
        translatePage(selectedLanguage, useGlossary);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedLanguage, useGlossary, isPanelOpen, translatePage]);

  const handleTranslate = async () => {
    if (!selectedLanguage) return;
    await translatePage(selectedLanguage, useGlossary);
  };

  const handleReset = () => {
    resetPage();
    setSelectedLanguage("");
    setUseGlossary(false);
  };

  return (
    <>
      {/* Panel - No overlay, page stays visible */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out border-l-2 border-gray-200 translation-panel ${
          isPanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-no-translate
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-[#18274a] text-white">
            <h2 className="text-2xl font-bold">Translate Page</h2>
            <button
              onClick={closePanel}
              className="p-2 hover:bg-[#233861] rounded-lg transition-colors"
              aria-label="Close panel"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Current Status */}
            {isTranslated && currentLanguage && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">
                    Translated to{" "}
                    {currentLanguage === "SV" ? "Swedish" : "Finnish"}
                  </span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-2 text-red-800">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold">Translation Error</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Language Selection */}
            <div>
              <label
                htmlFor="language-select"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Target Language
              </label>
              <select
                id="language-select"
                value={selectedLanguage}
                onChange={(e) =>
                  setSelectedLanguage(e.target.value as "SV" | "FI" | "")
                }
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18274a] focus:border-transparent outline-none transition-all text-gray-900 font-medium"
                disabled={isTranslating}
              >
                <option value="">Select Language</option>
                <option value="SV">Swedish (Svenska)</option>
                <option value="FI">Finnish (Suomi)</option>
              </select>
            </div>

            {/* Glossary Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="use-glossary"
                checked={useGlossary}
                onChange={(e) => setUseGlossary(e.target.checked)}
                className="mt-1 w-5 h-5 text-[#18274a] border-gray-300 rounded focus:ring-[#18274a] cursor-pointer"
                disabled={isTranslating}
              />
              <label
                htmlFor="use-glossary"
                className="text-sm text-gray-700 cursor-pointer"
              >
                <span className="font-semibold block mb-1">
                  Use "Product terms" Glossary
                </span>
                <span className="text-gray-600">
                  Enable to use your custom "Product terms" glossary for
                  consistent terminology.
                  <br />
                  <span className="text-xs text-green-600 font-medium">
                    ✓ Automatically finds your glossary by name
                  </span>
                </span>
              </label>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2 text-blue-800">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-sm">
                  <p className="font-semibold mb-1">
                    Translation powered by DeepL
                  </p>
                  <p className="text-blue-700">
                    All visible text on the page will be translated. The
                    translation will reset when you refresh the page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-gray-200 p-6 space-y-3 bg-gray-50">
            {/* Translation status indicator */}
            {isTranslating && (
              <div className="flex items-center justify-center gap-2 py-2 text-[#18274a]">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="font-semibold">Translating...</span>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800 text-center">
                <span className="font-semibold">
                  💡 Auto-translate enabled:
                </span>
                <br />
                Translation updates automatically when you change settings
              </p>
            </div>

            {isTranslated && (
              <button
                onClick={handleReset}
                disabled={isTranslating}
                className="w-full py-3 px-6 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Reset to Original
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
