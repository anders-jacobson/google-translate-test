"use client";

import { useTranslation } from "../contexts/TranslationContext";

export default function TranslationButton() {
  const { togglePanel, isTranslated, currentLanguage } = useTranslation();

  return (
    <button
      onClick={togglePanel}
      className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#18274a] text-white px-3 py-4 rounded-l-xl shadow-2xl hover:bg-[#233861] transition-all duration-300 z-50 group translation-button"
      aria-label="Open translation panel"
      data-no-translate
    >
      <div className="flex flex-col items-center gap-2">
        {/* Better translation icon - Globe with languages */}
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>

        {/* Arrow pointing left */}
        <svg
          className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M15 19l-7-7 7-7"
          />
        </svg>

        {/* Language indicator */}
        {isTranslated && currentLanguage && (
          <span className="text-xs font-bold mt-1">{currentLanguage}</span>
        )}
      </div>
    </button>
  );
}
