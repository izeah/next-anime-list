import { findCommentByAnimeMalID } from "@/repository/comment";
import React from "react";

const CommentBox = async ({ anime_mal_id }: { anime_mal_id: number }) => {
  const { data: comments } = await findCommentByAnimeMalID(anime_mal_id);
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-color-dark bg-color-primary p-2"
          >
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentBox;
