"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiPaperPlaneRightBold } from "react-icons/pi";

const CommentInput = ({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}: {
  anime_mal_id: number;
  user_email: string;
  username: string;
  anime_title: string;
}) => {
  const [comment, setComment] = useState("");
  const [isCommented, setIsCommented] = useState(false);

  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePosting = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("🚀 komentarnya adalah : ", comment);
    const data = { anime_mal_id, user_email, username, comment, anime_title };
    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    console.log("😎 response data :", responseData);
    if (responseData.success) {
      setIsCommented(!isCommented);
      setComment("");
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isCommented && (
        <p className="text-color-primary">komentar terkirim ...</p>
      )}
      <textarea
        onChange={handleInput}
        value={comment}
        className="w-full h-32 text-xl p-4"
      />
      <button
        onClick={handlePosting}
        className="w-56 py-2 px-4 bg-color-accent"
      >
        <div className="flex flex-row justify-center items-center gap-2">
          <PiPaperPlaneRightBold />
          Posting Komentar
        </div>
      </button>
    </div>
  );
};

export default CommentInput;
