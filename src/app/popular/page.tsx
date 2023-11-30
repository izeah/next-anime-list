"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList/index";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState<any>(null);

  useEffect(() => {
    getAnimeResponse("top/anime", `page=${page}`).then((json) => {
      setTopAnime(json);
    });
  }, [page]);

  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList data={topAnime?.data} />
      <Pagination
        page={page}
        lastPage={Number(topAnime?.pagination?.last_visible_page ?? 0)}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
