"use client";
import React, { MouseEventHandler, useState } from "react";

export default function AddToCollectionButton({
  anime_mal_id,
  user_email,
  isAlreadyAdded,
  anime_title,
  anime_image,
}: {
  anime_mal_id: number;
  user_email: undefined | null | string;
  isAlreadyAdded: boolean;
  anime_title: undefined | null | string;
  anime_image: undefined | null | string;
}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleCollection = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { anime_mal_id, user_email, anime_title, anime_image };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData.success) setIsAdded(!isAdded);
  };

  return (
    <button
      onClick={handleCollection}
      className="px-2 py-1 bg-color-accent disabled:bg-color-secondary disabled:text-color-primary"
      disabled={isAdded || isAlreadyAdded}
    >
      {isAdded || isAlreadyAdded
        ? "✔️ Added To Collection"
        : "➕ Add To Collection"}
    </button>
  );
}
