import prismaClient from "@/libs/prisma-libs";

const createComment = async ({
  anime_mal_id,
  user_email,
  username,
  comment,
  anime_title,
}: {
  anime_mal_id: number;
  user_email: string;
  username: string;
  comment: string;
  anime_title: string;
}) => {
  try {
    const data = { anime_mal_id, user_email, username, comment, anime_title };
    await prismaClient.comment.create({ data });
    return null;
  } catch (e: any) {
    return e;
  }
};

const findCommentByAnimeMalID = async (anime_mal_id: number) => {
  try {
    const comments = await prismaClient.comment.findMany({
      where: {
        anime_mal_id: {
          equals: anime_mal_id,
        },
      },
    });
    return { data: comments, error: null };
  } catch (e: any) {
    return { data: [], error: e };
  }
};

const findCommentByUserEmail = async (user_email: string) => {
  try {
    const comments = await prismaClient.comment.findMany({
      where: {
        user_email: {
          equals: user_email,
        },
      },
    });
    return { data: comments, error: null };
  } catch (e: any) {
    return { data: [], error: e };
  }
};

export { createComment, findCommentByAnimeMalID, findCommentByUserEmail };
