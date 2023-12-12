import prismaClient from "@/libs/prisma-libs";

const createCollection = async ({
  anime_mal_id,
  user_email,
  anime_title,
  anime_image,
}: {
  anime_mal_id: number;
  user_email: string;
  anime_title: undefined | null | string;
  anime_image: undefined | null | string;
}) => {
  try {
    const data = { anime_mal_id, user_email, anime_title, anime_image };
    await prismaClient.collection.create({ data });
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
    const data = await prismaClient.collection.findFirstOrThrow({
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

const findByEmail = async (user_email: string) => {
  try {
    const data = await prismaClient.collection.findMany({
      where: {
        user_email: user_email,
      },
    });
    return { data: data, error: null };
  } catch (e: any) {
    return { data: [], error: e };
  }
};

export { createCollection, findOne, findByEmail };
