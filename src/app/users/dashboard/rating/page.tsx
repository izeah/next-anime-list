import Header from "@/components/Dashboard/Header";
import StarRatingScore from "@/components/Dashboard/StarRatingScore";
import { authUserSession } from "@/libs/auth-libs";
import { findRatingByUserEmail } from "@/repository/rating";
import Link from "next/link";
import React from "react";
import { PiStarHalfBold } from "react-icons/pi";

const Page = async () => {
  const userSession = await authUserSession();
  const { data: ratings } = await findRatingByUserEmail(userSession!.email!);
  return (
    <section className="mt-4 w-full px-2">
      <Header title="My Ratings" />
      {ratings.length > 0 ? (
        <div className="grid grid-cols-1 py-2 gap-4">
          {ratings.map((rating) => {
            return (
              <Link
                href={`/anime/${rating.anime_mal_id}`}
                key={rating.id}
                className="bg-color-primary text-color-dark p-4 hover:bg-[#ccc]"
              >
                <p className="text-xl">{rating.anime_title}</p>
                <StarRatingScore count={5} ratingValue={rating.rating} />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="w-full min-h-[75vh] flex flex-col justify-center items-center gap-2">
          <PiStarHalfBold className="text-color-primary" size={100} />
          <p className="text-2xl font-bold text-color-primary">
            Semua rating kamu akan tampil di sini!
          </p>
        </div>
      )}
    </section>
  );
};

export default Page;
