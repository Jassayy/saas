"use client";

import React, { useState } from "react";

// Content types from schema.prisma
const CONTENT_TYPES = [
  { label: "Strategy", value: "STRATEGY" },
  { label: "Ad Copy", value: "AD_COPY" },
  { label: "Social Media Post", value: "SOCIAL_MEDIA_POST" },
  { label: "Blog Post", value: "BLOG_POST" },
];

const GenerateContentPage = () => {
  const [contentType, setContentType] = useState(CONTENT_TYPES[0].value);
  const [userPrompt, setUserPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/generate-content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentType, userPrompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate content");
      setResult(data.content);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Generate Marketing Content</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white dark:bg-neutral-900 p-4 rounded shadow"
      >
        <div>
          <label className="block mb-1 font-medium">Content Type</label>
          <select
            className="w-full border rounded p-2"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            {CONTENT_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Prompt / Instructions
          </label>
          <textarea
            className="w-full border rounded p-2"
            rows={3}
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && <div className="mt-4 text-red-600">{error}</div>}
      {result && (
        <div className="mt-6 bg-gray-100 dark:bg-neutral-800 p-4 rounded">
          <h2 className="font-semibold mb-2">Generated Content:</h2>
          <pre className="whitespace-pre-wrap break-words">{result}</pre>
        </div>
      )}
    </div>
  );
};

export default GenerateContentPage;
