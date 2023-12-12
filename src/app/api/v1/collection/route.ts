import { NextRequest } from "next/server";
import { createCollection, findOne } from "@/repository/collection";
import { translateError } from "@/libs/prisma-libs";
import SuccessResponse from "@/libs/response/success";

export async function POST(request: NextRequest) {
  const { anime_mal_id, user_email, anime_title, anime_image } =
    await request.json();
  const err = await createCollection({
    anime_mal_id: parseInt(anime_mal_id),
    user_email,
    anime_title,
    anime_image,
  });

  return err != null
    ? translateError(err).Send()
    : SuccessResponse.OK(null).Send();
}

export async function GET(request: NextRequest) {
  const { anime_mal_id, user_email } = await request.json();
  const { data, error: err } = await findOne({
    anime_mal_id: parseInt(anime_mal_id),
    user_email,
  });

  return err != null
    ? translateError(err).Send()
    : SuccessResponse.OK(data).Send();
}
