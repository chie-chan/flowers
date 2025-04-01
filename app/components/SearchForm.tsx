'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="キーワードを入力して検索..."
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-12 text-gray-900 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-200"
      />
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
      >
        検索
      </button>
    </form>
  );
} 