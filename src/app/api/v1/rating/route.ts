import { NextRequest } from "next/server";
import { translateError } from "@/libs/prisma-libs";
import SuccessResponse from "@/libs/response/success";
import { createRating } from "@/repository/rating";

export async function POST(request: NextRequest) {
  const { anime_mal_id, anime_title, user_email, rating } =
    await request.json();
  const err = await createRating({
    anime_mal_id: parseInt(anime_mal_id),
    user_email,
    anime_title,
    rating,
  });

  return err != null
    ? translateError(err).Send()
    : SuccessResponse.OK(null).Send();
}
