"use client";

import { PiMagnifyingGlassBold } from "react-icons/pi";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function InputSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current?.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${searchRef.current?.value}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Cari anime ..."
        className="w-full py-2 px-4 rounded-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2.5 right-4" onClick={handleSearch}>
        <PiMagnifyingGlassBold size={20} />
      </button>
    </div>
  );
}
