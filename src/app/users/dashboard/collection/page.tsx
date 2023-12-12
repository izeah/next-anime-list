import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import { findByEmail } from "@/repository/collection";
import { getAnimeResponse } from "@/libs/api-libs";
import { IAnimeData } from "@/models/anime";
import { PiMonitorPlayBold } from "react-icons/pi";

export default async function Page() {
  const user = await authUserSession();
  const { data: collection } = await findByEmail(user!.email!);
  return (
    <section className="mt-4 w-full px-2">
      <Header title="My Collection" />
      {collection.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collection.map((item, index) => (
            <Link
              key={index}
              href={`/anime/${item.anime_mal_id}`}
              className="relative"
            >
              <Image
                src={item.anime_image!}
                alt={item.anime_image!}
                width={350}
                height={350}
                className="w-full"
                priority
              ></Image>
              <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-accent h-16">
                <h5 className="text-xl text-center">{item.anime_title}</h5>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full min-h-[75vh] flex flex-col justify-center items-center gap-2">
          <PiMonitorPlayBold className="text-color-primary" size={100} />
          <p className="text-2xl font-bold text-color-primary">
            Anime favorit kamu akan tampil di sini!
          </p>
        </div>
      )}
    </section>
  );
}
