import { NextRequest } from "next/server";
import { translateError } from "@/libs/prisma-libs";
import SuccessResponse from "@/libs/response/success";
import { createComment } from "@/repository/comment";

export async function POST(request: NextRequest) {
  const { anime_mal_id, user_email, username, comment, anime_title } =
    await request.json();
  const err = await createComment({
    anime_mal_id: parseInt(anime_mal_id),
    user_email,
    username,
    comment,
    anime_title,
  });

  return err != null
    ? translateError(err).Send()
    : SuccessResponse.OK(null).Send();
}
