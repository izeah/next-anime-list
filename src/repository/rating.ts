import prismaClient from "@/libs/prisma-libs";
import { Prisma } from "@prisma/client";

const createRating = async ({
  anime_mal_id,
  user_email,
  anime_title,
  rating,
}: {
  anime_mal_id: number;
  anime_title: string;
  user_email: string;
  rating: number;
}) => {
  try {
    const data = { anime_mal_id, anime_title, user_email, rating };
    await prismaClient.rating.create({ data });
    return null;
  } catch (e: any) {
    return e;
  }
};

const findOne = async (cond?: {
  anime_mal_id: number;
  user_email: string | null | undefined;
}) => {
  try {
    if (typeof cond === "undefined")
      throw new Error("please provide condition");
    const data = await prismaClient.rating.findFirstOrThrow({
      where: {
        ...cond,
        user_email: cond.user_email !== null ? cond.user_email : undefined,
      },
    });
    return { data: data, error: null };
  } catch (e: any) {
    return { data: null, error: e };
  }
};

const findRatingByUserEmail = async (user_email: string) => {
  try {
    const ratings = await prismaClient.rating.findMany({
      where: {
        user_email: {
          equals: user_email,
        },
      },
    });
    return { data: ratings, error: null };
  } catch (e: any) {
    return { data: [], error: e };
  }
};

const findAverageRatingByAnimeMalID = async (anime_mal_id: number) => {
  try {
    const result = await prismaClient.$queryRawUnsafe<
      { average_score: number }[]
    >(
      `SELECT AVG(r.rating) AS average_score FROM Rating r WHERE anime_mal_id = ?`,
      anime_mal_id.toString()
    );
    return { data: result[0].average_score, error: null };
  } catch (e: any) {
    return { data: null, error: e };
  }
};

export {
  createRating,
  findOne,
  findRatingByUserEmail,
  findAverageRatingByAnimeMalID,
};
