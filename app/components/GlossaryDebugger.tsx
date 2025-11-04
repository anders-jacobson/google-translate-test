"use client";

import { useState } from "react";

export default function GlossaryDebugger() {
  const [glossaries, setGlossaries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGlossaries = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/glossaries");
      if (!response.ok) {
        throw new Error("Failed to fetch glossaries");
      }
      const data = await response.json();
      setGlossaries(data.glossaries || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white border-2 border-gray-300 rounded-lg shadow-xl p-4 max-w-md z-50">
      <h3 className="font-bold text-lg mb-3 text-gray-900">
        🔍 Glossary Debugger
      </h3>

      <button
        onClick={fetchGlossaries}
        disabled={loading}
        className="w-full bg-[#18274a] text-white px-4 py-2 rounded hover:bg-[#233861] transition-colors disabled:opacity-50 mb-3"
      >
        {loading ? "Loading..." : "Check My Glossaries"}
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 mb-3">
          <p className="text-red-800 text-sm">{error}</p>
        </div>
      )}

      {glossaries.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-700">
            Found {glossaries.length} glossary(ies):
          </p>
          {glossaries.map((glossary, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded p-3 text-sm"
            >
              <p className="font-bold text-gray-900">{glossary.name}</p>
              <p className="text-gray-600 mt-1">
                <span className="font-medium">ID:</span>{" "}
                <code className="bg-gray-200 px-1 rounded text-xs">
                  {glossary.glossaryId}
                </code>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Languages:</span>{" "}
                {glossary.sourceLang} → {glossary.targetLang}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Entries:</span>{" "}
                {glossary.entryCount}
              </p>
              {glossary.name === "Product terms" && (
                <div className="mt-2 bg-green-100 border border-green-300 rounded p-2">
                  <p className="text-green-800 font-semibold text-xs">
                    ✓ This glossary will be used when checkbox is enabled
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {glossaries.length === 0 && !loading && !error && (
        <p className="text-gray-500 text-sm">
          Click the button to check your glossaries
        </p>
      )}
    </div>
  );
}


