import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList/index";
import { getAnimeResponse } from "@/libs/api-libs";

export default async function Page({ params }: Readonly<{ params: any }>) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnimeData = await getAnimeResponse(
    "anime",
    `q=${decodedKeyword}`
  );
  return (
    <>
      <Header title={`Pencarian untuk ${decodedKeyword} ...`} />
      <AnimeList data={searchAnimeData.data} />
    </>
  );
}
