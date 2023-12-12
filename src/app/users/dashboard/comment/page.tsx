import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import { findCommentByUserEmail } from "@/repository/comment";
import Link from "next/link";
import React from "react";
import { PiChatCenteredTextLight } from "react-icons/pi";

const Page = async () => {
  const userSession = await authUserSession();
  const { data: comments } = await findCommentByUserEmail(userSession!.email!);
  return (
    <section className="mt-4 w-full px-2">
      <Header title="My Comments" />
      {comments.length > 0 ? (
        <div className="grid grid-cols-1 py-2 gap-4">
          {comments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_mal_id}`}
                key={comment.id}
                className="bg-color-primary text-color-dark p-4 hover:bg-[#ccc]"
              >
                <p className="text-xs">{comment.anime_title}</p>
                <p className="italic">{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-full min-h-[75vh] flex flex-col justify-center items-center gap-2">
          <PiChatCenteredTextLight className="text-color-primary" size={100} />
          <p className="text-2xl font-bold text-color-primary">
            Semua komentar kamu akan tampil di sini!
          </p>
        </div>
      )}
    </section>
  );
};

export default Page;
