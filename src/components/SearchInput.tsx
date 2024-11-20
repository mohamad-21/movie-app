"use client";

import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function SearchInput({ onSubmit }: { onSubmit?: () => any }) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit?.();
    router.replace(`/search?q=${searchTerm}`);
    setSearchTerm("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center justify-between gap-3 rounded-full pr-3 border border-zinc-600 bg-zinc-900 duration-700 transition-all">
        <input
          type="text"
          className="placeholder:text-zinc-400 py-2 pl-3 outline-none bg-transparent text-xs"
          placeholder="Search Movies, Series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconSearch size="20" className="text-zinc-400" />
      </form>
    </>
  );
}

export default SearchInput;
