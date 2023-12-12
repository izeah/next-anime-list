"use client";

import { useRouter } from "next/navigation";
import { PiFileMagnifyingGlassLight } from "react-icons/pi";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2">
      <PiFileMagnifyingGlassLight className="text-color-accent" size={50} />
      <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
      <button
        onClick={() => router.back()}
        className="underline text-color-primary hover:text-color-accent transition-all duration-300"
      >
        Kembali
      </button>
    </div>
  );
};

export default NotFound;
