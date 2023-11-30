import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList/index";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Page() {
  const topAnimeData = await getAnimeResponse("top/anime", "limit=4");
  let recommendedAnimeData = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recommendedAnimeData = reproduce(recommendedAnimeData, 4);
  return (
    <>
      {/* Treding Anime */}
      <section>
        <Header
          title="Sedang Trending"
          linkHref="/popular"
          linkTitle="Lihat Semua"
        />
        <AnimeList data={topAnimeData.data} />
      </section>

      {/* Recommendation Anime */}
      {recommendedAnimeData?.length > 0 && (
        <section>
          <Header
            title="Rekomendasi Anime"
            linkHref="/recommendation"
            linkTitle="Lihat Semua"
          />
          <AnimeList data={recommendedAnimeData} />
        </section>
      )}
    </>
  );
}
