import AddToCollectionButton from "@/components/AnimeList/AddToCollectionButton";
import CommentBox from "@/components/AnimeList/CommentBox";
import CommentInput from "@/components/AnimeList/CommentInput";
import StarRatingScore from "@/components/AnimeList/StarRatingScore";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import { findOne } from "@/repository/collection";
import {
  findAverageRatingByAnimeMalID,
  findOne as findRating,
} from "@/repository/rating";
import Image from "next/image";
import { PiStarFill } from "react-icons/pi";

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const userSession = await authUserSession();
  const { data: userAnimeCollectionData } = await findOne({
    anime_mal_id: parseInt(id),
    user_email: userSession?.email,
  });
  const { data: userAnimeRatingData } = await findRating({
    anime_mal_id: parseInt(id),
    user_email: userSession?.email,
  });
  const { data: animeAverageRating } = await findAverageRatingByAnimeMalID(
    parseInt(id)
  );

  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {anime.data.title} - {anime.data.year}
        </h3>
        {userSession && (
          <AddToCollectionButton
            anime_mal_id={parseInt(id)}
            user_email={userSession!.email}
            isAlreadyAdded={userAnimeCollectionData !== null}
            anime_title={anime.data.title}
            anime_image={anime.data.images.jpg.image_url}
          />
        )}
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 hover:bg-color-secondary">
          <h3 className="font-bold">PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        {animeAverageRating && (
          <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 hover:bg-color-secondary">
            <h3 className="font-bold">SKOR</h3>
            <div className="flex flex-row justify-center items-center gap-2">
              <p className="text-2xl">{animeAverageRating.toString()}</p>
              <PiStarFill className="text-color-accent" size={35} />
            </div>
          </div>
        )}
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 hover:bg-color-secondary">
          <h3 className="font-bold">ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 hover:bg-color-secondary">
          <h3 className="font-bold">EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2 hover:bg-color-secondary">
          <h3 className="font-bold">AGE RATING</h3>
          <p>{anime.data.rating}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-6 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="rounded w-full object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="p-4">
        {userSession && (
          <div className="mb-4">
            <StarRatingScore
              count={5}
              anime_mal_id={anime.data.mal_id}
              anime_title={anime.data.title}
              user_email={userSession!.email!}
              isAlreadyRated={userAnimeRatingData !== null}
              ratingValue={userAnimeRatingData?.rating}
            />
          </div>
        )}

        <h3 className="text-color-primary text-2xl">💭 Komentar Penonton</h3>
        <CommentBox anime_mal_id={anime.data.mal_id} />
        {userSession && (
          <CommentInput
            anime_mal_id={anime.data.mal_id}
            user_email={userSession!.email!}
            username={userSession!.name!}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
