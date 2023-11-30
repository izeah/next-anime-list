"use client";

import { useRouter } from "next/navigation";
import { PiArrowSquareLeft } from "react-icons/pi";

export default function Header({ title }: { title: string }) {
  const router = useRouter();
  const handlerBack = (event: any) => {
    event?.preventDefault();
    router.back();
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <span className="text-color-primary cursor-pointer" onClick={handlerBack}>
        <PiArrowSquareLeft size={32} />
      </span>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
}
